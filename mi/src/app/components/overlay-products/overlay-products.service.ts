import { ComponentRef, Injectable, InjectionToken, Injector, NgZone } from '@angular/core'
import { ServicesModule } from '../../services/services.module'
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { OverlayProductsComponent } from './overlay-products.component'
import { Product } from '../../models/product'

export const OVERLAY_PRODUCTS_DATA_TOKEN = new InjectionToken('overlay-products-data')
export const OVERLAY_PRODUCTS_REF_TOKEN = new InjectionToken('overlay-products-ref')

@Injectable({
	providedIn: ServicesModule
})
export class OverlayProductsService {
	private overlayRef?: OverlayRef
	private containerRef?: ComponentRef<OverlayProductsComponent>

	constructor(
		private overlay: Overlay,
		private parentInjector: Injector,
		private ngZone: NgZone
	) {}

	private static _getInjector(
		data: Product[],
		overlayRef: OverlayRef,
		parentInjector: Injector
	): Injector {
		return Injector.create({
			providers: [
				{
					provide: OVERLAY_PRODUCTS_DATA_TOKEN,
					useValue: data
				},
				{
					provide: OVERLAY_PRODUCTS_REF_TOKEN,
					useValue: overlayRef
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
			this.hide()
			return
		}
		if (this.hasShow()) {
			this.containerRef?.instance.update(products)
			return
		}
		const config = this._createConfig(flexElement)
		this.overlayRef = this.overlay.create(config)
		const injector = OverlayProductsService._getInjector(
			products,
			this.overlayRef,
			this.parentInjector
		)
		const containerPortal = OverlayProductsService._getPortal(injector)
		// 防止当事件触发源来自ChangeDetectionStrategy.OnPush的组件中时，出现attach失效问题
		this.ngZone.run(() => {
			this.containerRef = this.overlayRef?.attach(containerPortal)
		})
	}

	/**
	 * 隐藏
	 */
	hide() {
		if (this.hasShow()) {
			this.overlayRef?.dispose()
		}
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
