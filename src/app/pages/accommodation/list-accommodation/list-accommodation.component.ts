import { Component } from '@angular/core';
import { Accommodations } from 'src/app/shared/constants';

@Component({
  selector: 'app-list-accommodation',
  templateUrl: './list-accommodation.component.html',
  styleUrls: ['./list-accommodation.component.css']
})
export class ListAccommodationComponent {
  accommodationArray = Accommodations;

}
