import { Component, OnInit } from '@angular/core'
import { SearchEngineService } from '../../services/search-engine.service'
import { SearchEngine } from './../../models/search-engine'

@Component({
	selector: 'app-search-engine',
	templateUrl: './search-engine.component.html',
	styleUrls: ['./search-engine.component.css']
})

/**
 * 搜索引擎组件
 */
export class SearchEngineComponent implements OnInit {
	/**
	 * 引擎数组
	 */
	engines: [SearchEngine, Boolean][] = []

	/**
	 * 当前选中的引擎
	 */
	selectedEngine?: SearchEngine

	/**
	 * 搜索内容
	 */
	searchContent: string = ''

	constructor(private engineService: SearchEngineService) {}

	ngOnInit() {
		this.bind()
		this.resetSearchEnginesForIndex(0)
	}

	bind() {
		this.engineService.engines.subscribe((engines) => {
			this.engines = engines
			if (engines.length == 0) {
				this.selectedEngine = undefined
				return
			}
			this.selectedEngine = engines.filter((value) => value[1])[0][0]
		})
	}

	/**
	 * 根据给定的选择引擎位置改变引擎数组
	 * @param selectedIndex 要选择的引擎位置
	 */
	resetSearchEnginesForIndex(selectedIndex: number) {
		this.engineService.configSearchEngines(selectedIndex)
	}

	trackByFn(_index: number, item: [SearchEngine, Boolean]) {
		return item[0].title
	}

	/**
	 * 开始搜索
	 */
	startSearch() {
		if (this.selectedEngine === undefined) {
			return
		}
		let url = this.selectedEngine.url + this.searchContent
		window.open(url, '_blank')
	}
}
