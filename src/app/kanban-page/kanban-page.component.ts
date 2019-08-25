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
  tareasFiltro = [];

  showForm = false;

  constructor(private tareaService: TareaService) {}

  ngOnInit() {
    // this.tareas = this.tareaService.getTareas();
    this.tareaService.getTareas().subscribe((data: any) => {
      this.tareas = data.tareas;
      this.tareasFiltro = data.tareas;
    });
  }

  changeToProgress(tarea) {
    // let tarea = this.tareas.find(tareaABuscar => tareaABuscar._id == _id);
    tarea.estado = "IN_PROGRESS";

    this.tareaService.update(tarea).subscribe((data: any) => {
      console.log("changeToProgress");
      this.tareas = data.tareas;
      this.tareasFiltro = data.tareas;
    });
  }

  changeToFinished({ _id }) {
    let tarea = this.tareas.find(tareaABuscar => tareaABuscar._id == _id);
    tarea.estado = "FINISHED";

    this.tareaService.update(tarea).subscribe((data: any) => {
      console.log("changeToProgress");
      this.tareas = data.tareas;
      this.tareasFiltro = data.tareas;
    });
  }

  guardarTarea(tarea) {
    if (!tarea._id) {
      // INSERTAR
      this.tareaService.insert(tarea).subscribe((data: any) => {
        console.log("Informacion insertada");
        this.tareas = data.tareas;
        this.tareasFiltro = data.tareas;
      });
    } else {
      this.tareaService.update(tarea).subscribe((data: any) => {
        console.log("Informacion modifcada");
        this.tareas = data.tareas;
        this.tareasFiltro = data.tareas;
      });
    }
  }

  asignarTarea(tarea) {
    this.tarea = tarea;
    this.showForm = true;
  }

  eliminarTarea(_id) {
    this.tareaService.delete(_id).subscribe((data: any) => {
      console.log("Informacion eliminada");
      this.tareas = data.tareas;
      this.tareasFiltro = data.tareas;
    });
  }

  filtrarFunction(query) {
    this.tareasFiltro = this.tareas.filter(tareaABuscar => {
      if (
        tareaABuscar.titulo.toUpperCase().indexOf(query.toUpperCase()) !== -1
      ) {
        return true;
      }

      return false;
    });
  }
}
