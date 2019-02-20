import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { ProfileComponent } from './profile/profile.component';
import { routes } from './app-routing.module';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2CarouselamosModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
