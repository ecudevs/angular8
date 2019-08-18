import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { KanbanPageComponent } from "./kanban-page/kanban-page.component";
import { TareaDetallePageComponent } from "./tarea-detalle-page/tarea-detalle-page.component";

const routes: Routes = [
  { path: "", component: KanbanPageComponent },
  { path: "tarea/:_id", component: TareaDetallePageComponent },
  { path: "tarea", component: TareaDetallePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
