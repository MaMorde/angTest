import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public logged: string;
  public isAuth: boolean = false;
  private users: User[] = [];

  constructor(private router: Router) {}

  public initUsers(): User[] {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    return this.users;
  }

  signUpLocalUser(user: User) {
    this.users.push(user);
    this.logged = user.username;
    this.isAuth = true;
    localStorage.setItem("users", JSON.stringify(this.users));
  }
  public logOut() {
    this.isAuth = false;
    this.logged = "";
    this.router.navigate(["/"]);
  }
  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 0);
    });
  }
}
