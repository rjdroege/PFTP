import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CongressComponent } from './congress/congress.component';
import { DistrictSearchComponent } from './congress/district-search/district-search.component';
import { HomeComponent } from './home/home.component';
import { SenatorComponent } from './shared/senator/senator.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'congress', component: CongressComponent},
  { path: 'search', component: DistrictSearchComponent},
  { path: 'senator', component: SenatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
