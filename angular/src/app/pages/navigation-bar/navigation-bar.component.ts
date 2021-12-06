import { Component, OnInit } from '@angular/core'
import { Link } from '../../services/models/link'
import { NavigationBarService } from '../../services/navigation-bar.service'
import { PlatformInfo } from '../../services/models/platform-info'

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: ['./navigation-bar.component.css']
})

/**
 * 导航栏
 */
export class NavigationBarComponent implements OnInit {
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

	constructor(private navigationBarService: NavigationBarService) {}

	ngOnInit() {
		this.getMenus()
		this.getPlatformInfos()
	}

	/**
	 * 点击侧边栏按钮
	 */
	onClickSidebarButton() {}

	/**
	 * 点击logo
	 */
	onClickNaviLogo() {
		this.canShowSidebar = false
		this.isFixed = false
	}

	/**
	 * 点击app内部路由
	 */
	onClickRouteLink(showSidebar: boolean) {
		this.canShowSidebar = showSidebar
		this.isFixed = true
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
