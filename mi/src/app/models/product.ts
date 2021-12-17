/**
 * 产品model
 */
export interface Product {
	/**
	 * 名称
	 */
	title: string
	/**
	 * 描述
	 */
	desc?: string
	/**
	 * 图片地址
	 */
	img: string
	/**
	 * 价格
	 */
	price: string
}

export interface Products {
	/**
	 * 产品类型
	 */
	type: string
	/**
	 * 类型下面的列表
	 */
	list: Product[]
}
