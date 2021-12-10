import { Component, OnInit } from '@angular/core'
import { FeaturesService } from '../../services/features.service'
import { AppFeatures } from '../../services/models/app-features'

@Component({
	selector: 'app-features',
	templateUrl: './features.component.html',
	styleUrls: ['./features.component.css']
})

/**
 * 特性
 */
export class FeaturesComponent implements OnInit {
	features: AppFeatures[] = []

	constructor(private featuresService: FeaturesService) {}

	ngOnInit() {
		this.loadFeatures()
	}

	private loadFeatures() {
		this.featuresService.loadFeatures().subscribe((values) => {
			this.features = values
		})
	}
}
