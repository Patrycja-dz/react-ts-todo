import { useState } from "react";
import Todos from "./components/Todos/Todos";
import Todo from "./components/Todos/Todo";
import NewTodo from "./components/Todos/NewTodo";
import { TodosItemProps } from "./models/todo";
function App() {
  const [todos, setTodos] = useState<TodosItemProps[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = {
      id: Math.random().toString(),
      title: todoText,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} todosItemFn={(todo) => todo.id}>
        {(todo) => <Todo todo={todo} />}
      </Todos>
    </>
  );
}

export default App;
