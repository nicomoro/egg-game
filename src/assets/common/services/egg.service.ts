import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Eggs } from '../models/eggs.model';

@Injectable({
  providedIn: 'root'
})
export class EggService {

  constructor(

  public http: HttpClient,

    ) { }

  public myeggs= []
  public number = 1;

  public getEggs() {
    const  obs1: Observable<any> = this.http.get('http://easteregg.wildcodeschool.fr/api/eggs');
    const  treatment  = (reponse: any) => {
      return  reponse as Eggs;
    };
    return  obs1.pipe(map(treatment));
  }

public getAnEggs(id): Observable<Eggs> {
  const eggsObs: Observable<any> = this.http.get(`http://easteregg.wildcodeschool.fr/api/eggs/${id}`);
  const EggsArray = (param: any) => {
    return param as Eggs;
  };
  return eggsObs.pipe(map(EggsArray));
}


public newEgg(id: any){
  return this.myeggs.push(id)
}

}

