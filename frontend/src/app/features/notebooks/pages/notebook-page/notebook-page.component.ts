import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { CreateNotebookPayload, Notebook } from '../../../../core/models/notebook.model';
import { NotebookService } from '../../../../core/services/notebook.service';

@Component({
  selector: 'app-notebook-page',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './notebook-page.component.html',
  styleUrl: './notebook-page.component.css',
})
export class NotebookPageComponent implements OnInit {
  private readonly notebookService = inject(NotebookService);

  notebooks: Notebook[] = [];
  form: CreateNotebookPayload = {
    title: '',
    author: '',
    year: '',
    description: '',
  };
  isLoading = false;

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.notebookService.getAll().subscribe({
      next: (data) => {
        this.notebooks = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  submit(): void {
    if (!this.form.title.trim()) {
      return;
    }

    this.notebookService.create(this.form).subscribe(() => {
      this.form = {
        title: '',
        author: '',
        year: '',
        description: '',
      };
      this.load();
    });
  }

  delete(id: number): void {
    this.notebookService.delete(id).subscribe(() => this.load());
  }
}
