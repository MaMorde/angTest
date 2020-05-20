import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { trigger, transition, animate, style } from "@angular/animations";
import { TodosService } from "../services/todos.service";
import { Subscription, Subject } from "rxjs";

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
  displayedColumns: string[] = ["Название", "Цена", "Куплено", "Удалить"];
  sub: Subscription;
  stream$: Subject<Todo[]> = new Subject<Todo[]>();
  todos: Todo[];
  todoTitle: string;
  todoPrice: number;
  idForTodo: string;
  beforeEditCacheTitle: string;
  beforeEditCachePrice: number;

  constructor(private todosService: TodosService) {
    this.sub = this.stream$.subscribe((value) => {
      console.log(value);
    });
  }
  next() {
    this.stream$.next(this.todos);
  }
  ngOnInit(): void {
    this.todos = this.todosService.initTodos();
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

    let newTodo = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      title: this.todoTitle,
      price: this.todoPrice,
      completed: false,
      editing: {
        editingTitle: false,
        editingPrice: false,
      },
    };
    this.todosService.addLocalTodo(newTodo);

    this.todoTitle = "";
    this.todoPrice = null;

    this.next();
  }

  deleteT(todo: Todo): void {
    this.todosService.removeTodo(todo.id);
    this.todos = this.todosService.initTodos();
    this.next();
  }

  completedTodos(todo: Todo): void {
    this.todosService.completedLocalTodo(todo);
    this.todos = this.todosService.initTodos();
    this.next();
  }

  editTodoTitle(todo: Todo): void {
    this.beforeEditCacheTitle = todo.title;
    this.todosService.editTodoTitleLocal(todo);
  }

  doneEditTitle(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCacheTitle;
    }
    this.todosService.doneEditTitleLocal(todo);
  }

  cancelEditTitle(todo: Todo): void {
    todo.title = this.beforeEditCacheTitle;
    this.todosService.doneEditTitleLocal(todo);
  }

  editTodoPrice(todo: Todo): void {
    this.beforeEditCachePrice = todo.price;
    this.todosService.editTodoPriceLocal(todo);
  }
  doneEditPrice(todo: Todo): void {
    if (todo.price === null) {
      todo.price = this.beforeEditCachePrice;
    }
    this.todosService.doneEditPriceLocal(todo);
  }

  cancelEditPrice(todo: Todo): void {
    todo.price = this.beforeEditCachePrice;
    this.todosService.cancelEditPriceLocal(todo);
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
