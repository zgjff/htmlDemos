import { OverlayRef } from '@angular/cdk/overlay'

/**
 *  对overlayRef再做一层封装，自定义自己的需要的Ref以供Sidebar组件本身使用
 */
export class SidebarRef {
	constructor(protected readonly overlay: OverlayRef) {
	}

	/**
	 * 隐藏overlay
	 */
	hide() {
		this.overlay.dispose()
	}

	/**
	 * 当前侧边栏的位置
	 */
	getPosition(): DOMRect {
		return this.overlay.overlayElement.getBoundingClientRect()
	}
}
