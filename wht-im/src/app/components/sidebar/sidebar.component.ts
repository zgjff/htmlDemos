import { Component, Inject } from '@angular/core'
import { OVERLAY_COMPONENT_REF_TOKEN } from '../../services/sidebar.service'
import { SidebarRef } from './SidebarRef'
import { SidebarAnimation, SidebarAnimationState } from './sidebar-animation'
import { AnimationEvent } from '@angular/animations'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
	animations: [SidebarAnimation]
})

/**
 * 侧边栏组件
 */
export class SidebarComponent {
	animationState: SidebarAnimationState = 'default'

	constructor(@Inject(OVERLAY_COMPONENT_REF_TOKEN) readonly ref: SidebarRef) {
	}

	hide() {
		this.animationState = 'hide'
	}

	/**
	 * 动画结束
	 * @param event
	 */
	onAnimationFinished(event: AnimationEvent) {
		const toState = event.toState
		const isFadeOut = (toState as SidebarAnimationState) === 'hide'
		console.log(toState)
		if (isFadeOut) {
			this.ref.hide()
		}
	}
}
