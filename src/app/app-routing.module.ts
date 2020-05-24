import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TodoListComponent } from "./todo-list/todo-list.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { AuthGuardLogin } from "./guards/login-in.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [] },
  {
    path: "signup",
    component: SignUpComponent,
    canActivate: [],
  },
  {
    path: "todolist",
    component: TodoListComponent,
    canActivate: [AuthGuardLogin],
  },
  { path: "main", component: MainComponent, canActivate: [] },
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full",
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
