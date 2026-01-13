import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import imageSrc from "@/assets/image.png";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { addTodo } from "@/store/todoSlice";

const AddTodo = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [days, setDays] = useState<number>(0);

  const dispatch=useDispatch<AppDispatch>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTodo({title, description, duration:days}))
    console.log(title, description, days);
  };
  return (
    <div className="w-full  flex  justify-center bg-muted/40 p-4">
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <Card className="flex flex-col items-center justify-center gap-4 py-8 border bg-white ">
          <img
            src={imageSrc}
            alt="Todo illustration"
            className="size-25 object-contain"
          />
          <h1 className="text-3xl font-semibold tracking-tight">Todo.</h1>
          <p className="text-sm text-muted-foreground">
            Add tasks, stay focused, ship things.
          </p>
        </Card>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              type="string"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex gap-3">
              <Input
                value={days}
                type="number"
                onChange={(e) => setDays(Number(e.target.value))}
                placeholder="Number of Days"
                className="flex-1"
              />
            </div>
            <Button type="submit" className="px-6 text-2xl">
              Let's do It
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
