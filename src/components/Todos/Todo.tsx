import { FC } from "react";
import { TodoProps } from "../../../types";
const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <article className="place">
      <div>
        <input type="checkbox" />
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
    </article>
  );
};

export default Todo;
