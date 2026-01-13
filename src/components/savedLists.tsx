import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { editTodo, getTodos } from "@/store/todoSlice";
import { Card } from "./ui/card";
import { Trash } from "lucide-react";
import { SquarePen } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from '@/components/ui/checkbox'

const SavedLists = () => {
  const [edit, setEdit] = useState<string>("-1");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState<number>(0);
  const [status, setStatus] = useState<'Active'|'Completed'>("Active");
  const dispatch = useDispatch<AppDispatch>();
  const header = ["All", "Active", "Completed"];
  const todos = useSelector((state: RootState) => state.Todo.Todolist);
const [headerNumber, setHeaderNumber]=useState<"Active"|"Completed"|"All">("All")
  useEffect(() => {
    dispatch(getTodos({status:headerNumber}));
  }, [dispatch, headerNumber]);
  const handleUpdate=(e:any)=>{
    e.preventDefault();
    dispatch(editTodo({id:edit, title, description, duration, status}));
    setEdit("-1");
  }
 
 
  return (
    <div className="w-full flex flex-col items-center gap-4 justify-center bg-muted/40 p-4">
      <div className="flex w-full max-w-2xl items-center justify-around gap-4">
        {header.map((h: any) => (
            <Button key={h.index} variant={h===headerNumber ? "default" : "neutral"} onClick={()=>{setHeaderNumber(h)}} className="w-full">{h}</Button>
        ))}
      </div>
      {todos.length === 0 ? (
        <p className="text-muted-foreground text-sm">No saved todos yet.</p>
      ) : (
        todos.map((todo: any) => (

     todo.id===edit ? (
          <Card
            key={todo.id}
            className="p-4 w-full max-w-2xl bg-white flex   flex-row "
          >
          
            <div className=" w-full  flex flex-row ">

                <div className="flex flex-col gap-2 w-[80%] ">
                <form onSubmit={handleUpdate}>
                <Input                      onChange={(e) => setTitle(e.target.value)}  className="mb-2" value={title} />
              <p className="text-md text-muted-foreground">
                <Textarea                      onChange={(e) => setDescription(e.target.value)} className="mb-2" value={description}/>
              </p>
              <span className="text-xs  flex gap-3 text-muted-foreground">
                <Input type="number" onChange={(e)=>setDuration(Number(e.target.value))}  value={duration}/>
                <div className=" gap-2 flex items-center justify-around ">
                    <Button variant="neutral">Cancel</Button>
              <Button type="submit" >Save</Button>
            </div>
              </span>
                </form>
                </div>
            
                <div className="flex w-[20%]">
                    <img  src="https://preview.redd.it/wu0kneu4mj381.png?width=777&format=png&auto=webp&s=a9b468622c19a2278ee22c1799ecaf6913c627f5" alt="icon" className="w-36 h-36 mt-6" />
                </div>
            </div>
             </Card>
            ) : (
                <Card
                key={todo.id}
                className="p-4 w-full max-w-2xl bg-white flex   flex-row "
              >
                               <div  className="w-[5%] justify-center flex items-center"> <Checkbox
  checked={todo.status === "Completed"}
  onCheckedChange={() => {
    dispatch(
      editTodo({
        id: todo.id,
        title: todo.title,
        description: todo.description,
        duration: todo.duration,
        status:
          todo.status === "Active"
            ? "Completed"
            : "Active",
      })
    );
  }}
/>
</div>

            <div className=" w-[80%] flex flex-col gap-2">
              <h1 className="font-semibold text-2xl">{todo.title}</h1>
              <p className="text-md text-muted-foreground">
                {todo.description}
              </p>
              <span className="text-xs text-muted-foreground">
                Duration: {todo.duration} days
              </span>
            </div>
            <div className="w-[15%] flex gap-2 items-center justify-around ">
              <Trash />
              <SquarePen onClick={() => {
                setEdit(todo.id);
                setTitle(todo.title);
                setDescription(todo.description);
                setDuration(todo.duration);
              }} />
            </div>
            
          </Card>
        )))
      )}
    </div>
  );
};

export default SavedLists;
