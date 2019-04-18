import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EggService } from 'src/assets/common/services/egg.service';

@Component({
  selector: 'app-egg-detail',
  templateUrl: './egg-detail.component.html',
  styleUrls: ['./egg-detail.component.css']
})
export class EggDetailComponent implements OnInit {
  
  eggDetail: any;

  constructor(   
    public route: ActivatedRoute,
    public service: EggService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.service
        .getAnEggs(id)
        .subscribe((bookinglist: any) => {
          this.eggDetail = bookinglist;
          ;
        });
    });

}
}
