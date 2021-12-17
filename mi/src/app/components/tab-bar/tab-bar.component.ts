import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { LoadMockDataService } from '../../services/api-services/load-mock-data.service'
import { interval, Observable, Subscription } from 'rxjs'
import { FormControl } from '@angular/forms'
import { Products } from '../../models/product'
import { MatMenuTrigger } from '@angular/material/menu'

@Component({
	selector: 'app-tab-bar',
	templateUrl: './tab-bar.component.html',
	styleUrls: ['./tab-bar.component.css']
})

/**
 * 标签栏组件
 */
export class TabBarComponent implements OnInit, OnDestroy {
	/**
	 * 推荐产品列表
	 */
	products: Products[] = []

	@ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger

	/**
	 * 搜索边框颜色
	 */
	searchBorderColor: string = '#dddddd'
	/**
	 * 搜索框的placeholder
	 */
	searchPlaceholder = ''

	/**
	 * 搜索框内容
	 */
	searchContent = new FormControl()
	/**
	 * 热搜
	 */
	hotSearch: string[] = []
	/**
	 * 输入框是否是正在激活
	 * @private
	 */
	private inputIsFocus = false
	/**
	 * 观察者
	 * @private
	 */
	private subscription?: Subscription

	constructor(private mockDataService: LoadMockDataService) {}

	ngOnInit() {
		this.loadProducts()
		this.loadHotSearch()
	}

	ngOnDestroy() {
		this.subscription?.unsubscribe()
	}

	/*********************推荐产品列表相关*********************/

	/*********************搜索框相关*********************/

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

	/**
	 * 选择了对应的搜索框热搜
	 */
	autocompleteOptionSelected() {
		this.startSearch()
	}

	/**
	 * 开始搜索
	 */
	startSearch() {
		let content: string = this.searchContent.value ?? this.searchPlaceholder
		console.log(content)
	}

	/**
	 * 加载产品列表
	 * @private
	 */
	private loadProducts() {
		const websites: Observable<Products[]> = this.mockDataService.loadData(
			'assets/mocks/tab-bar.json'
		)
		websites.subscribe((values) => {
			this.products = values
		})
	}

	/**
	 * 加载热搜
	 * @private
	 */
	private loadHotSearch() {
		const search: Observable<string[]> = this.mockDataService.loadData(
			'assets/mocks/hot-search.json'
		)
		search.subscribe((values) => {
			this.startTimerForPlaceholderWith(values)
			this.hotSearch = ['全部商品', ...values]
		})
	}

	/**
	 * 开始计时器
	 * @param values
	 * @private
	 */
	private startTimerForPlaceholderWith(values: string[]) {
		const allCount = values.length
		if (allCount == 0) {
			this.searchPlaceholder = ''
			return
		}
		let currentIndex = 0
		this.searchPlaceholder = values[currentIndex]
		const seconds = interval(5000)
		this.subscription = seconds.subscribe(() => {
			currentIndex = (currentIndex + 1) % allCount
			this.searchPlaceholder = values[currentIndex]
		})
	}
}
