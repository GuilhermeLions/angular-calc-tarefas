import { Component } from '@angular/core';
import { CabececalhoComponent } from '../../component/cabececalho/cabececalho.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CabececalhoComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
