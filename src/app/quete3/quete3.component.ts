import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EggService } from 'src/assets/common/services/egg.service';
@Component({
  selector: 'app-quete3',
  templateUrl: './quete3.component.html',
  styleUrls: ['./quete3.component.css']
})
export class Quete3Component implements OnInit {
  public myForm: FormGroup;
  public hide = true;
  constructor(private fb: FormBuilder,
    public service: EggService) {

  }
  ngOnInit() {
    this.myForm = this.fb.group({
      reponse: ['',[ Validators.required, this.validator1.bind(this)]]
    });
    
  }
  validator1(formControl: FormControl): {[s: string]: boolean} {
// tslint:disable-next-line: triple-equals
    if (formControl.value === 'tu en pousses un') {
      this.hide = false;
    } else {

      return null;

    }
  }

  quete3Finish(){
    this.service.number = 4;
  }

  submit() {
    console.log(this.myForm.valid);

  }
}
