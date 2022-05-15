import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CongressComponent } from './congress/congress.component';
import { DistrictSearchComponent } from './congress/district-search/district-search.component';
import { SavedOfficialsComponent } from './congress/saved-officials/saved-officials.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'congress', component: CongressComponent, canActivate: [AuthGuard]},
  { path: 'search', component: DistrictSearchComponent, canActivate: [AuthGuard]},
  { path: 'saved', component: SavedOfficialsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
