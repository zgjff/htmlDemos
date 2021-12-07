import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { ResourcesService } from '../../services/resources.service'
import { ResourcesCategory } from '../../services/models/app-resources'

@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.css']
})

/**
 * 资源组件
 */
export class ResourcesComponent implements OnInit, OnDestroy {
	selected_category: ResourcesCategory
	resources_category: ResourcesCategory[] = []
	private subscription?: Subscription

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private resourcesService: ResourcesService
	) {
		this.selected_category = resourcesService.defaultCategory
	}

	ngOnInit() {
		this.subscription = this.route.queryParamMap.subscribe((value) => {
			const query = value.get('category') ?? ''
			const obj = this.resourcesService.getResourcesCategoryFormQuery(query)
			if (obj) {
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

	ngOnDestroy() {
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
		this.selected_category = category
		const urlTree = this.router.createUrlTree([], {
			queryParams: { category: category }
		})
		this.router.navigateByUrl(urlTree, { replaceUrl: true }).then()
	}

	/**
	 * 加载类型数组
	 * @private
	 */
	private loadCategory() {
		this.resourcesService.getResourcesCategory().subscribe((values) => {
			if (this.resources_category.length == 0) {
				this.resources_category = values
			}
		})
	}
}
