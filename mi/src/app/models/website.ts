/**
 * 网站链接model
 */
export interface Website {
	/**
	 * 网站标题
	 */
	title: string
	/**
	 * 网站url
	 */
	url: string
	/**
	 * 是否是本app内部网站
	 */
	isAppSite: boolean
}
