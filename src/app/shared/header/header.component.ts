import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

declare function customFunction(): any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService){}

  ngOnInit(): void {
    customFunction();
}

  logout(){
    this.userService.logout();
  }
}
