import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { ServicesModule } from '../services/services.module'
import { PagesModule } from '../pages/pages.module'
import { ShareModule } from '../share/share.module'
import { AppRoutingModule } from '../app-routing/app-routing.module'
import { FooterComponent } from '../pages/footer/footer.component'
import { NavigationBarComponent } from '../pages/navigation-bar/navigation-bar.component'
import { SidebarComponent } from '../pages/sidebar/sidebar.component'

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ShareModule,
		ServicesModule,
		PagesModule,
		AppRoutingModule
	],
	exports: [
		ShareModule,
		AppRoutingModule,
		FooterComponent,
		NavigationBarComponent,
		SidebarComponent
	]
})

/**
 * 处理项目的模块
 */
export class CoreModule {
	/**
	 * 构造函数
	 * 让`CoreModule`只能被`AppModule`引入
	 * 其它module引入此module时,会抛出错误
	 * @param parentModule
	 */
	constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule 只能被AppModule引入')
		}
	}
}
