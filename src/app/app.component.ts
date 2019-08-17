import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  aux = "Cristhian";
  holaMundo = `Hola mundo desde Angular8! ${this.aux}
  adsadas
  asdsadasda
  `;
}
