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
import { UserDashboardComponent } from './UsersView/user-dashboard/user-dashboard.component';
import { PassengerdetailsComponent } from './UsersView/passengerdetails/passengerdetails.component';
import { UserpreviewComponent } from './UsersView/userpreview/userpreview.component';
import { TrainpaymentComponent } from './UsersView/trainpayment/trainpayment.component';
import { SuccessComponent } from './UsersView/success/success.component';
import { ErrorComponent } from './error/error.component';
import { PnrViewComponent } from './UsersView/pnr-view/pnr-view.component';
import { UserProfileDashboardComponent } from './UsersView/UserProfile/user-profile-dashboard/user-profile-dashboard.component';
import { ProfileUpdateComponent } from './UsersView/UserProfile/profile-update/profile-update.component';
import { UpcomingComponent } from './UsersView/UserProfile/upcoming/upcoming.component';
import { AddtrainComponent } from './Admin-view/addtrain/addtrain.component';
import { AdminviewComponent } from './Admin-view/adminview/adminview.component';
import { ModifytrainComponent } from './Admin-view/modifytrain/modifytrain.component';
import { ViewtrainComponent } from './Admin-view/viewtrain/viewtrain.component';
import { NotfoundComponent } from './notfound/notfound.component'

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
    UserDashboardComponent,
    PassengerdetailsComponent,
    UserpreviewComponent,
    TrainpaymentComponent,
    SuccessComponent,
    ErrorComponent,
    PnrViewComponent,
    UserProfileDashboardComponent,
    ProfileUpdateComponent,
    UpcomingComponent,
    AddtrainComponent,
    AdminviewComponent,
    ModifytrainComponent,
    ViewtrainComponent,
    NotfoundComponent
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
