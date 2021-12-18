import { Component, HostListener, Inject, OnDestroy, Optional } from '@angular/core'
import { Product } from '../../models/product'
import { OVERLAY_PRODUCTS_DATA_TOKEN, OVERLAY_PRODUCTS_REF_TOKEN } from './overlay-products.service'
import { OverlayRef } from '@angular/cdk/overlay'

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
		@Optional() @Inject(OVERLAY_PRODUCTS_REF_TOKEN) readonly ref: OverlayRef
	) {
		this.products = data
		console.log(this.products)
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
	 * 监听鼠标移走事件
	 * @param event 鼠标移走事件
	 */
	@HostListener('mouseleave', ['$event'])
	private onMousemove(event: MouseEvent) {
		this.ref.dispose()
	}
}
