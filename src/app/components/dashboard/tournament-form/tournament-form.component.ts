import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { ApiMockService } from 'src/app/services/api-mock.service';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.css']
})
export class TournamentFormComponent implements OnInit {
  validateForm: FormGroup;
  selectedGameIndex: number = null;
  selectedGame: any
  formatedDate

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log('form', this.validateForm.value)

    this.formatDate();
  }

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout && this.validateForm.controls.formLayout.value === 'horizontal';
  }

  selectGame(index, game) {
    this.selectedGameIndex = index
    this.selectedGame = game
  }

  formatDate() {
    let date = this.validateForm.get('date').value + ''
    let dateArray = date.split(',');
    let formatedDateArray = []
    dateArray.forEach(date => {
      formatedDateArray.push(formatDate(date, 'shortDate', 'fr'))
    });
    this.formatedDate = formatedDateArray[0] + ' - ' + formatedDateArray[1]
    this.validateForm.value.date[0] = formatedDateArray[0]
    this.validateForm.value.date[1] = formatedDateArray[1]
  }

  constructor(
    private fb: FormBuilder,
    private apiService: ApiMockService
    
    ) {}

  ngOnInit(): void {
    this.formatedDate = null
    this.selectedGame = null
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      game: [null, [Validators.required]],
      platform: [null, [Validators.required]],
      players: [null, [Validators.required]],
      playerStructure: [null, [Validators.required]],
      date: [null, [Validators.required]]
    });

    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      ,filter(res => res.length > 1) // <-- Optional
      // Time in milliseconds between key events
      ,debounceTime(200)        
      // If previous query is diffent from current   
      ,distinctUntilChanged()
      // subscription for response
      ).subscribe((search) => {
          this.search(search)
          this.isSearching = true
      })

    this.apiService.getMyData().subscribe(
      (data) => { 
        console.log(data)
        setTimeout(() => {
          this.isSearching = false
        }, 1000);
        this.giphs = data
      });

      console.log(this.selectedGame, this.validateForm.get('title').value, this.formatedDate)
  }

  public giphs: any[]
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;
  public isSearching: boolean

  search(search) {
    this.giphs = [];
    if (search != '' || search.trim() != '') {
      this.apiService.search(search)
    }
  }



}
