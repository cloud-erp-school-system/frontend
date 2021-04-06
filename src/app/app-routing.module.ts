import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewRequestsComponent } from './new-requests/new-requests.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'premium/requests', component: NewRequestsComponent},
  {path: 'account', component: UserSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
