import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private service: HttpClient;
  public myMoney = 10;

// tslint:disable-next-line: variable-name
  constructor(PARAM_SERVICE: HttpClient) {
    this.service  =  PARAM_SERVICE;
  }

  public spendMoney(){
    this.myMoney -= 5;
    this.subject.next(this.myMoney)
  }

  public easterEgg(){
    this.myMoney += 10000;
    this.subject.next(this.myMoney);
  }

  public getProfile(id): Observable<Profile> {
    const  obs1: Observable<any> = this.service.get(`http://easteregg.wildcodeschool.fr/api/characters/${id}`);
    const  treatment  = (PARAM_DATA: any) => {
      return  PARAM_DATA as Profile;
      console.log(PARAM_DATA);
    };

    return  obs1.pipe(map(treatment));
  }

  public subject:Subject<any>=new Subject();
  

}
