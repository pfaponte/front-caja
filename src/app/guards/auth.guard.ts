import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
  ) => {
    const userService = inject(UserService);
    const router = inject(Router);

    return userService.validateToken()
      .pipe(
        tap( isAuthenticated => {
          if (!isAuthenticated) {
            router.navigateByUrl('/login');
          }
        })
      )

      //return true;
};
