import { MyCityFilter } from './cityFilter.pipe';
import { ChatComponent } from './profile/chat/chat.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { ProfileComponent } from './profile/profile.component';
import { routes, AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { ChatModule } from './profile/chat/chat.module';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { LoginComponent } from './login/login.component';
import { ShowFilterComponent } from './show-filter/show-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    ProfileComponent,
    HeaderComponent,
    ChatComponent,
    AddFriendsComponent,
    LoginComponent,
    MyCityFilter,
    ShowFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2CarouselamosModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    ChatModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
