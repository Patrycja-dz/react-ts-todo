import { TodosItemProps } from "./todo";

export type TodosContext = {
  todos: TodosItemProps[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string | number) => void;
  toggleCompleted: (id: string | number) => void;
};

export type TodosContextProviderType = {
  children: React.ReactNode;
};
