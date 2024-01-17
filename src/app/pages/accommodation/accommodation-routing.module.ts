import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccommodationComponent } from './list-accommodation/list-accommodation.component';

const routes: Routes = [
  {
    path: '',
    component: ListAccommodationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccommodationRoutingModule { }
