import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { trigger, transition, animate, style } from "@angular/animations";
import { TodosService } from "../services/todos.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
  animations: [
    trigger("fade", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(30px)" }),
        animate(300, style({ opacity: 1, transform: "translate(0px)" })),
      ]),
      transition(":leave", [
        animate(300, style({ opacity: 0, transform: "translate(30px)" })),
      ]),
    ]),
  ],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  todoPrice: number;
  idForTodo: string;
  beforeEditCacheTitle: string;
  beforeEditCachePrice: number;

  constructor(private todosSetvice: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosSetvice.initTodos();
    this.beforeEditCacheTitle = "";
    this.beforeEditCachePrice = null;
    this.todoTitle = "";
    this.todoPrice;
  }
  addTodo(): void {
    if (
      this.todoTitle == null ||
      this.todoTitle.trim() == "" ||
      this.todoPrice == null
    )
      return;
    // this.todos.push();
    // const todo = new Todo(this.todoTitle, this.todoPrice);

    this.todosSetvice.addLocalTodo({
      id: "_" + Math.random().toString(36).substr(2, 9),
      title: this.todoTitle,
      price: this.todoPrice,
      completed: false,
      editing: {
        editingTitle: false,
        editingPrice: false,
      },
    });

    this.todoTitle = "";
    this.todoPrice = null;
  }
  deleteT(id: string): void {
    this.todosSetvice.removeTodo(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  editTodoTitle(todo: Todo): void {
    this.beforeEditCacheTitle = todo.title;
    todo.editing.editingTitle = true;
  }
  doneEditTitle(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCacheTitle;
    }
    todo.editing.editingTitle = false;
  }
  cancelEditTitle(todo: Todo): void {
    todo.title = this.beforeEditCacheTitle;

    todo.editing.editingTitle = false;
  }
  editTodoPrice(todo: Todo): void {
    this.beforeEditCachePrice = todo.price;
    todo.editing.editingPrice = true;
  }
  doneEditPrice(todo: Todo): void {
    if (todo.price === null) {
      todo.price = this.beforeEditCachePrice;
    }
    todo.editing.editingPrice = false;
  }
  cancelEditPrice(todo: Todo): void {
    todo.price = this.beforeEditCachePrice;

    todo.editing.editingPrice = false;
  }

  sum() {
    let total = this.todos
      .filter(({ completed }) => !completed)
      .reduce(function (totalValue, currentValue) {
        return Number(currentValue.price) + Number(totalValue);
      }, 0);
    return total;
  }
}
