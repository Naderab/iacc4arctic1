import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartementComponent } from './form-apartement/form-apartement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { ResidenceService } from './core/services/residence.service';
import { TestModule } from './test/test.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ResidencesComponent, FormResidenceComponent, FormApartementComponent, NotFoundComponent, DetailsResidenceComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule,
    TestModule,HttpClientModule,ReactiveFormsModule],
  providers: [ResidenceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
