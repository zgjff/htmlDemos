import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { ChannelComponent } from './components/channel/channel.component'
import { SearchEngineComponent } from './components/search-engine/search-engine.component'
import { SearchComponent } from './components/search/search.component'

@NgModule({
	declarations: [AppComponent, SearchComponent, ChannelComponent, SearchEngineComponent],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
