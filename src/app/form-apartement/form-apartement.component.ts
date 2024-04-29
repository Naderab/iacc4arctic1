import { Component } from '@angular/core';
// import { apartFormService } from '../core/services/apartForm.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-apartement',
  templateUrl: './form-apartement.component.html',
  styleUrls: ['./form-apartement.component.css'],
})
export class FormApartementComponent {
  constructor() {
    this.apartForm = new FormGroup({
      appartNum: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+'),
      ]),
      floorNum: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+'),
      ]),
      surface: new FormControl(0, [Validators.required]),
      terrace: new FormControl('', [Validators.required]),
      surfaceTerrace: new FormControl(0, [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  get appartNum() {
    return this.apartForm.get('appartNum');
  }
  get floorNum() {
    return this.apartForm.get('floorNum');
  }
  get surface() {
    return this.apartForm.get('surface');
  }
  get terrace() {
    return this.apartForm.get('terrace');
  }
  get surfaceTerrace() {
    return this.apartForm.get('surfaceTerrace');
  }
  get category() {
    return this.apartForm.get('category');
  }
  get description() {
    return this.apartForm.get('description');
  }

  apartForm: FormGroup;

  // updateAFromComponent() {
  //   this.rs.UpdateAService(5);
  // }

  add() {
    console.log(this.apartForm);

    //  this.rs.addAppartment(this.residence.value).subscribe({
    //     next: () => this.r.navigate(['/residences']),
    //     error: (e) => console.log(e),
    //   });
  }
}
