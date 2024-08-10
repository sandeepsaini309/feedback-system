import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';
import { PrimengModule } from './modules/primeng/primeng.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimengModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sidebarVisible: boolean = false;
  items: any[] = [];
  menuItems: any[] = [];

  constructor(private primeNgConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeNgConfig.ripple = true;
    this.items = [
      {
        label: '',
        icon: 'pi pi-bars',
        command: () => {
          this.sidebarVisible = true;
        },
      },
    ];

    this.menuItems = [
      {
        label: 'Options',
        items: [
          {
            label: 'Account',
            icon: 'pi pi-user',
          },
          {
            label: 'Sign out',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
  }
}
