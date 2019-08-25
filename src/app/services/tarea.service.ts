import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TareaService {
  constructor(private httpClient: HttpClient) {}

  getTareas() {
    return this.httpClient.get("/tareas");
  }

  getTareaById(_id) {
    return this.httpClient.get("/tareas/" + _id);
  }

  insert(tarea) {
    return this.httpClient.post("/tareas/", tarea);
  }

  update(tarea) {
    return this.httpClient.put("/tareas/", tarea);
  }

  delete(_id) {
    return this.httpClient.delete("/tareas/" + _id);
  }
}
