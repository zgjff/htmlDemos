import { Link } from '../../services/models/link'

export interface FooterModel {
	title: string
	subs: Link[]
}

export const FooterData: FooterModel[] = [
	{
		title: '资源',
		subs: [
			{ title: '关于', url: '', target: '_self', isAppRouteLink: false },
			{ title: '资源列表', url: '', target: '_self', isAppRouteLink: false },
			{ title: '宣传资料', url: '', target: '_self', isAppRouteLink: false },
			{ title: '博客', url: '', target: '_self', isAppRouteLink: false },
			{ title: '使用情况分析', url: '', target: '_self', isAppRouteLink: false }
		]
	},
	{
		title: '帮助',
		subs: [
			{ title: 'Stack Overflow', url: '', target: '_blank', isAppRouteLink: false },
			{ title: '加入 Discord', url: '', target: '_blank', isAppRouteLink: false },
			{ title: 'Gitter', url: '', target: '_blank', isAppRouteLink: false },
			{ title: '报告问题', url: '', target: '_blank', isAppRouteLink: false },
			{ title: '行为守则', url: '', target: '_blank', isAppRouteLink: false }
		]
	},
	{
		title: '社区',
		subs: [
			{ title: '活动', url: '', target: '_blank', isAppRouteLink: false },
			{ title: '聚会', url: '', target: '_blank', isAppRouteLink: false },
			{ title: 'Twitter', url: '', target: '_blank', isAppRouteLink: false },
			{ title: 'GitHub', url: '', target: '_blank', isAppRouteLink: false },
			{ title: '贡献', url: '', target: '_blank', isAppRouteLink: false }
		]
	},
	{
		title: '语言',
		subs: [
			{ title: 'Español', url: '', target: '_blank', isAppRouteLink: false },
			{ title: 'English Version', url: '', target: '_blank', isAppRouteLink: false },
			{ title: '正體中文版', url: '', target: '_blank', isAppRouteLink: false },
			{ title: '日本語版', url: '', target: '_blank', isAppRouteLink: false },
			{ title: '한국어', url: '', target: '_blank', isAppRouteLink: false },
			{ title: '完整的语言列表', url: '', target: '_blank', isAppRouteLink: false }
		]
	}
]
