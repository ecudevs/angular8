import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tarea-card",
  templateUrl: "./tarea-card.component.html",
  styleUrls: ["./tarea-card.component.scss"]
})
export class TareaCardComponent implements OnInit {
  @Input() tarea = {};
  @Output() setInProgress = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  cambiarAProgress() {
    this.setInProgress.next(this.tarea);
  }
}
