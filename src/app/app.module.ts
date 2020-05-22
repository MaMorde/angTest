import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
