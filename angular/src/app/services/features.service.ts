import { Injectable } from '@angular/core'
import { ServicesModule } from './services.module'
import { Observable, of } from 'rxjs'
import { AppFeatures } from './models/app-features'

@Injectable({
	providedIn: ServicesModule
})

/**
 * 特性服务
 */
export class FeaturesService {
	constructor() {}

	loadFeatures(): Observable<AppFeatures[]> {
		const values: AppFeatures[] = [
			{
				title: '跨平台',
				icon: '../../assets/images/feature-icon.svg',
				contents: [
					[
						'渐进式应用',
						'充分利用现代 Web 平台的各种能力，提供 App 式体验。高性能、离线使用、免安装。'
					],
					[
						'原生',
						'借助来自 Ionic、NativeScript 和 React Native 中的技术与思想，构建原生移动应用。'
					],
					[
						'桌面',
						'借助你已经在 Web 开发中学过的能力，结合访问原生操作系统 API 的能力，创造能在桌面环境下安装的应用，横跨 Mac、Windows 和 Linux 平台。'
					]
				]
			},
			{
				title: '速度与性能',
				icon: '../../assets/images/feature-icon.svg',
				contents: [
					[
						'代码生成',
						'Angular 会把你的模板转换成代码，针对现代 JavaScript 虚拟机进行高度优化，轻松获得框架提供的高生产率，同时又能保留所有手写代码的优点。'
					],
					[
						'统一平台',
						'在服务端渲染应用的首屏，像只有 HTML 和 CSS 的页面那样几乎瞬间展现，支持 Node.js®、.NET、PHP，以及其它服务器，为通过 SEO 来优化站点铺平了道路。'
					],
					[
						'代码拆分',
						'借助新的组件路由器，Angular 可以实现快速加载。自动代码拆分机制可以让用户仅仅加载那些用于渲染所请求页面的代码。'
					]
				]
			},
			{
				title: '生产率',
				icon: '../../assets/images/feature-icon.svg',
				contents: [
					['模板', '通过简单而强大的模板语法，快速创建 UI 视图。'],
					['Angular CLI', '命令行工具：快速进入构建环节、添加组件和测试，然后立即部署。'],
					[
						'各种 IDE',
						'在常用 IDE 和编辑器中获得智能代码补全、实时错误反馈及其它反馈等特性。'
					]
				]
			},
			{
				title: '完整开发故事',
				icon: '../../assets/images/feature-icon.svg',
				contents: [
					['测试', '使用 Karma 进行单元测试，每当你保存时都能知道是否弄坏了点什么。'],
					[
						'动画',
						'通过 Angular 中直观简便的 API 创建高性能复杂编排和动画时间线 —— 只要非常少的代码。'
					],
					[
						'无障碍性',
						'通过支持 ARIA 的组件、开发者指南和内置的一体化测试基础设施，创建具有完备无障碍性的应用。'
					]
				]
			}
		]
		return of(values)
	}
}
