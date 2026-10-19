import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabececalho',
  imports: [RouterLink],
  templateUrl: './cabececalho.component.html',
  styleUrl: './cabececalho.component.css'
})
export class CabececalhoComponent {
@Input() titulo: string = '';
}
