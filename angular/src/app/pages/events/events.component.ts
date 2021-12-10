import { Component, OnInit } from '@angular/core'
import { EventsService } from '../../services/events.service'
import { AppEvents } from '../../services/models/app-events'

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.css']
})

/**
 * 活动组件
 */
export class EventsComponent implements OnInit {
	/**
	 * 活动列表
	 */
	events: AppEvents[] = []

	constructor(private eventsService: EventsService) {}

	ngOnInit() {
		this.loadEvents()
	}

	private loadEvents() {
		this.eventsService.loadEvents().subscribe((values) => {
			this.events = values
		})
	}
}
