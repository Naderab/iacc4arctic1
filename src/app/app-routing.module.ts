import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartementComponent } from './form-apartement/form-apartement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';

const routes: Routes = [
  { path: 'residences', component: ResidencesComponent },
  { path: 'residence/add', component: FormResidenceComponent },
  { path: 'apartement/add', component: FormApartementComponent },
  {path:'residence/:param/:id/:name',component:DetailsResidenceComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
