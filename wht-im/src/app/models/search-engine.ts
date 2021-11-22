/**
 * 搜索引擎model
 */
export interface SearchEngine {
	/**
	 * 标题
	 */
	title: string
	/**
	 * 描述
	 */
	desc: string
	/**
	 * 引擎url
	 */
	url: string
}

/**
 * 默认搜索引擎列表
 */
export const DefaultEngines: SearchEngine[] = [
	{
		title: '百度',
		desc: '百度一下,你就知道',
		url: 'https://www.baidu.com/s?word='
	},
	{
		title: '谷歌',
		desc: 'Google搜索',
		url: 'https://www.google.com/search?q='
	},
	{
		title: '必应',
		desc: '微软Bing搜索',
		url: 'https://cn.bing.com/search?q='
	},
	{
		title: '图片',
		desc: '海量图片搜索',
		url: 'https://cn.bing.com/images/search?q='
	},
	{
		title: '百科',
		desc: '百度百科',
		url: 'https://baike.baidu.com/search?word='
	},
	{
		title: '地图',
		desc: '高德地图',
		url: 'https://ditu.amap.com/search?query='
	},
	{
		title: '学术',
		desc: '中英文文件检索',
		url: 'https://xueshu.baidu.com/s?wd='
	}
]
