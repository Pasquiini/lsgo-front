import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccommodationRoutingModule } from './accommodation-routing.module';
import { ListAccommodationComponent } from './list-accommodation/list-accommodation.component';
import { ViewAccommodationComponent } from './view-accommodation/view-accommodation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListAccommodationComponent,
    ViewAccommodationComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    SharedModule
  ]
})
export class AccommodationModule { }
