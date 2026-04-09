import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // <-- Added RouterLink here
import { SaludoComponent } from './saludo/saludo'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // <-- Added RouterLink to the imports array below
  imports: [RouterOutlet, RouterLink, SaludoComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'mi-primer-app';
}