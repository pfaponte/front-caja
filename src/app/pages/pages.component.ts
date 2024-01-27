import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, BreadcrumbsComponent, RouterOutlet],
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent {

}
