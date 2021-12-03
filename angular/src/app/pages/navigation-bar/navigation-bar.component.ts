import { Component, OnInit } from '@angular/core'
import { Link } from '../../services/models/link'
import { ActivatedRoute } from '@angular/router'

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
	 * 导航菜单
	 */
	menus: Link[] = []

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.url.subscribe((obj) => {
			console.log(obj)
		})
		this.menus = [
			{ title: '特性', url: '/features', target: '_self' },
			{ title: '文档', url: '/app', target: '_self' },
			{ title: '资源', url: '/app1', target: '_self' },
			{ title: '活动', url: '/app2', target: '_self' },
			{ title: '译者博客', url: '/app3', target: '_blank' },
			{ title: '关于中文版', url: '/app4', target: '_self' }
		]
	}

	/**
	 * 点击侧边栏按钮
	 */
	onClickSidebarButton() {}
}
