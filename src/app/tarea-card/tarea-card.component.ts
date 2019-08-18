import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tarea-card",
  templateUrl: "./tarea-card.component.html",
  styleUrls: ["./tarea-card.component.scss"]
})
export class TareaCardComponent implements OnInit {
  @Input() tarea: any = {};
  @Output() setInProgress = new EventEmitter<any>();
  @Output() setInFinshed = new EventEmitter<any>();
  @Output() modificarTarea = new EventEmitter<any>();
  @Output() eliminarTarea = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  cambiarAProgress() {
    this.setInProgress.next(this.tarea);
  }

  cambiarAFinalizado() {
    this.setInFinshed.next(this.tarea);
  }

  modificar() {
    this.modificarTarea.next(this.tarea);
  }

  eliminar() {
    this.eliminarTarea.next(this.tarea._id);
  }
}
