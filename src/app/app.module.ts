import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationComponent } from './location/location.component';
import { CongressComponent } from './congress/congress.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LocationComponent,
    CongressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
