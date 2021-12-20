import { Component, HostListener, Inject, OnDestroy, Optional } from '@angular/core'
import { Product } from '../../models/product'
import {
	OVERLAY_PRODUCTS_DATA_TOKEN,
	OVERLAY_PRODUCTS_Service_TOKEN,
	OverlayProductsService
} from './overlay-products.service'

@Component({
	selector: 'app-overlay-products',
	templateUrl: './overlay-products.component.html',
	styleUrls: ['./overlay-products.component.css']
})

/**
 * 浮动产品列表组件
 */
export class OverlayProductsComponent implements OnDestroy {
	products: Product[]

	constructor(
		@Optional() @Inject(OVERLAY_PRODUCTS_DATA_TOKEN) readonly data: Product[],
		@Optional()
		@Inject(OVERLAY_PRODUCTS_Service_TOKEN)
		readonly overlayService: OverlayProductsService
	) {
		this.products = data
	}

	ngOnDestroy() {
		console.log('ngOnDestroy')
	}

	/**
	 * 更新列表内容
	 * @param data: 更新内容
	 */
	update(data: Product[]) {
		this.products = data
	}

	/**
	 * 监听鼠标移入事件
	 * @param event 鼠标移走事件
	 */
	@HostListener('mouseover', ['$event'])
	private onMouseover(event: MouseEvent) {
		this.overlayService.markNeedHide(false)
	}

	/**
	 * 监听鼠标移走事件
	 * @param event 鼠标移走事件
	 */
	@HostListener('mouseleave', ['$event'])
	private onMousemove(event: MouseEvent) {
		this.overlayService.markNeedHide(true)
	}
}
