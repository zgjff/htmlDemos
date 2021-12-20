import { ComponentRef, Injectable, InjectionToken, Injector, NgZone } from '@angular/core'
import { ServicesModule } from '../../services/services.module'
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { OverlayProductsComponent } from './overlay-products.component'
import { Product } from '../../models/product'
import { debounceTime, ReplaySubject } from 'rxjs'

export const OVERLAY_PRODUCTS_DATA_TOKEN = new InjectionToken('overlay-products-data')
export const OVERLAY_PRODUCTS_Service_TOKEN = new InjectionToken('overlay-products-service')

@Injectable({
	providedIn: ServicesModule
})

/**
 * tab-bar的推荐产品列表服务
 */
export class OverlayProductsService {
	private overlayRef?: OverlayRef
	private containerRef?: ComponentRef<OverlayProductsComponent>
	private needHideSignal = new ReplaySubject<boolean>(1)

	constructor(
		private overlay: Overlay,
		private parentInjector: Injector,
		private ngZone: NgZone
	) {
		this.observeHidden()
	}

	private static _getInjector(
		data: Product[],
		overlayService: OverlayProductsService,
		parentInjector: Injector
	): Injector {
		return Injector.create({
			providers: [
				{
					provide: OVERLAY_PRODUCTS_DATA_TOKEN,
					useValue: data
				},
				{
					provide: OVERLAY_PRODUCTS_Service_TOKEN,
					useValue: overlayService
				}
			],
			parent: parentInjector
		})
	}

	private static _getPortal(injector: Injector) {
		return new ComponentPortal(OverlayProductsComponent, null, injector)
	}

	/**
	 * 显示
	 */
	show(products: Product[], flexElement: Element) {
		if (products.length == 0) {
			// 此时直接隐藏不需要防抖
			this.hide()
			return
		}
		if (this.hasShow()) {
			this.markNeedHide(false)
			this.containerRef?.instance.update(products)
			return
		}
		const config = this._createConfig(flexElement)
		this.overlayRef = this.overlay.create(config)
		const injector = OverlayProductsService._getInjector(products, this, this.parentInjector)
		const containerPortal = OverlayProductsService._getPortal(injector)
		// 防止当事件触发源来自ChangeDetectionStrategy.OnPush的组件中时，出现attach失效问题
		this.ngZone.run(() => {
			this.containerRef = this.overlayRef?.attach(containerPortal)
		})
	}

	/**
	 * 标记是否需要隐藏,为了防止鼠标快速移动增加防抖
	 * @param yesOrNo: 隐藏与否
	 */
	markNeedHide(yesOrNo: boolean) {
		this.needHideSignal.next(yesOrNo)
	}

	/**
	 * 隐藏浮层
	 */
	private hide() {
		if (this.hasShow()) {
			this.overlayRef?.dispose()
		}
	}

	private observeHidden() {
		this.needHideSignal
			.asObservable()
			.pipe(debounceTime(300))
			.subscribe((hidden) => {
				if (hidden) {
					this.hide()
				}
			})
	}

	/**
	 * 是否已经显示浮窗
	 */
	private hasShow(): boolean {
		return this.overlayRef != null && this.overlayRef.hasAttached()
	}

	private _createConfig(element: Element): OverlayConfig {
		const positionStrategy = this.overlay
			.position()
			.flexibleConnectedTo(element)
			.withPositions([
				{
					originX: 'start',
					originY: 'bottom',
					overlayX: 'start',
					overlayY: 'top',
					offsetX: 0,
					offsetY: 0
				}
			])
		positionStrategy.withLockedPosition(true)

		const scrollStrategy = this.overlay.scrollStrategies.reposition()

		const config = new OverlayConfig({
			positionStrategy: positionStrategy,
			scrollStrategy: scrollStrategy
		})
		config.hasBackdrop = false
		return config
	}
}
