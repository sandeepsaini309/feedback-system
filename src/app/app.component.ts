import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';
import { PrimengModule } from './modules/primeng/primeng.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimengModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sidebarVisible: boolean = false;
  constructor(private primeNgConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primeNgConfig.ripple = true;
  }
}
