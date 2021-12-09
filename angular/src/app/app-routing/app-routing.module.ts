import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PagesModule } from '../pages/pages.module'
import { HomeComponent } from '../pages/home/home.component'
import { FeaturesComponent } from '../pages/features/features.component'
import { ResourcesComponent } from '../pages/resources/resources.component'
import { EventsComponent } from '../pages/events/events.component'

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'features', component: FeaturesComponent },
	{ path: 'resources', component: ResourcesComponent },
	{ path: 'events', component: EventsComponent },
	{
		path: '**',
		component: HomeComponent
	}
]

@NgModule({
	imports: [PagesModule, RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
	exports: [RouterModule]
})

/**
 * 路由模块
 */
export class AppRoutingModule {}
