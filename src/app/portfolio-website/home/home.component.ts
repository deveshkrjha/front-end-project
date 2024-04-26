import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showDescription1:boolean = false;
  showDescription2:boolean = false;
  showDescription3:boolean = false;

  knowMore1(){
    this.showDescription1 = !this.showDescription1;
  }
  knowMore2(){
    this.showDescription2 = !this.showDescription2;
  }
  knowMore3(){
    this.showDescription3 = !this.showDescription3;
  }

}
