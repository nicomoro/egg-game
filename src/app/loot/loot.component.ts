import { Component, OnInit } from '@angular/core';
import { LootService } from '../../assets/common/services/loot.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EggsRandom } from 'src/assets/common/models/eggsRandom.model';
import { EggService } from 'src/assets/common/services/egg.service';
import { ProfileService } from 'src/assets/common/services/profile.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loot',
  templateUrl: './loot.component.html',
  styleUrls: ['./loot.component.css']
})
export class LootComponent implements OnInit {

  public picture: string;
  public randEgg: EggsRandom;
  public name: string;
  public farming: number;
  public power: string;
  public id: string;
  public money = this.serviceProfile.myMoney;
  public hide = true;
  public subject:Subject<any>=new Subject();
  public easter = false;
  easterImg: boolean;
  public hideBtnAdd = false;



  constructor(private service: LootService,
              public activatedRoute: ActivatedRoute,
              public serviceEgg: EggService,
              public serviceProfile: ProfileService) { }

  ngOnInit() {
  }

  addMyEgg(id){
    this.serviceEgg.newEgg(id),
    this.hideBtnAdd = true,
    console.log(id)
  }

  pay() {
    if (this.serviceProfile.myMoney>=5) {
    const result = confirm('Do you really want to spend 5$?');
    this.serviceProfile.spendMoney();
    console.log(this.serviceProfile.myMoney)
    this.service.getEggsRandom().subscribe(
      (egg: EggsRandom) => {
        this.hideBtnAdd = false;
        this.hide = false;
        this.randEgg = egg;
        console.log(egg);
        this.picture = egg.image;
        console.log(egg.image);
        this.name = egg.name;
        this.farming = egg.farming;
        this.power = egg.power;
        this.id = egg.id;
      })
      }
      else{
        const error = confirm('You do not have enough money')
      }
  }
  
  easterEgg(){
    const result = confirm('Now....you are rich !!!')
    this.easter = true;
    this.serviceProfile.easterEgg();
  }
}