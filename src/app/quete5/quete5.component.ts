import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-quete5',
  templateUrl: './quete5.component.html',
  styleUrls: ['./quete5.component.css']
})
export class Quete5Component implements OnInit {
  public myForm: FormGroup;
  public hide = true;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.myForm = this.fb.group({
      reponse: ['', [ Validators.required, this.validator1.bind(this)]]
    });

  }
  validator1(formControl: FormControl): {[s: string]: boolean} {
// tslint:disable-next-line: triple-equals
    if (formControl.value === 'dimanche') {
      this.hide = false;
    } else {

      return null;

    }
  }

  submit() {
    console.log(this.myForm.valid);

  }
}
