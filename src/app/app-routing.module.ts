import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DistrictSearchComponent } from './congress/district-search/district-search.component';
import { OfficialsPageComponent } from './congress/officials-page/officials-page.component';
import { SavedOfficialsComponent } from './congress/saved-officials/saved-officials.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'search', component: DistrictSearchComponent},
  { path: 'saved', component: SavedOfficialsComponent,
    children: [
      { path: ':id', component: OfficialsPageComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
