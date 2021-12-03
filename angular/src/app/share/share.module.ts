import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [],
	imports: [CommonModule, FormsModule],
	exports: [CommonModule, FormsModule]
})

/**
 * 共享模块
 * 存放全局公共的组件、指令等
 */
export class ShareModule {}
