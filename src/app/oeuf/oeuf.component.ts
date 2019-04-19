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
  

  ngOnInit() {
  }

  addLegend(){
    this.service.newEgg("5cac51240d488f0da6151c30");
  }

}
