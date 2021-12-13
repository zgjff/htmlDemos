import { Component, OnInit } from '@angular/core'
import { HtmTitleService } from './core/htm-title.service'
import { animate, style, transition, trigger } from '@angular/animations'
import { Router } from '@angular/router'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['app.component.css'],
	animations: [
		trigger('moveInOut', [
			transition(':enter', [
				style({ transform: 'translateX(-100%)' }),
				animate(350, style({ transform: 'translateX(0)' }))
			]),
			transition(':leave', [animate(350, style({ transform: 'translateX(-100%)' }))])
		])
	]
})
export class AppComponent implements OnInit {
	title = 'angular'
	/**
	 * 是否需要显示侧边栏
	 */
	showSidebar = false

	/**
	 * 是否需要给导航栏留空间
	 */
	needKeepNavigationBarSpace = false

	constructor(private htmTitleService: HtmTitleService, private router: Router) {}

	ngOnInit() {
		this.htmTitleService.setHtmlTitle()
	}

	onModifyShowSidebar(show: boolean) {
		this.showSidebar = show
	}

	onModifyNavigationBarFixed(fixed: boolean) {
		this.needKeepNavigationBarSpace = fixed
	}

	onClickRouterPath(path: string) {
		this.router.navigate([path]).then()
	}
}
