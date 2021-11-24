/**
 * 频道类型
 */
export interface ChannelStyle {
	/**
	 * 类型描述
	 */
	title: string
	/**
	 * 推荐频道数组
	 */
	recommends: ChannelRecommend[]
}

/**
 * 推荐频道
 */
export interface ChannelRecommend {
	/**
	 * 推荐标题
	 */
	title: string
	/**
	 * 频道数组
	 */
	channels: Channel[]
}

/**
 * 频道
 */
export interface Channel {
	/**
	 * 名称
	 */
	title: string
	/**
	 * 链接url
	 */
	url: string
}
