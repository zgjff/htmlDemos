import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { OverlayModule } from '@angular/cdk/overlay'
import { SiteWideNavigationBarComponent } from './components/site-wide-navigation-bar/site-wide-navigation-bar.component'
import { ServicesModule } from './services/services.module'
import { ShareModule } from './modules/share.module'
import { TabBarComponent } from './components/tab-bar/tab-bar.component'
import { ARouterLinkModule } from './directives/a-router-link/a-router-link.module'
import { MatIconModule } from '@angular/material/icon'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { OverlayProductsComponent } from './components/overlay-products/overlay-products.component'

@NgModule({
	declarations: [
		AppComponent,
		SiteWideNavigationBarComponent,
		TabBarComponent,
		OverlayProductsComponent
	],
	imports: [
		ShareModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		OverlayModule,
		ServicesModule,
		ARouterLinkModule,
		MatIconModule,
		MatAutocompleteModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
