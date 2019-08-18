import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { KanbanPageComponent } from "./kanban-page/kanban-page.component";
import { TareaCardComponent } from "./tarea-card/tarea-card.component";
import { EstadoPipe } from "./pipes/estado.pipe";
import { TareaFormComponent } from "./tarea-form/tarea-form.component";
import { TareaDetallePageComponent } from './tarea-detalle-page/tarea-detalle-page.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanPageComponent,
    TareaCardComponent,
    EstadoPipe,
    TareaFormComponent,
    TareaDetallePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
