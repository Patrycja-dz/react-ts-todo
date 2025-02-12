import { FC } from "react";
import { TodoProps } from "../../models/todo";
const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <article className="place">
      <div>
        <input type="checkbox" />
        <h2>{todo.title}</h2>
      </div>
    </article>
  );
};

export default Todo;
