import { Injectable } from '@angular/core'
import { ServicesModule } from './services.module'
import { Observable, of } from 'rxjs'
import { AngularDesc } from './models/angular-desc'

@Injectable({
	providedIn: ServicesModule
})

/**
 * 首页描述服务
 */
export class HomeService {
	constructor() {}

	/**
	 * 获取描述列表
	 */
	getAngularDesc(): Observable<AngularDesc[]> {
		const objects: AngularDesc[] = [
			{
				title: '横跨多种平台',
				content: [
					'学会用 Angular 构建应用，然后把这些代码和能力复用在多种多种不同平台的应用上 —— Web、移动 Web、移动应用、原生应用和桌面原生应用。'
				],
				imgUrl: '../../assets/images/responsive-framework.svg',
				imgAlt: '平台',
				imgWidth: 340,
				showImgLeft: true,
				hiddenDivider: false
			},
			{
				title: '速度与性能',
				content: [
					'通过 Web Worker 和服务端渲染，达到在如今(以及未来）的 Web 平台上所能达到的最高速度。',
					'Angular 让你有效掌控可伸缩性。基于 RxJS、Immutable.js 和其它推送模型，能适应海量数据需求。'
				],
				imgUrl: '../../assets/images/speed-performance.svg',
				imgAlt: '速度与性能',
				imgWidth: 323,
				showImgLeft: false,
				hiddenDivider: false
			},
			{
				title: '美妙的工具',
				content: [
					'使用简单的声明式模板，快速实现各种特性。使用自定义组件和大量现有组件，扩展模板语言。在几乎所有的 IDE 中获得针对 Angular 的即时帮助和反馈。所有这一切，都是为了帮助你编写漂亮的应用，而不是绞尽脑汁的让代码“能用”。'
				],
				imgUrl: '../../assets/images/joyful-development.svg',
				imgAlt: '工具',
				imgWidth: 400,
				showImgLeft: true,
				hiddenDivider: false
			},
			{
				title: '百万粉丝热捧',
				content: [
					'从原型到全球部署，Angular 都能带给你支撑 Google 大型应用的那些高延展性基础设施与技术。'
				],
				imgUrl: '../../assets/images/loved-by-millions.svg',
				imgAlt: '粉丝',
				imgWidth: 455,
				showImgLeft: false,
				hiddenDivider: true
			},
			{
				title: '立即试用',
				content: ['通过一个现成的范例应用来探索 Angular 的能力。不用安装任何东西。'],
				imgUrl: '../../assets/images/code-icon.svg',
				imgAlt: '试用',
				imgWidth: 70,
				showImgLeft: true,
				hiddenDivider: true,
				routeLink: '/start'
			}
		]
		return of(objects)
	}
}
