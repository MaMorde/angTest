import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output() checkedItemTitle = new EventEmitter();
  @Output() checkedItemPrice = new EventEmitter();

  @Output() doubleClickedItemTitle = new EventEmitter();
  @Output() doubleClickedItemPrice = new EventEmitter();

  @Output() cancelledItemTitle = new EventEmitter();
  @Output() cancelledItemPrice = new EventEmitter();

  @Output() deletedItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  doneEditTitle(todo: Todo): void {
    this.checkedItemTitle.emit(todo);
  }
  doneEditPrice(todo: Todo): void {
    this.checkedItemPrice.emit(todo);
  }

  editTodoTitle(todo: Todo): void {
    this.doubleClickedItemTitle.emit(todo);
  }
  editTodoPrice(todo: Todo): void {
    this.doubleClickedItemPrice.emit(todo);
  }

  cancelEditTitle(todo: Todo): void {
    this.cancelledItemTitle.emit(todo);
  }
  cancelEditPrice(todo: Todo): void {
    this.cancelledItemPrice.emit(todo);
  }

  deleteT(id): void {
    this.deletedItem.emit(id);
  }
}
