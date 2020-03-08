import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentFormComponent } from './components/dashboard/tournament-form/tournament-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LayoutComponent } from './components/dashboard/layout/layout.component';
import { LandingComponent } from './components/landing/landing.component';
import { SummaryComponent } from './components/dashboard/summary/summary.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { PlayersComponent } from './components/dashboard/players/players.component';
import { PlacementsComponent } from './components/dashboard/placements/placements.component';

const routes: Routes = [
  { path: '', component: LandingComponent },

  {
    path: 'dashboard', component: LayoutComponent, children: [
      {path: '', redirectTo: 'summary', pathMatch: 'prefix'},

      {
        path: 'tournament-form', component: TournamentFormComponent
      },
      {
        path: 'summary', component: SummaryComponent
      },
      {
        path: 'settings', component: SettingsComponent
      },
      {
        path: 'players', component: PlayersComponent
      },
      {
        path: 'placements', component: PlacementsComponent
      }
    ]
  },
  { path: 'login', component: LoginPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
