import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Paso 10

@Component({
  selector: 'app-saludo',
  standalone: true,      
  imports: [FormsModule], 
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class SaludoComponent {
  mensaje = "ANgular hello world";
  usuario = "Sebastian";
}