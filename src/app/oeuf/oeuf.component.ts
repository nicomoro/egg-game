import { Component, OnInit } from '@angular/core';
import { EggService } from 'src/assets/common/services/egg.service';

@Component({
  selector: 'app-oeuf',
  templateUrl: './oeuf.component.html',
  styleUrls: ['./oeuf.component.css']
})
export class OeufComponent implements OnInit {
  public btnStart = this.service.btnS;
  public eggster = this.service.eggster;

  constructor(public service: EggService) { }

  public num = this.service.number;

  public yoshiEgg =  {id: '5cac51240d488f0da6151c30',
  name: 'Egg of Herring Atlantic',
  color: '#52353d',
  caliber: 'L',
  farming: 2,
  country: 'VU',
  rarity: 'legendary',
  image: 'http://pixelartmaker.com/art/2480187d8bd9102.png',
  power: 'increase health:9',
  meta: {
    revision: 0,
    created: 1554982481291,
    version: 0
  },
  $loki: 100,
  validity: '2019-04-19T12:07:52.851Z'
};


  ngOnInit() {
  }

  addLegend() {
    this.service.newEgg(this.yoshiEgg);
  }

}
