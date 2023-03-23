import { useEffect, useState } from "react";

import { Todo } from "./types";
import { fetchTodos } from "./api";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((response) => {
      setTodos(response);
    });
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default App;
