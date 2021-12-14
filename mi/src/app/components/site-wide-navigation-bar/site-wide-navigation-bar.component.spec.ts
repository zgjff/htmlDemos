import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SiteWideNavigationBarComponent } from './site-wide-navigation-bar.component'

describe('SiteWideNavigationBarComponent', () => {
	let component: SiteWideNavigationBarComponent
	let fixture: ComponentFixture<SiteWideNavigationBarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SiteWideNavigationBarComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(SiteWideNavigationBarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
