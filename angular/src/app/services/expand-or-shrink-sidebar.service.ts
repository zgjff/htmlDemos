import { Injectable } from '@angular/core'
import { ServicesModule } from './services.module'

@Injectable({
	providedIn: ServicesModule
})

/**
 * 展开或收缩侧边栏服务
 */
export class ExpandOrShrinkSidebarService {
	constructor() {}
}
