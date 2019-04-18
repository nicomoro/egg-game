import { Component, OnInit } from '@angular/core';
import { EggService } from 'src/assets/common/services/egg.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {



  constructor(
    public service: EggService,
  ) { }

  myEggs = this.service.myeggs

  ngOnInit() {
    console.log(this.myEggs)
      
  }

}
