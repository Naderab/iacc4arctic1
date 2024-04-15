import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { ResidenceService } from '../core/services/residence.service';
import { TestRoutingModule } from './test-routing.module';



@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule],
  exports: [],
  providers: [ResidenceService],
})
export class TestModule {}
