import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRequestsComponent } from './new-requests/new-requests.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import {PageNotFoundComponent} from "./global/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'premium/requests', component: NewRequestsComponent},
  {path: 'account', component: UserSettingsComponent},
  {path: '',   redirectTo: '/premium/requests', pathMatch: 'full'}, // redirect to new requests
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
