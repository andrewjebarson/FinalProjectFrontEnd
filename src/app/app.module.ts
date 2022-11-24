import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenErrorComponent } from './token-error/token-error.component';
import { UserViewComponent } from './UsersView/user-view/user-view.component';
import { RouterComponent } from './router/router.component';
import { BookingviewComponent } from './UsersView/bookingview/bookingview.component';
import { UserDashboardComponent } from './UsersView/user-dashboard/user-dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TokenErrorComponent,
    UserViewComponent,
    RouterComponent,
    BookingviewComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [    RouterComponent
  ]
})
export class AppModule { }
