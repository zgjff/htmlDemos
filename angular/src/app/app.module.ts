import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'

@NgModule({
	declarations: [AppComponent],
	imports: [CoreModule],
	providers: [],
	bootstrap: [AppComponent]
})

/**
 * app 模块
 */
export class AppModule {}
