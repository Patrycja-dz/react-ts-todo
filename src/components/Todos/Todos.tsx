import { FC, useContext } from "react";
import { TodosProps } from "../../models/todo";
import { TodoContext } from "../../store/todos-context";

const Todos: FC<Omit<TodosProps, "todos">> = ({ todosItemFn, children }) => {
  const { deleteTodo, todos } = useContext(TodoContext);

  const completedTodoList = todos.filter((todo) => {
    return todo.completed;
  });

  const incompletedTodoList = todos.filter((todo) => {
    return !todo.completed;
  });

  const allTodos = [...incompletedTodoList, ...completedTodoList];
  console.log(allTodos, todos);
  return (
    <ul>
      {allTodos.map((item) => (
        <li
          key={todosItemFn(item)}
          style={{ listStyleType: "none" }}
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName !== "INPUT") {
              deleteTodo(todosItemFn(item));
            }
          }}
        >
          {children(item)}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
