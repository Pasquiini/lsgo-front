
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
      icon: 'hotel'
    },
    {
      title: 'Lazer',
      icon: 'local_play'
    },
    {
      title: 'Alimentação',
      icon: 'restaurant_menu'
    },
    {
      title: 'Outros',
      icon: 'dynamic_feed'
    },
  ]
}
