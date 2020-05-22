import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TodoListComponent } from "./todo-list/todo-list.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "todolist", component: TodoListComponent },
  { path: "main", component: MainComponent },
  { path: "", redirectTo: "/main", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
