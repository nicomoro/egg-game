import { Injectable } from '@angular/core';
// tslint:disable-next-line: import-spacing
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Charactere } from '../models/characteres.models';

@Injectable({
  providedIn: 'root'
})
export class CharacteresService {


  constructor(public http: HttpClient) { }

// tslint:disable-next-line: align
  public getCharacters() {
    const  obs1: Observable<any> = this.http.get('http://easteregg.wildcodeschool.fr/api/characters');
    const  treatment  = (reponse: any) => {
      return  reponse as Charactere;
    };


    return  obs1.pipe(map(treatment));
  }
}


