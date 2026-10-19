import { Component } from '@angular/core';
import { CabececalhoComponent } from '../../component/cabececalho/cabececalho.component';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CabececalhoComponent],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  numero: number = 0;

  adicionar() {
    this.numero++;
  }

  tirar() {
    this.numero--;
  }
}