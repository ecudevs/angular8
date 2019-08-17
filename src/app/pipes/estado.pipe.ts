import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "estado"
})
export class EstadoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let result = "";

    if (value === "TO_DO") {
      result = "Pendiente";
    } else if (value === "IN_PROGRESS") {
      result = "En progreso";
    } else if (value === "FINISHED") {
      result = "Terminado";
    }

    return result;
  }
}
