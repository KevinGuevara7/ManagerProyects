import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // La dirección donde el "Chef" (Python) está escuchando
  private apiUrl = 'http://127.0.0.1:8000/projects';

  constructor(private http: HttpClient) { }

  // CREATE: Guardar un nuevo proyecto
  createProject(project: any): Observable<any> {
    return this.http.post(this.apiUrl, project);
  }

  // READ: Obtener todos los proyectos
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}