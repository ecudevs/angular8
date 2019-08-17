import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { KanbanPageComponent } from "./kanban-page/kanban-page.component";

const routes: Routes = [{ path: "", component: KanbanPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
