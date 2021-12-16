import { Component, OnInit } from '@angular/core'
import { LoadMockDataService } from '../../services/api-services/load-mock-data.service'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-tab-bar',
	templateUrl: './tab-bar.component.html',
	styleUrls: ['./tab-bar.component.css']
})

/**
 * 标签栏组件
 */
export class TabBarComponent implements OnInit {
	/**
	 * 搜索边框颜色
	 */
	searchBorderColor: string = '#dddddd'

	/**
	 * 收缩框的默认文字
	 */
	searchPlaceholder = '手机'
	/**
	 * 输入框是否是正在激活
	 * @private
	 */
	private inputIsFocus = false

	constructor(private mockDataService: LoadMockDataService) {}

	ngOnInit() {
		this.loadProducts()
	}

	/**
	 * 鼠标悬停
	 */
	searchBoxOnMouseover() {
		if (!this.inputIsFocus) {
			this.searchBorderColor = '#b0b0b0'
		}
	}

	/**
	 * 鼠标移走
	 */
	searchBoxOnMouseLeave() {
		if (!this.inputIsFocus) {
			this.searchBorderColor = '#dddddd'
		}
	}

	/**
	 * 输入框正在输入
	 */
	searchInputOnFocus() {
		this.inputIsFocus = true
		this.searchBorderColor = '#ff6700'
	}

	/**
	 * 输入框失去焦点
	 */
	searchInputUnFocus() {
		this.inputIsFocus = false
		this.searchBorderColor = '#dddddd'
	}

	private loadProducts() {
		const websites: Observable<unknown[]> = this.mockDataService.loadData(
			'assets/mocks/tab-bar.json'
		)
		websites.subscribe((values) => {
			console.log(values)
		})
	}
}
