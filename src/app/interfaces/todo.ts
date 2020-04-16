export interface Todo {
  id: string;
  title: string;
  price: number;
  completed: boolean;
  editing: {
    editingTitle: boolean;
    editingPrice: boolean;
  };
}
// export class Todo {
//   id: string;
//   title: string;
//   price: number;
//   completed: boolean;
//   editing: {
//     editingTitle: boolean;
//     editingPrice: boolean;
//   };

//   constructor(title: string, price: number) {
//     this.id = "_" + Math.random().toString(36).substr(2, 9);
//     this.title = title;
//     this.price = price;
//     this.completed = false;
//     this.editing.editingPrice = false;
//     this.editing.editingTitle = false;
//   }
// }
