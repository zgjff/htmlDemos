import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { SidebarService } from '../../services/sidebar.service'
import { AppSideBar } from '../../services/models/app-sideBar'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})

/**
 * 侧边栏组件
 */
export class SidebarComponent implements OnInit {
	sideBars: AppSideBar[] = []

	/**
	 * 点击了对应条目的导航路径
	 */
	@Output() clickRouterPath = new EventEmitter<string>()

	constructor(private sidebarService: SidebarService) {}

	/**
	 * 将导航条目下面的子条目都关闭
	 * @param sidebar
	 * @private
	 */
	private static closeChildrenSideBar(sidebar: AppSideBar) {
		if (sidebar.children.length == 0) {
			return
		}
		for (const children of sidebar.children) {
			children.open = false
			SidebarComponent.closeChildrenSideBar(children)
		}
	}

	ngOnInit() {
		this.loadBarsConfig()
	}

	/**
	 * 加载配置
	 */
	loadBarsConfig() {
		this.sidebarService.loadSideBars().subscribe((values) => {
			this.sideBars = values
		})
	}

	/**
	 * 点击了具体的导航条目
	 * @param sidebar
	 */
	onClickSideBar(sidebar: AppSideBar) {
		const hasChildren = sidebar.children.length > 0
		if (!hasChildren) {
			// 没有子菜单
			if (sidebar.route != null) {
				this.clickRouterPath.emit(sidebar.route)
			}
			return
		}
		// 有子菜单
		SidebarComponent.closeChildrenSideBar(sidebar)
		sidebar.open = !sidebar.open
	}

	trackByFn(index: number, item: AppSideBar): string {
		if (item.route == null) {
			return item.title
		}
		return item.route
	}
}
