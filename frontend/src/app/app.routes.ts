import { Routes } from '@angular/router';
import { NotebookPageComponent } from './features/notebooks/pages/notebook-page/notebook-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'notebooks', pathMatch: 'full' },
  { path: 'notebooks', component: NotebookPageComponent },
  { path: '**', redirectTo: 'notebooks' },
];
