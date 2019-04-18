import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { map } from 'rxjs/operators';
import { EggsRandom } from '../models/eggsRandom.model';

@Injectable({
  providedIn: 'root',
})
export class LootService {

  private service: HttpClient;

// tslint:disable-next-line: variable-name
  constructor(PARAM_SERVICE: HttpClient) {
    this.service  =  PARAM_SERVICE;
  }

  public getEggsRandom(): Observable<EggsRandom> {
    const  obs1: Observable<any> = this.service.get(`http://easteregg.wildcodeschool.fr/api/eggs/random`);
    const  treatment  = (PARAM_DATA: any) => {
      return  PARAM_DATA as EggsRandom;
      console.log(PARAM_DATA);
    };

    return  obs1.pipe(map(treatment));
  }
}
