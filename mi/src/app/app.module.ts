import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { OverlayModule } from '@angular/cdk/overlay'
import { SiteWideNavigationBarComponent } from './components/site-wide-navigation-bar/site-wide-navigation-bar.component'
import { ServicesModule } from './services/services.module'
import { ShareModule } from './modules/share.module'
import { ARouterLinkModule } from './directives/a-router-link.module'

@NgModule({
	declarations: [AppComponent, SiteWideNavigationBarComponent],
	imports: [
		ShareModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		OverlayModule,
		ServicesModule,
		ARouterLinkModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
