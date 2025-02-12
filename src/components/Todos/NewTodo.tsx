import { useRef, FC } from "react";
const NewTodo: FC<{ onAddTodo: (text: string) => void }> = ({ onAddTodo }) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    onAddTodo(enteredText);
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
