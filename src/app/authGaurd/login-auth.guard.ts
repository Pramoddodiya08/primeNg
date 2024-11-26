import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const authUser = localStorage.getItem('authUser');

    if (authUser) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  }

  return true;
};
