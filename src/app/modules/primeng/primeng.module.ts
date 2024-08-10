import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';

const modules = [
  ButtonModule,
  InputTextModule,
  FloatLabelModule,
  SidebarModule,
  MenubarModule,
  AvatarModule,
  MenuModule,
  BadgeModule,
  ImageModule,
  PanelMenuModule,
  RippleModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, modules],
  exports: [modules],
})
export class PrimengModule {}
