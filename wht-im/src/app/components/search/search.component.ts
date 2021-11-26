import { Component } from '@angular/core'
import { SidebarService } from '../../services/sidebar.service'

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

/**
 * 搜索内容组件
 */
export class SearchComponent {
	constructor(private sidebarService: SidebarService) {
	}

	/**
	 * 显示侧边栏
	 */
	showSliderBar() {
		this.sidebarService.show()
	}
}
