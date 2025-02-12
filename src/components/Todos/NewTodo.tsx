import { useRef, FC, useContext } from "react";
import { TodoContext } from "../../store/todos-context";
const NewTodo: FC = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    addTodo(enteredText);
    todoRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoText">Todo text</label>
      <input type="text" name="todoText" id="todoText" ref={todoRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
