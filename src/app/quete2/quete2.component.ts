import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EggService } from 'src/assets/common/services/egg.service';
import { ProfileService } from 'src/assets/common/services/profile.service';

@Component({
  selector: 'app-quete2',
  templateUrl: './quete2.component.html',
  styleUrls: ['./quete2.component.css']
})
export class Quete2Component implements OnInit {
  public myForm: FormGroup;
  public hide = true;
  constructor(private fb: FormBuilder,
              public service: EggService,
              public profileService: ProfileService) {

  }
  ngOnInit() {
    this.myForm = this.fb.group({
      reponse: ['',[ Validators.required, this.validator1.bind(this)]]
    });

  }
  validator1(formControl: FormControl): {[s: string]: boolean} {
// tslint:disable-next-line: triple-equals
    if (formControl.value === 'chocolat') {
      this.hide = false;
    } else {

      return null;

    }
  }
  quete2Finish(){
    this.service.number = 3;
    this.profileService.earnMoney();
  }

  submit() {
    console.log(this.myForm.valid);

  }
}
