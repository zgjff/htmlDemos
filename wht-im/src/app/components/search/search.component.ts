import {Component, OnInit} from '@angular/core'
import {SearchEngine} from '../../models/search-engine'
import {SearchService} from '../../services/search.service'

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

/**
 * 搜索组件
 */
export class SearchComponent implements OnInit {
  /**
   * 引擎数组
   */
  engines: [SearchEngine, Boolean][] = []

  /**
   * 初始化
   * @param engineService: 搜索引擎服务
   */
  constructor(private engineService: SearchService) {
  }

  /**
   * `init`生命周期
   */
  ngOnInit() {
  	this.bind()
  	this.resetSearchEnginesForIndex(0)
  }

  /**
   * 引擎服务`rx`逻辑处理
   */
  bind() {
  	this.engineService.engines.subscribe(engines => this.engines = engines)
  }

  /**
   * 根据给定的选择引擎位置改变引擎数组
   * @param selectedIndex 要选择的引擎位置
   */
  resetSearchEnginesForIndex(selectedIndex: number) {
  	this.engineService.configSearchEngines(selectedIndex)
  }
}
