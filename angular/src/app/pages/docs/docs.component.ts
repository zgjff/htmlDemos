import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-docs',
	templateUrl: './docs.component.html',
	styleUrls: ['./docs.component.css']
})
export class DocsComponent {
	constructor(private router: Router) {}

	onClickRouterPath(path: string) {
		this.router.navigate([path], { replaceUrl: false }).then()
	}
}
