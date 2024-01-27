import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRegister } from '../../models/user-register.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userRegister!: UserRegister;

  public loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [false, [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {}

  login() {
    console.log(this.loginForm.value);

    this.userRegister = this.loginForm.value as UserRegister;

    this.userService.login( this.userRegister ).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        console.log(error);
        Swal.fire('Error', error.error.message);
      }
    });
  }

}
