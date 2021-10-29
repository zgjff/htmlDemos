import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {HeaderComponent} from './components/header/header.component'
import {SearchComponent} from './components/search/search.component'
import {CommonModule} from '@angular/common'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		CommonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {
}
