import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//import { AuthGuard } from './services/auth.guard';

export  const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'profile',  component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }