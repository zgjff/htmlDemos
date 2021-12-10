import { Component, OnInit } from '@angular/core'
import { AngularDesc } from '../../services/models/angular-desc'
import { HomeService } from '../../services/home.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

/**
 * 首页
 */
export class HomeComponent implements OnInit {
	angularDesc: AngularDesc[] = []

	constructor(private homeService: HomeService) {}

	ngOnInit() {
		this.getAngularDescList()
	}

	private getAngularDescList() {
		this.homeService.getAngularDesc().subscribe((values) => {
			this.angularDesc = values
		})
	}
}
