import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `
		<app-navigation-bar></app-navigation-bar>
		<router-outlet></router-outlet>
		<app-footer></app-footer>
	`
})
export class AppComponent {
	title = 'angular'
}
