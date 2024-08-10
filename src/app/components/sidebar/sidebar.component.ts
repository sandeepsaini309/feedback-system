import { Component } from '@angular/core';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  // items = [
  //   {
  //     label: 'Documents',
  //     items: [
  //       {
  //         label: 'New',
  //         icon: 'pi pi-plus',
  //       },
  //       {
  //         label: 'Search',
  //         icon: 'pi pi-search',
  //       },
  //     ],
  //   },
  //   {
  //     label: 'Profile',
  //     items: [
  //       {
  //         label: 'Settings',
  //         icon: 'pi pi-cog',
  //       },
  //       {
  //         label: 'Logout',
  //         icon: 'pi pi-sign-out',
  //       },
  //     ],
  //   },
  // ];

  items = [
    {
      label: 'Mail',
      icon: 'pi pi-envelope',
      badge: '5',
      items: [
        {
          label: 'Compose',
          icon: 'pi pi-file-edit',
        },
        {
          label: 'Inbox',
          icon: 'pi pi-inbox',
          badge: '5',
        },
        {
          label: 'Sent',
          icon: 'pi pi-send',
        },
        {
          label: 'Trash',
          icon: 'pi pi-trash',
        },
      ],
    },
    {
      label: 'Reports',
      icon: 'pi pi-chart-bar',
      shortcut: '⌘+R',
      items: [
        {
          label: 'Sales',
          icon: 'pi pi-chart-line',
          badge: '3',
        },
        {
          label: 'Products',
          icon: 'pi pi-list',
          badge: '6',
        },
      ],
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      shortcut: '⌘+W',
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-cog',
          shortcut: '⌘+O',
        },
        {
          label: 'Privacy',
          icon: 'pi pi-shield',
          shortcut: '⌘+P',
        },
      ],
    },
  ];

  list = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
  ];
}
