export interface Notebook {
  id: number;
  title: string;
  author: string | null;
  year: string | null;
  description: string | null;
}

export interface CreateNotebookPayload {
  title: string;
  author: string;
  year: string;
  description: string;
}
