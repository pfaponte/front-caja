import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientComponent } from './pages/client/client.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path : 'dashboard', component: DashboardComponent },
            { path : 'client', component: ClientComponent },
            { path : 'account', component: AccountComponent },
            { path : '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]    
    },

    { path : 'login', component: LoginComponent },
    { path : 'register', component: RegisterComponent },

    { path : '**', component: PagenotfoundComponent },
];
