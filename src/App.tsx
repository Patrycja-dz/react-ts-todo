import Todos from "./components/Todos/Todos";
import Todo from "./components/Todos/Todo";
import NewTodo from "./components/Todos/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos todosItemFn={(todo) => todo.id}>
        {(todo) => <Todo todo={todo} />}
      </Todos>
    </TodosContextProvider>
  );
}

export default App;
