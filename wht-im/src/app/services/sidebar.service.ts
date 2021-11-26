import { Injectable, InjectionToken, Injector, NgZone } from '@angular/core'
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { SidebarComponent } from '../components/sidebar/sidebar.component'
import { SidebarRef } from '../components/sidebar/SidebarRef'

export const OVERLAY_COMPONENT_REF_TOKEN = new InjectionToken('sidebar-overlay-component-ref')

@Injectable({
	providedIn: 'root'
})

/**
 * 侧边栏服务
 */
export class SidebarService {

	constructor(private overlay: Overlay, private parentInjector: Injector, private ngZone: NgZone) {
	}

	/**
	 * 显示侧边栏
	 */
	show() {
		// 配置位置策略
		const config = new OverlayConfig()
		config.positionStrategy = this.overlay
			.position()
			.global()
			.right()

		config.hasBackdrop = true

		// 创建overlayRef实例
		const overlayRef = this.overlay.create(config)
		// 对overlayRef再做一层封装，自定义自己的需要的Ref以供toast组件本身使用
		const sidebarRef = this.getRef(overlayRef)

		// 点击背景消失
		overlayRef.backdropClick().subscribe(() => {
			sidebarRef.hide()
		})

		// 将获取的sidebarRef注入进SideBar实例组件，供SideBar使用
		const injector = this.getInjector(sidebarRef, this.parentInjector)
		const sidebarPortal = this.getPortal(injector)
		// 防止当事件触发源来自ChangeDetectionStrategy.OnPush的组件中时，出现attach失效问题
		this.ngZone.run(() => {
			overlayRef.attach(sidebarPortal)
		})
	}

	protected getRef(overlayRef: OverlayRef): SidebarRef {
		return new SidebarRef(overlayRef)
	}

	protected getInjector(sidebarRef: SidebarRef, parentInjector: Injector): Injector {
		return Injector.create({
			providers: [{
				provide: OVERLAY_COMPONENT_REF_TOKEN,
				useValue: sidebarRef
			}], parent: parentInjector
		})
	}

	protected getPortal(injector: Injector): ComponentPortal<SidebarComponent> {
		return new ComponentPortal(SidebarComponent, null, injector)
	}
}
