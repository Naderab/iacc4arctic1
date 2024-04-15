import { Component } from '@angular/core';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-form-apartement',
  templateUrl: './form-apartement.component.html',
  styleUrls: ['./form-apartement.component.css'],
})
export class FormApartementComponent {
  constructor(private rs: ResidenceService) {}

  updateAFromComponent(){
    this.rs.UpdateAService(5);
  }
}
