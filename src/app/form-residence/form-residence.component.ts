import { Component } from '@angular/core';
import { ResidenceService } from '../core/services/residence.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  aComponent!: number;
  id!: number;

  test: FormControl = new FormControl();

  residence: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{1,4}[a-zA-Z0-9]+$'),
    ]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(
    private rs: ResidenceService,
    private r: Router,
    private ac: ActivatedRoute
  ) {
    this.aComponent = this.rs.a;
    this.ac.params.subscribe((p) => (this.id = p['id']));
    this.id !== undefined &&
      this.rs.getResidenceById(this.id).subscribe({
        next: (data) =>
          this.residence.patchValue({
            name: data.name,
            address: data.address,
            image: data.image,
          }),
      });
  }

  get name() {
    return this.residence.get('name');
  }

  get address() {
    return this.residence.get('address');
  }

  get image() {
    return this.residence.get('image');
  }

  add() {
    console.log(this.residence);
    this.id !== undefined
      ? this.rs.updateResidence(this.id, this.residence.value).subscribe({
          next: () => this.r.navigate(['/residences']),
        })
      : this.rs.addResidence(this.residence.value).subscribe({
          next: () => this.r.navigate(['/residences']),
          error: (e) => console.log(e),
      });
  }
}
