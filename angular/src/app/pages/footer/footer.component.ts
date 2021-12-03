import { Component, OnInit } from '@angular/core'
import { FooterData, FooterModel } from './footerModel'

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	list: FooterModel[] = []

	constructor() {}

	ngOnInit() {
		this.list = FooterData
	}
}
