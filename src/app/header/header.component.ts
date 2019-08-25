import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  filtro = "dadsads";

  @Output() filtrar = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  _filtrar() {
    debugger;
    this.filtrar.next(this.filtro);
  }
}
