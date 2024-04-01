import { Component } from '@angular/core';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  title: string = 'Welcome to residences component';
  residence = {
    id: 1,
    name: 'Residence farah',
    surface: 120,
  };
  residences: any[] = [
    {
      id: 1,
      name: 'Residence farah 1',
      surface: 110,
    },
    {
      id: 2,
      name: 'Residence farah 2',
      surface: 90,
    },
    {
      id: 3,
      name: 'Residence farah 3',
      surface: 400,
    },
  ];
  quantity: number = 5;
  hide: boolean = false;

  Buy() {
    this.quantity--;
  }

  color: string = 'red';
}
