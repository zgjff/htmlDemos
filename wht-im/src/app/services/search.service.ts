import {Injectable} from '@angular/core'
import {ReplaySubject} from 'rxjs'
import {SearchEngine} from '../models/search-engine'

@Injectable({
	providedIn: 'root'
})

/**
 * 搜索引擎服务
 */
export class SearchService {
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
  	this.defaultEngines = [
  		{title: '百度', desc: '', url: ''},
  		{title: '谷歌', desc: '', url: ''},
  		{title: '必应', desc: '', url: ''},
  		{title: '图片', desc: '', url: ''},
  		{title: '百科', desc: '', url: ''},
  		{title: '地图', desc: '', url: ''},
  		{title: '学术', desc: '', url: ''}
  	]
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
