import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from "./services/validate.service"

const appRoutes: Routes=[
  {path: "", component : HomeComponent},
  {path: "register", component : RegisterComponent},
  {path: "login", component : LoginComponent},
  {path: "dashboard", component : DashBoardComponent, canActivate: [AuthGuard]},
  {path: "profile", component : ProfileComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashBoardComponent,
    ProfileComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
