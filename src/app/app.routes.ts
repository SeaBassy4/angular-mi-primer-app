import { Routes } from '@angular/router';

// We updated the class names here to match what is inside your files
import { Red } from './red/red';
import { Green } from './green/green';
import { Blue } from './blue/blue';
import { Black } from './black/black';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/red', pathMatch: 'full' }, 
  // And we updated the component references here
  { path: 'red', component: Red },
  { path: 'green', component: Green },
  { path: 'blue', component: Blue },
  { path: 'black', component: Black },

  { path: '**', component: NotFound }
];