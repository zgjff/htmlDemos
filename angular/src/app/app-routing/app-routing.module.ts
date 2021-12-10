import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PagesModule } from '../pages/pages.module'
import { HomeComponent } from '../pages/home/home.component'
import { FeaturesComponent } from '../pages/features/features.component'
import { ResourcesComponent } from '../pages/resources/resources.component'
import { EventsComponent } from '../pages/events/events.component'
import { DocsComponent } from '../pages/docs/docs.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		pathMatch: 'full',
		data: { showSidebar: false, title: 'Angular' }
	},
	{
		path: 'features',
		component: FeaturesComponent,
		data: { showSidebar: false, title: 'Angular - 特性与优点' }
	},
	{
		path: 'resources',
		component: ResourcesComponent,
		data: { showSidebar: false, title: 'Angular - 浏览 ANGULAR 相关资源' }
	},
	{
		path: 'events',
		component: EventsComponent,
		data: { showSidebar: false, title: 'Angular - EVENTS' }
	},
	{
		path: 'docs',
		component: DocsComponent,
		data: { showSidebar: true, title: 'Angular - Angular 文档简介' }
	},
	{
		path: '**',
		component: DocsComponent,
		data: { showSidebar: true, title: 'Angular' }
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
