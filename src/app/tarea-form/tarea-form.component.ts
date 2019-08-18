import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tarea-form",
  templateUrl: "./tarea-form.component.html",
  styleUrls: ["./tarea-form.component.scss"]
})
export class TareaFormComponent implements OnInit {
  @Input() tarea: any = {};

  @Output() guardarTarea = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  guardar(f: NgForm) {
    // this.tarea.estado = "TO_DO";
    this.tarea.feCreacion = new Date();
    this.tarea.asignado = {};
    ///
    this.guardarTarea.next({ ...this.tarea, estado: "TO_DO" });
    // this.tarea = {};
    f.resetForm();
  }

  cancel() {
    this.cancelar.next();
  }
}
