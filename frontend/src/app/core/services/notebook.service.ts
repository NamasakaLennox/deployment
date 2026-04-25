import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CreateNotebookPayload, Notebook } from '../models/notebook.model';

@Injectable({ providedIn: 'root' })
export class NotebookService {
  private readonly apiUrl = `${environment.apiBaseUrl}/notebooks`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(this.apiUrl);
  }

  create(payload: CreateNotebookPayload): Observable<Notebook> {
    return this.http.post<Notebook>(this.apiUrl, payload);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
