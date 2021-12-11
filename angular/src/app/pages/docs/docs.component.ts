import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ExpandOrShrinkSidebarService } from '../../services/expand-or-shrink-sidebar.service'

@Component({
	selector: 'app-docs',
	templateUrl: './docs.component.html',
	styleUrls: ['./docs.component.css']
})
export class DocsComponent {
	constructor(
		private expandOrShrinkSidebarService: ExpandOrShrinkSidebarService,
		private router: Router
	) {}

	onClickRouterPath(path: string) {
		this.router.navigate([path], { replaceUrl: false }).then()
	}
}
