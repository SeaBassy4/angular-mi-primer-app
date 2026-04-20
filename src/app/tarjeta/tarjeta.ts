import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class TarjetaComponent {
  // Entradas personalizables
  @Input() nombreAnimal: string = 'Animal Desconocido';
  @Input() descripcion: string = 'Sin descripción';
  @Input() imagenUrl: string = '';

  likes: number = 0;

  darLike() {
    this.likes = this.likes + 1;
  }
}