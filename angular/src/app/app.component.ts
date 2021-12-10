import { Component, OnInit } from '@angular/core'
import { HtmTitleService } from './core/htm-title.service'

@Component({
	selector: 'app-root',
	template: `
		<app-navigation-bar></app-navigation-bar>
		<router-outlet></router-outlet>
		<app-footer></app-footer>
	`
})
export class AppComponent implements OnInit {
	title = 'angular'

	constructor(private htmTitleService: HtmTitleService) {}

	ngOnInit() {
		this.htmTitleService.setHtmlTitle()
	}
}
