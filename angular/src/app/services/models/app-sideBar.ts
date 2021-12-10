/**
 * 侧边栏model
 */
export interface AppSideBar {
	/**
	 * 标题
	 */
	title: string
	/**
	 * route link
	 */
	route?: string
	/**
	 * 子model数组
	 */
	children: AppSideBar[]
	/**
	 * 是否打开下一级section
	 */
	open: boolean
}
