import { ReactNode } from "react";

export type TodosProps = {
  todos: TodosItemProps[];
  todosItemFn: (todo: TodosItemProps) => string | number;
  children: (todo: TodosItemProps) => ReactNode;
};

export type TodosItemProps = {
  id: number | string;
  title: string;
  completed: boolean;
  description: string;
};

export type TodoProps = {
  todo: TodosItemProps;
};
