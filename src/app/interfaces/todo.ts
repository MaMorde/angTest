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
