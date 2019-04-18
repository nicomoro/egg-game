import { Component, OnInit } from '@angular/core';
import { CharacteresService } from '../../assets/common/services/characteres.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  public users: [];
  public user;

  constructor(public service: CharacteresService) { }

  ngOnInit() {
    this.service.getCharacters().subscribe(
      (etam) => {
        this.user = etam;
        this.users = this.user;
        console.log(this.user);
      });
  }

}
