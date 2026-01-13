import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getTodosFromStorage, saveTodos } from "@/lib/localstorage";

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
  Todolist: [
    {  id: Date.now().toString(),
        title: "Hey there! New here? I'm Todo",
        description: "Whats your type in Women? 😌",
        status: "Active",
        duration: 0
    }
  ],
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
    getTodos: (state) => {
        const todos = getTodosFromStorage();

        if (todos.length === 0) {
          saveTodos(state.Todolist); 
        } else {
          state.Todolist = todos;
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
