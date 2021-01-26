import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { IndexComponent } from './client/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './client/home/home.component';
import { FooterComponent } from './client/footer/footer.component';
import { UserHomeComponent } from './client/user-home/user-home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BusesComponent } from './admin/buses/buses.component';
import { DriversComponent } from './admin/drivers/drivers.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { AddDriverComponent } from './admin/add-driver/add-driver.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    HomeComponent,
    FooterComponent,
    UserHomeComponent,
    AdminloginComponent,
    AdminregisterComponent,
    NavbarComponent,
    BookingsComponent,
    BusesComponent,
    DriversComponent,
    UserProfileComponent,
    AddDriverComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
