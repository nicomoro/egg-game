import { Component, OnInit } from '@angular/core';
import { Eggs } from 'src/assets/common/models/eggs.model';
import { EggService } from 'src/assets/common/services/egg.service';

@Component({
  selector: 'app-eggs-bank',
  templateUrl: './eggs-bank.component.html',
  styleUrls: ['./eggs-bank.component.css']
})
export class EggsBankComponent implements OnInit {

  constructor(private service: EggService) { }

  public eggsList: [] = [];

  ngOnInit() {
    this.service.getEggs().subscribe((eggs: any) => {
      this.eggsList = eggs;
    });
  }

}
