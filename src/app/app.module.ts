import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CongressComponent } from './congress/congress.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DistrictSearchComponent } from './congress/district-search/district-search.component';
import { SenatorComponent } from './shared/senator/senator.component';
import { RepComponent } from './shared/rep/rep.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CongressComponent,
    HomeComponent,
    AuthComponent,
    DistrictSearchComponent,
    SenatorComponent,
    RepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
