import { Component } from '@angular/core';
import { ResidenceService } from '../../core/services/residence.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  constructor(private rs: ResidenceService) {}

  updateAFromComponent() {
    this.rs.UpdateAService(6);
  }
}
