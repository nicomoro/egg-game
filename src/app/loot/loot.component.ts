import { Component, OnInit } from '@angular/core';
import { LootService } from '../../assets/common/services/loot.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EggsRandom } from 'src/assets/common/models/eggsRandom.model';
import { EggService } from 'src/assets/common/services/egg.service';
import { ProfileService } from 'src/assets/common/services/profile.service';

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
  public money = this.serviceProfile.myMoney
  public hide = true;


  constructor(private service: LootService,
              public activatedRoute: ActivatedRoute,
              public serviceEgg: EggService,
              public serviceProfile: ProfileService) { }

  ngOnInit() {
  }

  addMyEgg(id){
    this.serviceEgg.newEgg(id),
    console.log(id)
  }

  pay() {
    const result = confirm('Do you really want to spend 5$?');
    if (result && this.money>=5) {
    this.serviceProfile.spendMoney();
    console.log(this.serviceProfile.myMoney)
    this.service.getEggsRandom().subscribe(
      (egg: EggsRandom) => {
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
  }
}
