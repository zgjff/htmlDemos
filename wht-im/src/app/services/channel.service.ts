import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, Observable, of, ReplaySubject } from 'rxjs'
import { ChannelStyle } from '../models/channel'

@Injectable({
	providedIn: 'root'
})

/**
 * 频道服务
 */
export class ChannelService {
	/**
	 * 频道类型标题
	 */
	channelTitles: ReplaySubject<string[]>

	/**
	 * 当前所择的频道类型
	 */
	selectedChannelStyle: ReplaySubject<ChannelStyle>

	/**
	 * 频道总列表
	 * @private
	 */
	private channelStyles: BehaviorSubject<ChannelStyle[]>

	constructor(private http: HttpClient) {
		this.channelStyles = new BehaviorSubject<ChannelStyle[]>([])
		this.channelTitles = new ReplaySubject<string[]>(1)
		this.selectedChannelStyle = new ReplaySubject<ChannelStyle>(1)
	}

	/**
	 * 加载本地mock数据
	 */
	loadJson() {
		this.http
			.get<ChannelStyle[]>('assets/mocks/channel-mock.json')
			.pipe(catchError(this.handleError<ChannelStyle[]>([])))
			.subscribe((list) => {
				if (list.length > 0) {
					this.selectedChannelStyle.next(list[0])
				}
				this.channelTitles.next(
					list.map((obj) => {
						return obj.title
					})
				)
				this.channelStyles.next(list)
			})
	}

	onSelectedChannelStyle(title: string) {
		let filters = this.channelStyles.value.filter((obj) => {
			return obj.title == title
		})
		if (filters.length > 0) {
			this.selectedChannelStyle.next(filters[0])
		}
	}

	private handleError<T>(result?: T) {
		return (_error: any): Observable<T> => {
			return of(result as T)
		}
	}
}
