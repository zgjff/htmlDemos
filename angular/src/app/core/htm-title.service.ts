import { Injectable } from '@angular/core'
import { CoreModule } from './core.module'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { filter, map, mergeMap } from 'rxjs'

@Injectable({
	providedIn: CoreModule
})

/**
 * 修改html title 服务
 */
export class HtmTitleService {
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private title: Title
	) {}

	/**
	 * 开始设置html title
	 */
	setHtmlTitle() {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map(() => this.activatedRoute),
				map((route) => {
					while (route.firstChild !== null) {
						route = route.firstChild
					}
					return route
				}),
				filter((route) => route.outlet === 'primary'),
				mergeMap((route) => route.data)
			)
			.subscribe((data) => {
				this.title.setTitle(data['title'])
			})
	}
}
