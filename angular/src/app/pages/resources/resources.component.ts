import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { ResourcesService } from '../../services/resources.service'
import { ResourcesCategory } from '../../services/models/app-resources'
import { AppResource } from '../../services/models/app-resource'

@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.css']
})

/**
 * 资源组件
 */
export class ResourcesComponent implements OnInit, OnDestroy {
	/**
	 * 选择的分类
	 */
	selected_category: ResourcesCategory
	/**
	 * 分类列表
	 */
	resources_category: ResourcesCategory[] = []
	/**
	 * 对应分类下面的资源列表
	 */
	appResources: AppResource[] = []
	private subscription?: Subscription

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private resourcesService: ResourcesService
	) {
		this.selected_category = resourcesService.defaultCategory
	}

	ngOnInit() {
		this.observeRoute()
	}

	ngOnDestroy() {
		console.log('ngOnDestroy')
		this.subscription?.unsubscribe()
	}

	/**
	 * 选择对应资源
	 * @param category
	 */
	onClickCategory(category: ResourcesCategory) {
		if (category === this.selected_category) {
			return
		}
		const urlTree = this.router.createUrlTree([], {
			queryParams: { category: category }
		})
		this.router.navigateByUrl(urlTree, { replaceUrl: true }).then()
	}

	/**
	 * 观察路由
	 * @private
	 */
	private observeRoute() {
		this.subscription = this.route.queryParamMap.subscribe((value) => {
			const query = value.get('category') ?? ''
			const obj = this.resourcesService.getResourcesCategoryFormQuery(query)
			if (obj) {
				this.selected_category = obj
				this.loadCategory()
				return
			}
			const urlTree = this.router.createUrlTree([], {
				queryParams: { category: this.resourcesService.defaultCategory },
				queryParamsHandling: 'merge',
				preserveFragment: true
			})
			this.router.navigateByUrl(urlTree).then()
		})
	}

	/**
	 * 加载类型数组
	 * @private
	 */
	private loadCategory() {
		if (this.resources_category.length == 0) {
			this.resourcesService.getResourcesCategory().subscribe((values) => {
				this.resources_category = values
			})
		}
		this.loadAppResources(this.selected_category)
	}

	/**
	 * 加载对应类型下面的资源文件
	 * @param category: 资源类型
	 * @private
	 */
	private loadAppResources(category: ResourcesCategory) {
		const resourcesSubscription = this.resourcesService
			.loadResourcesFor(category)
			.subscribe((values) => {
				this.appResources = values
			})
		this.subscription?.add(resourcesSubscription)
	}
}
