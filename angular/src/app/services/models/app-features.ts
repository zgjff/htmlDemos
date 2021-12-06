/**
 * app特性
 */
export interface AppFeatures {
	/**
	 * 标题
	 */
	title: string
	/**
	 * 图标
	 */
	icon: string
	/**
	 * 内容
	 */
	contents: [title: string, detail: string][]
}
