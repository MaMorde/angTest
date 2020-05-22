import { Component, OnInit } from "@angular/core";
import { User } from "../interfaces/user";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  hide = true;
  users: User[];
  username: string;
  password: string;

  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.AuthService.initUsers();
    this.username = "";
    this.password = "";
  }
  signUpUser(): void {
    if (
      this.username == null ||
      this.username.trim() == "" ||
      this.password == null ||
      this.password.trim() == "" ||
      this.username.length < 3 ||
      this.password.length < 5
    )
      return;

    let newUser = {
      id: "1" + Math.random().toString(36).substr(2, 9),
      username: this.username,
      password: this.password,
    };

    var chekUserName = false;
    if (localStorage.users) {
      for (let i = 0; i < eval(localStorage.users).length; i++) {
        if (eval(localStorage.users)[i].username != this.username) {
          chekUserName = false;
        } else {
          chekUserName = true;
        }
      }
    } else {
      chekUserName = false;
    }

    if (chekUserName == true) {
      alert("Такое имя уже использовано, введите другое!");
      return;
    } else {
      this.AuthService.signUpLocalUser(newUser);
      this.username = this.password = "";
      this.users = this.AuthService.initUsers();
      this.router.navigate(["todolist"]);
    }
  }
}
