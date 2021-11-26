import { OverlayRef } from '@angular/cdk/overlay'

/**
 *  对overlayRef再做一层封装，自定义自己的需要的Ref以供Sidebar组件本身使用
 */
export class SidebarRef {
	constructor(protected readonly overlay: OverlayRef) {
	}

	/**
	 * 隐藏侧边栏
	 */
	hide() {
		this.overlay.dispose()
	}

	/**
	 * 是否已经显示
	 */
	isVisible(): Boolean {
		const element = this.overlay && this.overlay.overlayElement
		return !element.hidden
	}

	/**
	 * 当前侧边栏的位置
	 */
	getPosition(): DOMRect {
		return this.overlay.overlayElement.getBoundingClientRect()
	}
}
