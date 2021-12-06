import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-title-header',
	template: `
		<header>
			<h1>{{ title }}</h1>
		</header>
	`,
	styleUrls: ['./title-header.component.css']
})
export class TitleHeaderComponent {
	/**
	 * 标题
	 */
	@Input() title = ''

	constructor() {}
}
