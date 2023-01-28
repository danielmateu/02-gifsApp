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

  buscarGifs(query: string){
    /* Adding the query to the beginning of the array. */
    this._historial.unshift(query);

    console.log(this._historial)
  }

}
