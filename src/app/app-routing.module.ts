import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentFormComponent } from './components/tournament-form/tournament-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'tournament-form', component: TournamentFormComponent
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
