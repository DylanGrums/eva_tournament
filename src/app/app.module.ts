import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './shared/modules/icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, fr_FR } from 'ng-zorro-antd';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { TournamentFormComponent } from './components/dashboard/tournament-form/tournament-form.component';
import { LayoutComponent } from './components/dashboard/layout/layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login-page/login/login.component';
import { RegisterComponent } from './components/login-page/register/register.component';
import { SummaryComponent } from './components/dashboard/summary/summary.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { PlayersComponent } from './components/dashboard/players/players.component';
import { PlacementsComponent } from './components/dashboard/placements/placements.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TournamentFormComponent,
    LoginPageComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    SummaryComponent,
    SettingsComponent,
    PlayersComponent,
    PlacementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NzAffixModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
