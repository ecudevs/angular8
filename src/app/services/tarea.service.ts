import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TareaService {
  constructor() {}

  getTareas() {
    return [
      {
        _id: 1,
        titulo: "Pase a produccion",
        descripcion: "Pasar proyecto CMS a produccion",
        feCreacion: new Date(),
        asignado: { nombre: "Cristhian Lopez" },
        estado: "TO_DO"
      },
      {
        _id: 2,
        titulo: "Pruebas unitarias",
        descripcion: "Realizar pruebas unitarias de los cambios en la pagina",
        feCreacion: new Date(),
        asignado: { nombre: "Juan Piguave" },
        estado: "TO_DO"
      },
      {
        _id: 3,
        titulo: "Pruebas unitarias 2",
        descripcion: "Realizar pruebas unitarias de los cambios en la pagina",
        feCreacion: new Date(),
        asignado: { nombre: "Juan Piguave" },
        estado: "IN_PROGRESS"
      },
      {
        _id: 4,
        titulo: "Pruebas unitarias 3",
        descripcion: "Realizar pruebas unitarias de los cambios en la pagina",
        feCreacion: new Date(),
        asignado: { nombre: "Juan Piguave" },
        estado: "FINISHED"
      }
    ];
  }
}
