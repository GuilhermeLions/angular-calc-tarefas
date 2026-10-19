import { Component } from '@angular/core';
import { CabececalhoComponent } from '../../component/cabececalho/cabececalho.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CabececalhoComponent, FormsModule, RouterLink], // <-- FormsModule adicionado aqui
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  somar() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }
  subtrair() {
    this.resultado = Number(this.numero1) - Number(this.numero2);
  }
  multiplicar() {
    this.resultado = Number(this.numero1) * Number(this.numero2);
  }
  dividir() {
    this.resultado = Number(this.numero1) / Number(this.numero2);
    }
    
  }
