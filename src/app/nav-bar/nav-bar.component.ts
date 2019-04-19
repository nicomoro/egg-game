import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/assets/common/services/profile.service';
import { Profile } from 'src/assets/common/models/profile.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EggService } from 'src/assets/common/services/egg.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navbarOpen = false;
  public tableProfile = [];
  public profil: Profile;
  public picture: string;
  public name: string;
  public origin: string;
  public money= this.service.myMoney;
  public id: string;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  myegg = this.serviceEgg.myeggs

  constructor(private service: ProfileService,
              public activatedRoute: ActivatedRoute,
              public serviceEgg : EggService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.service.getProfile(id).subscribe(
      (profile: Profile) => {
        this.profil = profile;
        console.log(profile);
        this.picture = profile.image;
        this.name = profile.name;
        this.origin = profile.origin;
        this.id = profile.id;
      });
    });
    this.service.subject.subscribe((money: any)=>{
      this.money = money
    })
  }
}
