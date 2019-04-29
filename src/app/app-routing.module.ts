import { EditFriendsComponent } from './edit-friends/edit-friends.component';
import { LoginComponent } from './login/login.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { ChatComponent } from './profile/chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// import { AuthGuard } from './services/auth.guard';

export  const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile',  component: ProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'addNew', component: AddFriendsComponent },
  { path: 'edit', component: EditFriendsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
