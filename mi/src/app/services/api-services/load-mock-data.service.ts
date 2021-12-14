import { Injectable } from '@angular/core'
import { ServicesModule } from '../services.module'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: ServicesModule
})

/**
 * 加载mock数据服务
 */
export class LoadMockDataService {
	constructor(private http: HttpClient) {}

	/**
	 * 开始加载mock数据
	 * @param path：mock的路径
	 */
	loadData<Result>(path: string): Observable<Result> {
		return this.http.get<Result>(path)
	}
}
