import { NgModule } from '@angular/core'
import { ShareModule } from '../share/share.module'
import { HomeComponent } from './home/home.component'
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'
import { FooterComponent } from './footer/footer.component'
import { FeaturesComponent } from './features/features.component'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [HomeComponent, NavigationBarComponent, FooterComponent, FeaturesComponent],
	imports: [ShareModule, RouterModule],
	exports: [FooterComponent, NavigationBarComponent]
})

/**
 * 管理所有的页面模块
 */
export class PagesModule {}
