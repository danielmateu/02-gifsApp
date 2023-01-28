import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _historial: string[] = [];


  public get historial(){
    /* Returning a copy of the array. */
    return [...this._historial]
  }

  buscarGifs(query: string = ''){
    /* Adding the query to the beginning of the array. */
    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10)
    }
    console.log(this._historial)
  }

}
