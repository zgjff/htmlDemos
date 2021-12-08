import { Component, OnInit } from '@angular/core'
import { FeaturesService } from '../../services/features.service'
import { AppFeatures } from '../../services/models/app-features'
import { Title } from '@angular/platform-browser'

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

	constructor(private featuresService: FeaturesService, private title: Title) {
		this.title.setTitle('Angular - 特性与优点')
	}

	ngOnInit() {
		this.loadFeatures()
	}

	private loadFeatures() {
		this.featuresService.loadFeatures().subscribe((values) => {
			this.features = values
		})
	}
}
