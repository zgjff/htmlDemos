import { Params } from '@angular/router'

/**
 * 链接🔗
 */
export interface Link {
	/**
	 * 标题
	 */
	title: string
	/**
	 * 跳转地址
	 */
	url: string
	/**
	 * 打开方式
	 */
	target: '_self' | '_blank' | '_top' | '_parent'
	/**
	 * 是否是本app内的router
	 */
	isAppRouteLink: boolean
	/**
	 * app内部链接的查询参数
	 */
	queryParams?: Params
}
