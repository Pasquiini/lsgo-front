
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [
    {
      title: 'Hospedagens',
      icon: 'hotel',
      route: '/hospedagens'
    },
    {
      title: 'Lazer',
      icon: 'local_play',
      route: 'hospedagens'
    },
    {
      title: 'Alimentação',
      icon: 'restaurant_menu',
      route: 'hospedagens'
    },
    {
      title: 'Outros',
      icon: 'dynamic_feed',
      route: 'hospedagens'
    },
  ]
}
