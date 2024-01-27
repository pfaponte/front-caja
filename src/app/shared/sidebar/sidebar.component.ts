import { Component, OnInit } from '@angular/core';

declare function customFunction(): any;
declare function customMinFunction(): any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
      customFunction();
      customMinFunction();
  }

}
