import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string;
  password: string;
  constructor(private router: Router, private AuthService: AuthService) {}

  ngOnInit(): void {
    this.username = "";
    this.password = "";
  }

  loginIn(): void {
    if (localStorage.users) {
      let userFound = false;
      for (let i = 0; i < eval(localStorage.users).length; i++) {
        if (
          eval(localStorage.users)[i].username == this.username &&
          eval(localStorage.users)[i].password == this.password
        ) {
          userFound = true;
          this.AuthService.logged = this.username;
          this.username = this.password = "";
          this.router.navigate(["todolist"]);
          break;
        }
      }
      if (userFound == false) {
        alert(
          "Логин и пароль не совпадают. Возможно аккаунт не зарегистрирован."
        );
      }
    }
  }
}
