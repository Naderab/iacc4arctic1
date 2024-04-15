import { Component } from '@angular/core';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {

  aComponent!: number;
  constructor(private rs: ResidenceService) {
    this.aComponent = this.rs.a;
  }
}
