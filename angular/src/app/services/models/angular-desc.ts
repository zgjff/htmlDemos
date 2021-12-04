/**
 * 首页Angular描述model
 */
export interface AngularDesc {
	/**
	 * 标题
	 */
	title: string
	/**
	 * 描述
	 */
	content: string[]
	/**
	 * 图片链接
	 */
	imgUrl: string
	/**
	 * 图片宽地
	 */
	imgWidth: number
	/**
	 * 图片alt描述
	 */
	imgAlt: string
	/**
	 * 图片是否在左侧显示
	 */
	showImgLeft: boolean
	/**
	 * 隐藏分割线
	 */
	hiddenDivider: boolean
	/**
	 * 路由
	 */
	routeLink?: string
}
