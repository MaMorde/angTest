import { Injectable } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  constructor() {}

  public todos: Todo[] = [];

  public initTodos(): Todo[] {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    return this.todos;
  }
  public addLocalTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  public removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
