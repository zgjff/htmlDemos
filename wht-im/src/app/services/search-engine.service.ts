import { Injectable } from '@angular/core'
import { ReplaySubject } from 'rxjs'
import { DefaultEngines, SearchEngine } from '../models/search-engine'

@Injectable({
	providedIn: 'root'
})

/**
 * 搜索引擎服务
 */
export class SearchEngineService {
	/**
	 * (引擎,是否选中)元组数组
	 */
	engines: ReplaySubject<[engine: SearchEngine, isSelected: Boolean][]>

	/**
	 * 默认的不带是否选中的引擎数组
	 * @private
	 */
	private readonly defaultEngines: SearchEngine[]

	/**
	 * 记录当前选定的引擎位置
	 * @private
	 */
	private selectedIndex = -1

	constructor() {
		this.engines = new ReplaySubject<[engine: SearchEngine, isSelected: Boolean][]>(1)
		this.defaultEngines = DefaultEngines
	}

	/**
	 * 根据给定的要选定的引擎设置引擎数组
	 * @param selectedIndex 要选定的引擎位置
	 */
	configSearchEngines(selectedIndex: number) {
		if (this.selectedIndex == selectedIndex) {
			return
		}
		const selectedEngines: [SearchEngine, Boolean][] = this.defaultEngines.map(
			(value, index) => {
				return [value, index == selectedIndex]
			}
		)
		this.engines.next(selectedEngines)
		this.selectedIndex = selectedIndex
	}
}
