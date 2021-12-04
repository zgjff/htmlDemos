import { Injectable } from '@angular/core'
import { ServicesModule } from './services.module'
import { Link } from './models/link'
import { Observable, of } from 'rxjs'
import { PlatformInfo } from './models/platform-info'

@Injectable({
	providedIn: ServicesModule
})

/**
 * 导航栏数据服务
 */
export class NavigationBarService {
	constructor() {}

	/**
	 * 获取导航菜单
	 */
	getMenus(): Observable<[showSidebar: boolean, link: Link][]> {
		const menus: [showSidebar: boolean, link: Link][] = [
			[false, { title: '特性', url: '/features', target: '_self', isAppRouteLink: true }],
			[true, { title: '文档', url: '/docs', target: '_self', isAppRouteLink: true }],
			[false, { title: '资源', url: '/resources', target: '_self', isAppRouteLink: true }],
			[false, { title: '活动', url: '/events', target: '_self', isAppRouteLink: true }],
			[
				false,
				{
					title: '译者博客',
					url: 'https://blog.ralph.wang/articles/a7fa54df_Welcome',
					target: '_blank',
					isAppRouteLink: false
				}
			],
			[
				false,
				{
					title: '关于中文版',
					url: '/translations/cn/home',
					target: '_self',
					isAppRouteLink: true
				}
			]
		]
		return of(menus)
	}

	/**
	 * 获取平台信息
	 */
	getPlatformsInfo(): Observable<PlatformInfo[]> {
		const platforms: PlatformInfo[] = [
			{
				title: 'Twitter',
				url: 'https://twitter.com/angular',
				svgViewBox: '0, 0, 50, 59',
				svgPath:
					'M50,9.3c-1.8,0.8-3.8,1.4-5.9,1.6c2.1-1.3,3.7-3.3,4.5-5.7c-2,1.2-4.2,2-6.5,2.5c-1.9-2-4.5-3.2-7.5-3.2\n' +
					'           c-5.7,0-10.3,4.6-10.3,10.3c0,0.8,0.1,1.6,0.3,2.3C16.1,16.7,8.5,12.6,3.5,6.4c-0.9,1.5-1.4,3.3-1.4,5.2c0,3.6,1.8,6.7,4.6,8.5\n' +
					'           C5,20,3.4,19.6,2,18.8c0,0,0,0.1,0,0.1c0,5,3.5,9.1,8.2,10.1c-0.9,0.2-1.8,0.4-2.7,0.4c-0.7,0-1.3-0.1-1.9-0.2\n' +
					'           c1.3,4.1,5.1,7,9.6,7.1c-3.5,2.8-7.9,4.4-12.7,4.4c-0.8,0-1.6,0-2.4-0.1c4.5,2.9,9.9,4.6,15.7,4.6c18.9,0,29.2-15.6,29.2-29.2\n' +
					'           c0-0.4,0-0.9,0-1.3C46.9,13.2,48.6,11.4,50,9.3z'
			},
			{
				title: 'Github',
				url: 'https://github.com/angular/angular',
				svgViewBox: '0 0 51.8 50.4',
				svgPath:
					'M25.9,0.2C11.8,0.2,0.3,11.7,0.3,25.8c0,11.3,7.3,20.9,17.5,24.3c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8\n' +
					'           c-7.1,1.5-8.6-3-8.6-3c-1.2-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6c2.6,0.2,3.9,2.6,3.9,2.6c2.3,3.9,6,2.8,7.5,2.1\n' +
					'           c0.2-1.7,0.9-2.8,1.6-3.4c-5.7-0.6-11.7-2.8-11.7-12.7c0-2.8,1-5.1,2.6-6.9c-0.3-0.7-1.1-3.3,0.3-6.8c0,0,2.1-0.7,7,2.6\n' +
					'           c2-0.6,4.2-0.9,6.4-0.9c2.2,0,4.4,0.3,6.4,0.9c4.9-3.3,7-2.6,7-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.6,1.8,2.6,4.1,2.6,6.9\n' +
					'           c0,9.8-6,12-11.7,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.2-3.4,17.5-13,17.5-24.3\n' +
					'           C51.5,11.7,40.1,0.2,25.9,0.2z'
			},
			{
				title: 'Youtube',
				url: 'https://youtube.com/angular',
				svgViewBox: '0 0 24 24',
				svgPath:
					'M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77\n' +
					'           C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42\n' +
					'           c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z'
			}
		]
		return of(platforms)
	}
}
