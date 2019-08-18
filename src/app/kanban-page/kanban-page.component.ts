import { Component, OnInit } from "@angular/core";
import { TareaService } from "../services/tarea.service";

@Component({
  selector: "app-kanban-page",
  templateUrl: "./kanban-page.component.html",
  styleUrls: ["./kanban-page.component.scss"]
})
export class KanbanPageComponent implements OnInit {
  tarea = {};
  tareas = [];

  showForm = false;

  constructor(private tareaService: TareaService) {}

  ngOnInit() {
    this.tareas = this.tareaService.getTareas();
  }

  changeToProgress(tarea) {
    let index = this.tareas.findIndex(
      tareaABuscar => tareaABuscar.titulo === tarea.titulo
    );

    if (index !== -1) {
      this.tareas[index].estado = "IN_PROGRESS";
    }
  }

  changeToFinished(tarea) {
    let index = this.tareas.findIndex(
      tareaABuscar => tareaABuscar.titulo === tarea.titulo
    );

    if (index !== -1) {
      this.tareas[index].estado = "FINISHED";
    }
  }

  guardarTarea(tarea) {
    if (!tarea._id) {
      this.tareas.push({ ...tarea, _id: this.tareas.length + 1 });
    } else {
      let index = this.tareas.findIndex(
        tareaABuscar => tareaABuscar._id === tarea._id
      );

      if (index !== -1) {
        this.tareas[index] = { ...tarea };
      }
    }
  }

  asignarTarea(tarea) {
    this.tarea = tarea;
    this.showForm = true;
  }

  eliminarTarea(_id) {
    let index = this.tareas.findIndex(tareaABuscar => tareaABuscar._id === _id);

    if (index !== -1) {
      this.tareas.splice(index, 1);
    }
  }
}
