import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { TitlePageComponent } from './title-page/title-page.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TitlePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    RouterModule,
    MatIconModule,
    FooterComponent,
    TitlePageComponent
  ]
})
export class SharedModule { }
