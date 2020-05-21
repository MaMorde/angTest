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
  public completedLocalTodo(todo: Todo) {
    todo.completed = !todo.completed;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  public editTodoTitleLocal(todo: Todo) {
    todo.editing.editingTitle = true;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  public doneEditTitleLocal(todo: Todo) {
    todo.editing.editingTitle = false;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  public cancelEditTitleLocal(todo: Todo) {
    todo.editing.editingTitle = false;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  public editTodoPriceLocal(todo: Todo) {
    todo.editing.editingPrice = true;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  public doneEditPriceLocal(todo: Todo) {
    todo.editing.editingPrice = false;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  public cancelEditPriceLocal(todo: Todo) {
    todo.editing.editingPrice = false;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  public clearLocalTodoList(): void {
    this.todos = [];
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
