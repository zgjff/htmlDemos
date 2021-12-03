export interface FooterModel {
	title: string
	subs: Item[]
}

export interface Item {
	title: string
	url: string
}

export const FooterData = [
	{
		title: '资源',
		subs: [
			{ title: '关于', url: '' },
			{ title: '资源列表', url: '' },
			{ title: '宣传资料', url: '' },
			{ title: '博客', url: '' },
			{ title: '使用情况分析', url: '' }
		]
	},
	{
		title: '帮助',
		subs: [
			{ title: 'Stack Overflow', url: '' },
			{ title: '加入 Discord', url: '' },
			{ title: 'Gitter', url: '' },
			{ title: '报告问题', url: '' },
			{ title: '行为守则', url: '' }
		]
	},
	{
		title: '社区',
		subs: [
			{ title: '活动', url: '' },
			{ title: '聚会', url: '' },
			{ title: 'Twitter', url: '' },
			{ title: 'GitHub', url: '' },
			{ title: '贡献', url: '' }
		]
	},
	{
		title: '语言',
		subs: [
			{ title: 'Español', url: '' },
			{ title: 'English Version', url: '' },
			{ title: '正體中文版', url: '' },
			{ title: '日本語版', url: '' },
			{ title: '한국어', url: '' },
			{ title: '完整的语言列表', url: '' }
		]
	}
]
