import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hrms/home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth-user/auth-user.module').then((m) => m.AuthUserModule),
  },
  {
    path: 'hrms',
    loadChildren: () =>
      import('./modules/master.module').then((m) => m.MasterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
