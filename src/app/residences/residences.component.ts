import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Apartment } from '../core/models/apartment';

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
  residences: Residence[] = [
    {
      id: 1,
      name: 'Residence farah 1',
      address: 'Boumhal',
      image: '',
    },
    {
      id: 2,
      name: 'Residence farah 2',
      address: 'Mrezga',
      image: '',
    },
    {
      id: 3,
      name: 'Residence farah 3',
      address: 'Arianna',
      image: '',
    },
  ];
  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.residences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'AppartementS+2',
      residence: this.residences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.residences[1],
    },
    {
      id: 4,
      appartNum: 4,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.residences[1],
    },
  ];
  quantity: number = 5;
  hide: boolean = false;

  Buy() {
    this.quantity--;
  }

  color: string = 'red';
  listApartementByResidence:Apartment[]=[]
  showA(r: Residence) {
    this.listApartementByResidence=[]
    this.listApartments.forEach((a) => {
      if (a.residence == r) {
        this.listApartementByResidence.push(a)
      }
    })
  }
}
