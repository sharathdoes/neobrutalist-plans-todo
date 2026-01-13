import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getTodosFromStorage, saveTodos } from "@/lib/localstorage";
import { act } from "react";

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: "Active" | "Completed";
  duration: number;
}

export interface TodoList {
  Todolist: Todo[];
}

const initialState : TodoList = {
  Todolist: [],
};
const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        duration: number;
      }>
    ) => {
      const newTodo : Todo ={
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        duration: action.payload.duration,
        status: "Active",
      }
      state.Todolist.push(newTodo)
      saveTodos(state.Todolist);
    },

    editTodo : (state, action : PayloadAction<{id:string, title:string, description:string, duration:number, status:'Active'|'Completed'}>) => {
        let todo=state.Todolist.find((p)=> p.id===action.payload.id)
        if(todo){
            todo.title=action.payload.title
            todo.description=action.payload.description
            todo.duration=action.payload.duration
            todo.status=action.payload.status
        } 
        saveTodos(state.Todolist);
    }
,
    getTodos: (state, action : PayloadAction<{status:'All'|'Active'|'Completed' }>) => {
        const todos = getTodosFromStorage();
        
        if (action.payload.status === "All") {
            state.Todolist = todos;
          } else {
            state.Todolist = todos.filter(
              (t) => t.status === action.payload.status
            );
          }
        
        },
    deleteTodo : (state, action : PayloadAction<{id:string}>)=>{
        state.Todolist=state.Todolist.filter((t)=>t.id!==action.payload.id)
        saveTodos(state.Todolist);
    }
  },
});

export const {addTodo, getTodos, deleteTodo, editTodo}=todo.actions
export default todo.reducer;
