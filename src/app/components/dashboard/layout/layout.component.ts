import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public selectedTournament;
  public tournamentList: Array<{ label: string; value: string }> = [];
  public activeLink: string;
  private currentUrl: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.firstChild.snapshot.url[0].path;

    this.setUrlDisplayName()

    for (let i = 0; i < 5; i++) {
      this.tournamentList.push({ label: 'tournament' + i, value: 'tournament' + i })
    }

    console.log('active', this.activeLink)
    if (this.currentUrl === 'tournament-form') {
      this.selectedTournament = 'Nouveau Tournoi';
    } else if (this.tournamentList.length > 0) {
      this.selectedTournament = this.tournamentList[0].value;
    }

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(() => {
        this.setUrlDisplayName()
      });



  }

  setUrlDisplayName() {
    switch (this.currentUrl) {
      case 'summary': {
        this.activeLink = "Vue d'ensemble"
        break;
      }
      case 'settings': {
        this.activeLink = "Paramètres"
        break;
      }
      case 'players': {
        this.activeLink = "Participants"
        break;
      }
      case 'placements': {
        this.activeLink = "Placement"
        break;
      }
      case 'tournament-form': {
        this.activeLink = "Nouveau Tournoi"
        break;
      }


      default:
        break;
    }
  }





}
