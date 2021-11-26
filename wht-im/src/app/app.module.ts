import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { OverlayModule } from '@angular/cdk/overlay'
import { ChannelComponent } from './components/channel/channel.component'
import { SearchEngineComponent } from './components/search-engine/search-engine.component'
import { SearchComponent } from './components/search/search.component'
import { HttpClientModule } from '@angular/common/http'
import { DisplayImageComponent } from './components/display-image/display-image.component'
import { WebsiteInfoComponent } from './components/website-info/website-info.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
	declarations: [AppComponent, SearchComponent, ChannelComponent,
		SearchEngineComponent, DisplayImageComponent, WebsiteInfoComponent,
		SidebarComponent],
	imports: [BrowserModule, FormsModule, HttpClientModule, OverlayModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {
}
