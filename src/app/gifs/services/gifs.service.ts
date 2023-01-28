import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'mWfciPfOHbKkyHQBRmGrBPMXJeULNHyH'
  private _historial: string[] = [];

  public get historial(){
    /* Returning a copy of the array. */
    return [...this._historial]
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query: string = ''){
    /* Adding the query to the beginning of the array. */
    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10)
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=mWfciPfOHbKkyHQBRmGrBPMXJeULNHyH&q=kakarot&limit=10&offset=0&rating=g&lang=en')
    .subscribe((response: any) => {
      console.log(response)
    })
  }

}
