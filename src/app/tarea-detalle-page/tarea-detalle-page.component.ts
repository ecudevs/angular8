import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TareaService } from "../services/tarea.service";

@Component({
  selector: "app-tarea-detalle-page",
  templateUrl: "./tarea-detalle-page.component.html",
  styleUrls: ["./tarea-detalle-page.component.scss"]
})
export class TareaDetallePageComponent implements OnInit {
  _id;

  tarea = {};

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService
  ) {
    this._id = this.route.snapshot.params._id;
    debugger;
  }

  ngOnInit() {
    let tareas = this.tareaService.getTareas();

    this.tarea = tareas.find(tareaABuscar => tareaABuscar._id == this._id);
  }
}
