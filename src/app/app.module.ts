import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatTableModule } from "@angular/material/table";

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
