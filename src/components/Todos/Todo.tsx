import { FC, useContext } from "react";
import { TodoProps } from "../../models/todo";
import { TodoContext } from "../../store/todos-context";
const Todo: FC<TodoProps> = ({ todo }) => {
  const { toggleCompleted } = useContext(TodoContext);
  const isTodoCompleted = todo.completed;

  const toggleCompletedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    toggleCompleted(todo.id);
  };
  return (
    <article className="place">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "beige",
          borderRadius: "10px",
          justifyContent: "space-between",
          padding: "1rem",

          textDecoration: isTodoCompleted ? "line-through" : "none",
        }}
      >
        <input type="checkbox" onChange={toggleCompletedHandler} />
        <h2>{todo.title}</h2>
      </div>
    </article>
  );
};

export default Todo;
