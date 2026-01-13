import { ModeToggle } from "./togglet"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="w-full  py-4  ">
      <Button variant="neutral" className="container mx-auto border-2 rounded-xl  max-w-3xl flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl text-foreground">
            Neo Todo
          </h1>
        </div>
        <ModeToggle />
      </Button>
    </header>
  )
}
