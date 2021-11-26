import { Component, Inject, OnDestroy } from '@angular/core'
import { OVERLAY_COMPONENT_REF_TOKEN } from '../../services/sidebar.service'
import { SidebarRef } from './SidebarRef'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})

/**
 * 侧边栏组件
 */
export class SidebarComponent implements OnDestroy {

	constructor(@Inject(OVERLAY_COMPONENT_REF_TOKEN) readonly ref: SidebarRef) {
	}

	ngOnDestroy() {
		console.log('ngOnDestroy')
	}

	hide() {
		this.ref.hide()
	}
}
