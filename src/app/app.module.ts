import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { KanbanPageComponent } from "./kanban-page/kanban-page.component";
import { TareaCardComponent } from "./tarea-card/tarea-card.component";
import { EstadoPipe } from "./pipes/estado.pipe";

@NgModule({
  declarations: [
    AppComponent,
    KanbanPageComponent,
    TareaCardComponent,
    EstadoPipe
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
