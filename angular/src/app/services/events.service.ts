import { Injectable } from '@angular/core'
import { ServicesModule } from './services.module'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { AppEvents } from './models/app-events'

@Injectable({
	providedIn: ServicesModule
})

/**
 * 活动服务
 */
export class EventsService {
	constructor(private http: HttpClient) {}

	loadEvents(): Observable<AppEvents[]> {
		return this.http.get<AppEvents[]>('../../assets/mocks/app-events.json')
	}
}
