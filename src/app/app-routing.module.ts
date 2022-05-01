import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CongressComponent } from './congress/congress.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'location', component: LocationComponent},
  { path: 'congress', component: CongressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
