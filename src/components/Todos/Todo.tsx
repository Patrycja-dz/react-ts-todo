import { FC } from "react";
import { TodoProps } from "../../models/todo";
const Todo: FC<TodoProps> = ({ todo, handleDeleteTodo }) => {
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
        }}
      >
        <input type="checkbox" />
        <h2>{todo.title}</h2>
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      </div>
    </article>
  );
};

export default Todo;
