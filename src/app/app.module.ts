import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewRequestsComponent } from './new-requests/new-requests.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      // the config values below need to be set up in the keycloak server
      config: {
        url: 'https://63.250.34.54:8443/auth', 
        realm: 'erp-dev',
        clientId: 'erp-dev',
      },
      initOptions: {
        onLoad: 'login-required',
      },
    });
} 

@NgModule({
  declarations: [
    AppComponent,
    NewRequestsComponent,
    UserSettingsComponent,


    NavSidebarComponent,


    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
