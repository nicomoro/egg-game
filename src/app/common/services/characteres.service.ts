import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Charactere } from '../models/characteres.models';

@Injectable({
  providedIn: 'root'
})
export class CharacteresService {

  constructor(public http: HttpClient) { }
}
public getCharacters (): {
  const  obs1:Observable<any> = this.http.get('http://open-reza.herokuapp.com/api/profiles/');
  const  treatment  = (reponse:any) => {
    return  reponse as Profile;
    console.log(reponse);
  };

  return  obs1.pipe(map(treatment));
}