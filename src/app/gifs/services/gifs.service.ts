import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'mWfciPfOHbKkyHQBRmGrBPMXJeULNHyH'
  private _historial: string[] = [];
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'

  public resultados: Gif[] = []

  get historial() {
    /* Returning a copy of the array. */
    return [...this._historial]
  }

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || []

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []


  }

  buscarGifs(query: string = '') {
    /* Adding the query to the beginning of the array. */
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10)

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

      // console.log(params.toString())

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((response) => {
        // console.log(response.data)
        this.resultados = response.data

        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })
  }

}
