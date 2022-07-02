import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthService } from "./shared/services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
