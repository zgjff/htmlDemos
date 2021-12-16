import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core'

@Directive({
	selector: '[appARouterLink]'
})

/**
 * 配置a标签的href、routerLink
 */
export class ARouterLinkDirective implements AfterViewInit {
	/**
	 * 是否需要将a标签的`href`替换成`angular`的`routerLink`
	 */
	@Input() needRouterLink: boolean = false

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

	ngAfterViewInit() {
		if (!this.needRouterLink) {
			return
		}
		const { nativeElement } = this.elementRef
		const url = nativeElement.href
		this.renderer.removeAttribute(nativeElement, 'href')
		this.renderer.removeAttribute(nativeElement, 'target')
		this.renderer.setAttribute(nativeElement, 'routerLink', url)
	}
}
