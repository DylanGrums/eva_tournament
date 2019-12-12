import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {
  private _apiUrl = 'http://api.giphy.com/v1/gifs/search?q='
  private _apiKey = 'pA9gAZ9WI2x4Xwi4EcH8cDA9Li6iOWwl'
  myData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


  constructor(private http: HttpClient
  ) { }

  // public getGiphys() {
  //   return this.giphs
  // }

  public search(search: string) {
    // this.http.get(this._apiUrl + search + '&api_key=' + this._apiKey + '&limit=4')
    // .pipe(
    //   map(data => data as giph)
    // )
    // .subscribe(
    //   (data) => this.myData.next(data.data) 
    // );
    this.myData.next(mockGames)
  }

  getMyData() {
    return this.myData.asObservable();
  }

}

export type giph = {
  data: any[]
  meta: any[]
  pagination: any[]
}

export var mockGames = [
  { name: "Call Of Duty", imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", category: "fps" },
  { name: "Call Of Duty", imageUrl: "https://www.toornament.com/disciplines/cod_bo4/img/cover-225x300-medium.jpg?1558961487", category: "fps" },
  { name: "Call Of Duty", imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", category: "fps" },
  { name: "Call Of Duty", imageUrl: "https://www.toornament.com/disciplines/cod_bo4/img/cover-225x300-medium.jpg?1558961487", category: "fps" }
]
