
import { useState, useEffect } from "react";
import SavedLists from "./components/savedLists";
import AddTodo from "./components/Todo";
import Loader from "./components/loading";
import { GridBackground } from "@/components/grid";
import { AnimatedTestimonialsDemo } from "./components/testimonials";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, replace with real data fetching later if necessary
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* <Header/> */}
      <AddTodo />
      <SavedLists />
      <div className="w-full  items-center flex justify-center">
        <div className=" max-w-2xl items-center justify-center">       <AnimatedTestimonialsDemo/>
        </div>
      </div>
      

     
    </>
  );
}

export default App;

