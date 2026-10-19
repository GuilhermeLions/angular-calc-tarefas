import { Component } from '@angular/core';
import { CabececalhoComponent } from '../../component/cabececalho/cabececalho.component';
import { FormsModule } from '@angular/forms'; // Obrigatório para ngModel

export interface Tarefa {
  id: number;
  titulo: string;
  desc: string;
  prazo: string;
  concluido: boolean;
}

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CabececalhoComponent, FormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  minhasTarefas: Tarefa[] = [];

  novoTitulo: string = '';
  novadesc: string = '';
  novadata: string = '';

  adicionarTarefas() {
    if (this.novoTitulo.trim() === '') {
      return;
    }

    // push com parênteses fora e objeto dentro {}
    this.minhasTarefas.push({
      id: this.minhasTarefas.length + 1,
      titulo: this.novoTitulo,
      desc: this.novadesc,
      prazo: this.novadata,
      concluido: false
    });

    this.novoTitulo = '';
    this.novadesc = '';
    this.novadata = '';
  }
}
type tarefas = [
  id: number,
  titulo: string,
  desc: string,
  prazo: string,
  concluido :boolean
] 

