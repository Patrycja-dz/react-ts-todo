import { FC } from "react";
import { TodosProps } from "../../models/todo";

const Todos: FC<TodosProps> = ({ todos, todosItemFn, children }) => {
  const completedTodoList = todos.filter((todo) => {
    return todo.completed;
  });

  const incompletedTodoList = todos.filter((todo) => {
    return !todo.completed;
  });

  const allTodos = [...incompletedTodoList, ...completedTodoList];

  return (
    <ul>
      {allTodos.map((item) => (
        <li key={todosItemFn(item)}>{children(item)}</li>
      ))}
    </ul>
  );
};

export default Todos;
