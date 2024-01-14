import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyComponent } from './components/lazy/lazy.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyComponent
  ]
})
export class SharedModule { }
