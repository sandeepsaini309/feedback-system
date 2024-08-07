import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SidebarModule } from 'primeng/sidebar';

const modules = [
  ButtonModule,
  InputTextModule,
  FloatLabelModule,
  SidebarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, modules],
  exports: [modules],
})
export class PrimengModule {}
