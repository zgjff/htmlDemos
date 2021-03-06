import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { Link } from '../../services/models/link'
import { NavigationBarService } from '../../services/navigation-bar.service'
import { PlatformInfo } from '../../services/models/platform-info'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter, map, Subscription } from 'rxjs'
import { ExpandOrShrinkSidebarService } from '../../services/expand-or-shrink-sidebar.service'

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
	 * 是否可以显示侧边栏信号(外部使用)
	 */
	@Output() canShowSidebar = new EventEmitter<boolean>()
	showSidebarButton = false
	/**
	 * 是否是fixed定位信号(外部使用)
	 */
	@Output() positionUsingFixed = new EventEmitter<boolean>()
	fixedPosition = false
	/**
	 * 导航菜单
	 */
	menus: [showSidebar: boolean, link: Link][] = []
	/**
	 * 其它平台信息
	 */
	platformInfos: PlatformInfo[] = []
	private showSidebar = false
	private subscription?: Subscription

	constructor(
		private navigationBarService: NavigationBarService,
		private expandOrShrinkSidebarService: ExpandOrShrinkSidebarService,
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
				this.fixedPosition = urls.length > 0
				this.positionUsingFixed.emit(this.fixedPosition)
				const data = value.snapshot.data
				this.showSidebar = data['showSidebar']
				this.showSidebarButton = this.showSidebar
				this.canShowSidebar.emit(this.showSidebar)
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
	onClickSidebarButton() {
		this.showSidebar = !this.showSidebar
		this.canShowSidebar.emit(this.showSidebar)
	}

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
