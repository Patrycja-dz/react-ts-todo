import { createContext, FC, useState } from "react";
import { TodosContext, TodosContextProviderType } from "../models/todo-context";
import { TodosItemProps } from "../models/todo";

export const TodoContext = createContext<TodosContext>({
  todos: [],
  addTodo: () => {},
  deleteTodo: (id: string | number) => {},
  toggleCompleted: (id: string | number) => {},
});

const TodosContextProvider: FC<TodosContextProviderType> = ({ children }) => {
  const [todos, setTodos] = useState<TodosItemProps[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = {
      id: Math.random().toString(),
      title: todoText,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const deleteTodoHandler = (id: string | number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCompletedHandler = (id: string | number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const ctx = {
    todos: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
    toggleCompleted: toggleCompletedHandler,
  };
  return <TodoContext.Provider value={ctx}>{children}</TodoContext.Provider>;
};

export default TodosContextProvider;
