import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/search-response';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  /* Input.HTML -> component.ViewChild -> service.searchTag -> validar -> GET */

  public gifList: Gif[] = [];
  private _tagsHistory: string [] = [];
  private apiKey: string = `gJqB3lCvJceZrgJzukr2SoBefLPXBMpz`;

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs service ready');
  }

  get tagsHistory():string [] {
    return [...this._tagsHistory];
  }

  /* async */ searchTag(tag: string): void/* Promise<void> */ {
    if(tag !== '') {
      this.organizeHistory(tag);

      const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);

      this.http.get<SearchResponse>('https://api.giphy.com/v1/gifs/search', { params })
      .subscribe(res => {
        this.gifList = res.data;
        console.log(res.data);
      });
      // fetch('https://api.giphy.com/v1/gifs/search?api_key=gJqB3lCvJceZrgJzukr2SoBefLPXBMpz&q=dbz&limit=10')
      // .then(res => res.json())
      // .then(data => console.log(data));
    }
  }

  private organizeHistory(tag:string) {
    tag = tag.toLocaleLowerCase();
    /* valido si existe con un include y lo borro con un filter para insertarlo con un unshift y limitarlo con un splice */
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldtag => oldtag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    /* si no tenemos informacion */
    if(!localStorage.getItem('history')) return;
    const tag = JSON.parse(localStorage.getItem('history')!);
    this._tagsHistory = tag;
    if(this._tagsHistory.length === 0) return;
    this.searchTag(tag[0]);
  }
}
