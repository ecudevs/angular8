import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-kanban-page",
  templateUrl: "./kanban-page.component.html",
  styleUrls: ["./kanban-page.component.scss"]
})
export class KanbanPageComponent implements OnInit {
  tareas = [
    {
      titulo: "Pase a produccion",
      descripcion: "Pasar proyecto CMS a produccion",
      feCreacion: new Date(),
      asignado: { nombre: "Cristhian Lopez" },
      estado: "TO_DO"
    },
    {
      titulo: "Pruebas unitarias",
      descripcion: "Realizar pruebas unitarias de los cambios en la pagina",
      feCreacion: new Date(),
      asignado: { nombre: "Juan Piguave" },
      estado: "TO_DO"
    },
    {
      titulo: "Pruebas unitarias 2",
      descripcion: "Realizar pruebas unitarias de los cambios en la pagina",
      feCreacion: new Date(),
      asignado: { nombre: "Juan Piguave" },
      estado: "IN_PROGRESS"
    },
    {
      titulo: "Pruebas unitarias 3",
      descripcion: "Realizar pruebas unitarias de los cambios en la pagina",
      feCreacion: new Date(),
      asignado: { nombre: "Juan Piguave" },
      estado: "FINISHED"
    }
  ];

  constructor() {}

  ngOnInit() {}

  changeToProgress(tarea) {
    let index = this.tareas.findIndex(
      tareaABuscar => tareaABuscar.titulo === tarea.titulo
    );

    if (index !== -1) {
      this.tareas[index].estado = "IN_PROGRESS";
    }
  }
}
