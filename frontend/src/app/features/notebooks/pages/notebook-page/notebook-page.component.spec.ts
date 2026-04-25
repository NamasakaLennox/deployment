import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NotebookPageComponent } from './notebook-page.component';
import { NotebookService } from '../../../../core/services/notebook.service';

describe('NotebookPageComponent', () => {
  let component: NotebookPageComponent;
  let fixture: ComponentFixture<NotebookPageComponent>;

  const notebookServiceMock: Pick<NotebookService, 'getAll' | 'create' | 'delete'> = {
    getAll: jasmine.createSpy().and.returnValue(of([])),
    create: jasmine.createSpy().and.returnValue(of({ id: 1, title: 't', author: '', year: '', description: '' })),
    delete: jasmine.createSpy().and.returnValue(of({ message: 'Deleted' })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotebookPageComponent],
      providers: [{ provide: NotebookService, useValue: notebookServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NotebookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
