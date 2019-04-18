import { Component, OnInit } from '@angular/core';
import { EggService } from 'src/assets/common/services/egg.service';

@Component({
  selector: 'app-oeuf',
  templateUrl: './oeuf.component.html',
  styleUrls: ['./oeuf.component.css']
})
export class OeufComponent implements OnInit {
  

  constructor(public service: EggService) { }

  public num = this.service.number;

  ngOnInit() {
  }

}
