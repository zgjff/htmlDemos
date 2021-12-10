import { Component, OnDestroy, OnInit } from '@angular/core'
import { Link } from '../../services/models/link'
import { NavigationBarService } from '../../services/navigation-bar.service'
import { PlatformInfo } from '../../services/models/platform-info'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter, map, Subscription } from 'rxjs'

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: ['./navigation-bar.component.css']
})

/**
 * 导航栏
 */
export class NavigationBarComponent implements OnInit, OnDestroy {
	/**
	 * 是否可以显示侧边栏
	 */
	canShowSidebar = false
	/**
	 * 是否是fixed定位
	 */
	isFixed = false
	/**
	 * 导航菜单
	 */
	menus: [showSidebar: boolean, link: Link][] = []
	/**
	 * 其它平台信息
	 */
	platformInfos: PlatformInfo[] = []
	private subscription?: Subscription

	constructor(
		private navigationBarService: NavigationBarService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.subscription = router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map(() => this.rootRoute(this.route)),
				filter((route: ActivatedRoute) => route.outlet === 'primary')
			)
			.subscribe((value) => {
				const urls = value.snapshot.url
				this.isFixed = urls.length > 0
				const data = value.snapshot.data
				this.canShowSidebar = data['showSidebar']
			})
	}

	ngOnInit() {
		this.getMenus()
		this.getPlatformInfos()
	}

	ngOnDestroy() {
		this.subscription?.unsubscribe()
	}

	/**
	 * 点击侧边栏按钮
	 */
	onClickSidebarButton() {}

	rootRoute(route: ActivatedRoute): ActivatedRoute {
		while (route.firstChild) {
			route = route.firstChild
		}
		return route
	}

	trackByFn(index: number, item: [showSidebar: boolean, link: Link]) {
		return item[1].title
	}

	/**
	 * 获取导航菜单
	 * @private
	 */
	private getMenus() {
		this.navigationBarService.getMenus().subscribe((values) => {
			this.menus = values
		})
	}

	private getPlatformInfos() {
		this.navigationBarService.getPlatformsInfo().subscribe((values) => {
			this.platformInfos = values
		})
	}
}
