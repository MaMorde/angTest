import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public logged: string;
  private users: User[] = [];

  constructor() {}

  public initUsers(): User[] {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    return this.users;
  }

  signUpLocalUser(user: User) {
    this.users.push(user);
    this.logged = user.username;
    localStorage.setItem("users", JSON.stringify(this.users));
  }
  logOut() {
    this.logged = "";
  }
}
