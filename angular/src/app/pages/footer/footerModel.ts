import { Link } from '../../services/models/link'

export interface FooterModel {
	title: string
	subs: Link[]
}

export const FooterData: FooterModel[] = [
	{
		title: '资源',
		subs: [
			{ title: '关于', url: '', target: '_self' },
			{ title: '资源列表', url: '', target: '_self' },
			{ title: '宣传资料', url: '', target: '_self' },
			{ title: '博客', url: '', target: '_self' },
			{ title: '使用情况分析', url: '', target: '_self' }
		]
	},
	{
		title: '帮助',
		subs: [
			{ title: 'Stack Overflow', url: '', target: '_blank' },
			{ title: '加入 Discord', url: '', target: '_blank' },
			{ title: 'Gitter', url: '', target: '_blank' },
			{ title: '报告问题', url: '', target: '_blank' },
			{ title: '行为守则', url: '', target: '_blank' }
		]
	},
	{
		title: '社区',
		subs: [
			{ title: '活动', url: '', target: '_blank' },
			{ title: '聚会', url: '', target: '_blank' },
			{ title: 'Twitter', url: '', target: '_blank' },
			{ title: 'GitHub', url: '', target: '_blank' },
			{ title: '贡献', url: '', target: '_blank' }
		]
	},
	{
		title: '语言',
		subs: [
			{ title: 'Español', url: '', target: '_blank' },
			{ title: 'English Version', url: '', target: '_blank' },
			{ title: '正體中文版', url: '', target: '_blank' },
			{ title: '日本語版', url: '', target: '_blank' },
			{ title: '한국어', url: '', target: '_blank' },
			{ title: '完整的语言列表', url: '', target: '_blank' }
		]
	}
]
