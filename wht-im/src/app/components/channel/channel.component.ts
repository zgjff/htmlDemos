import { Component, OnInit } from '@angular/core'
import { ChannelService } from '../../services/channel.service'
import { ChannelRecommend, ChannelStyle } from '../../models/channel'

@Component({
	selector: 'app-channel',
	templateUrl: './channel.component.html',
	styleUrls: ['./channel.component.css']
})

/**
 * 常用频道组件
 */
export class ChannelComponent implements OnInit {

	/**
	 * 频道类型标题列表
	 */
	channelTitles: string[] = []

	/**
	 * 要显示的频道类型数据
	 */
	showChannelStyle?: ChannelStyle

	channels: [title: string, url?: string][] = []

	constructor(private channelService: ChannelService) {
	}

	ngOnInit() {
		this.bind()
		this.channelService.loadJson()
	}

	bind() {
		this.channelService.channelTitles.subscribe(list => {
			this.channelTitles = list
		})

		this.channelService.selectedChannelStyle.subscribe(obj => {
			this.showChannelStyle = obj
			this.channels = obj.recommends.reduce(this.accumulateSelectedChannelsStyle, [])
		})
	}

	/**
	 * 选择了对应的频道类型
	 * @param title 类型标题
	 */
	onSelectedChannelStyle(title: string) {
		if (this.showChannelStyle !== undefined) {
			if (this.showChannelStyle.title == title) {
				return
			}
		}
		this.channelService.onSelectedChannelStyle(title)
	}

	/**
	 * 选择了对应频道类型的reduce高级函数
	 * @param totalChannels 总列表
	 * @param recommend 推荐频道
	 */
	accumulateSelectedChannelsStyle(totalChannels: [string, string?][], recommend: ChannelRecommend): [string, string?][] {
		totalChannels.push([recommend.title, undefined])
		// @ts-ignore
		const channels: [string, string][] = recommend.channels.reduce((result, channel) => {
			// @ts-ignore
			result.push([channel.title, channel.url])
			return result
		}, [])
		totalChannels.push(...channels)
		return totalChannels
	}

	/**
	 *
	 * @param _index
	 * @param item
	 */
	channelTrackByFn(_index: number, item: [string, string?]) {
		return item[0]
	}
}
