import { Component, OnInit } from '@angular/core';
import { LootService } from '../../assets/common/services/loot.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EggsRandom } from 'src/assets/common/models/eggsRandom.model';


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

  constructor(private service: LootService,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  pay() {
    this.service.getEggsRandom().subscribe(
      (egg: EggsRandom) => {
        this.randEgg = egg;
        console.log(egg);
        this.picture = egg.image;
        console.log(egg.image);
        this.name = egg.name;
        this.farming = egg.farming;
        this.power = egg.power;
      });
  }
}
