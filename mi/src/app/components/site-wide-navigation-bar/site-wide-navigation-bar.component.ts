import { Component, OnInit } from '@angular/core'
import { LoadMockDataService } from '../../services/api-services/load-mock-data.service'
import { Website } from '../../models/website'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-site-wide-navigation-bar',
	templateUrl: './site-wide-navigation-bar.component.html',
	styleUrls: ['./site-wide-navigation-bar.component.css']
})

/**
 * 全站导航栏组件
 */
export class SiteWideNavigationBarComponent implements OnInit {
	websites: Website[] = []

	constructor(private mockDataService: LoadMockDataService) {}

	ngOnInit() {
		const websites: Observable<Website[]> = this.mockDataService.loadData(
			'assets/mocks/outside-site-navigation-bar.json'
		)

		websites.subscribe((values) => {
			this.websites = values
		})
	}

	onClickLocation() {
		console.log('位置')
	}

	onClickLogin() {
		console.log('登录')
	}

	onClickRegister() {
		console.log('注册')
	}

	onClickMessages() {
		console.log('消息通知')
	}

	onClickShoppingCar() {
		console.log('购物车')
	}
}
