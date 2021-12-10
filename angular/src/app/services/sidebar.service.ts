import { Injectable } from '@angular/core'
import { ServicesModule } from './services.module'
import { Observable } from 'rxjs'
import { AppSideBar } from './models/app-sideBar'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: ServicesModule
})

/**
 * 侧边栏服务
 */
export class SidebarService {
	constructor(private http: HttpClient) {}

	loadSideBars(): Observable<AppSideBar[]> {
		return this.http.get<AppSideBar[]>('../../assets/mocks/app-sideBar.json')
	}
}
