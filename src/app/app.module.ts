import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AngularDateTimePickerModule } from 'src/assets/angular2-datetimepicker';
import { DancingComponent } from './components/dancing/dancing.component';
import { DancersComponent } from './components/dancers/dancers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentComponent,
    DancingComponent,
    DancersComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularDateTimePickerModule,

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
