import type { Todo } from "@/store/todoSlice";

const TODO_KEY = "todos";

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
};

export const getTodosFromStorage = (): Todo[] => {
  const data = localStorage.getItem(TODO_KEY);
  return data ? JSON.parse(data) : [];
};

