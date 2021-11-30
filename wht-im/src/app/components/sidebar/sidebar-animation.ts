import { animate, state, style, transition, trigger } from '@angular/animations'

/**
 * 侧边栏动画状态
 */
export type SidebarAnimationState = 'default' | 'hide'

/**
 * 侧边栏动画
 */
export const SidebarAnimation = trigger('sidebarAnimation', [
	// 定义一个default状态
	state('default', style({ transform: 'translateX(0)' })),
	// 定义一个default状态
	state('hide', style({ transform: 'translateX(100%)' })),
	// 显示的转场动画,当元素进入视图时(这个元素被插入到DOM的时候)，就会触发void => *转场，而不管它进入时处于什么状态。
	transition(':enter', [
		style({ transform: 'translateX(100%)' }),
		animate(300)
	]),
	// 隐藏的转场动画
	transition('* => hide', [
		animate(300)
	])
])

/**
 * 特殊状态：void状态
 * 具体：Void状态来为进入或离开页面的元素配置转场，也可以理解为：将元素从DOM中插入或者删除。
 * 组合使用通配符(*)和void状态你可以在转场中组合使用通配符和void状态，以触发那些进入和离开页面的动画：
 * 当元素离开视图时(这个元素从DOM删除的时候)，就会触发* => void转场，而不管它离开前处于什么状态。
 * 当元素进入视图时(这个元素被插入到DOM的时候)，就会触发void => *转场，而不管它进入时处于什么状态。
 * 在Angular中:enter 和 :leave 分别是 void => * 和 * => void 的别名。
 */
