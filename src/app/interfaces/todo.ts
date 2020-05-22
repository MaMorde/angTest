export interface Todo {
  id: string;
  title: string;
  price: number;
  completed: boolean;
  user: string;
  editing: {
    editingTitle: boolean;
    editingPrice: boolean;
  };
}
