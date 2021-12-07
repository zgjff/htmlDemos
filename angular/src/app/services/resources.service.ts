import { Injectable } from '@angular/core'
import { ServicesModule } from './services.module'
import { ResourcesCategory } from './models/app-resources'
import { Observable, of } from 'rxjs'

@Injectable({
	providedIn: ServicesModule
})

/**
 * 资源服务
 */
export class ResourcesService {
	/**
	 * 默认类型
	 */
	defaultCategory: ResourcesCategory = '开发'

	constructor() {}

	getResourcesCategory(): Observable<ResourcesCategory[]> {
		const values: ResourcesCategory[] = ['开发', '教育', '社区']
		return of(values)
	}

	/**
	 * 从query中获取类型
	 * @param query
	 */
	getResourcesCategoryFormQuery = (query: string): ResourcesCategory | null => {
		switch (query) {
			case '开发':
				return '开发'
			case '教育':
				return '教育'
			case '社区':
				return '社区'
			default:
				return null
		}
	}
}
