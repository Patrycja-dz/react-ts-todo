const TODOS = [
  {
    id: "african-savanna",
    title: "Visit zoo",
    description: "Experience the beauty of nature.",
    completed: false,
  },
  {
    id: "amazon-river",
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
    completed: true,
  },
  {
    id: "caribbean-beach",
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
    completed: false,
  },
  {
    id: "desert-dunes",
    title: "Desert Dunes",
    description: "Discover the desert life.",
    completed: true,
  },
  {
    id: "forest-waterfall",
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
    completed: false,
  },
];
import Todos from "./components/Todos/Todos";
import Todo from "./components/Todos/Todo";
function App() {
  return (
    <>
      <Todos todos={TODOS} todosItemFn={(todo) => todo.id}>
        {(todo) => <Todo todo={todo} />}
      </Todos>
    </>
  );
}

export default App;
