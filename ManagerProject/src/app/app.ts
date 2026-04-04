import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false // O true si usas Standalone
})
export class App implements OnInit {
  proyectos: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.cargarProyectos();
  }

  cargarProyectos() {
    this.projectService.getProjects().subscribe(data => {
      this.proyectos = data;
    });
  }

  // MÉTODO PARA EL CRUD (CREATE)
  enviarDatos(nombre: string, presupuesto: string) {
    const nuevo = {
      name: nombre,
      budget: parseFloat(presupuesto),
      description: "Creado desde la interfaz de Angular"
    };

    this.projectService.createProject(nuevo).subscribe(res => {
      console.log("✅ Proyecto guardado:", res);
      this.cargarProyectos(); // Refrescamos la lista automáticamente
    });
  }
}