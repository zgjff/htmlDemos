/**
 * 资源model
 */
export interface AppResource {
	/**
	 * 标题
	 */
	title: string
	/**
	 * 列表
	 */
	list: ResourceData[]
}

export interface ResourceData {
	/**
	 * 标题
	 */
	title: string
	/**
	 * 内容
	 */
	content: string
	/**
	 * 链接url
	 */
	url: string
}
