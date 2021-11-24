import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-display-image',
	templateUrl: './display-image.component.html',
	styleUrls: ['./display-image.component.css']
})
/**
 * 图片展示组件
 */
export class DisplayImageComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
		console.log(123)
	}
}
