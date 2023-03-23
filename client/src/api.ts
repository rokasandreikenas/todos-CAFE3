import { Todo } from "./types";
import axios from "axios";

export const fetchTodos = (): Promise<Todo[]> => {
  return axios("http://localhost:8080/").then((response) => response.data);
};
