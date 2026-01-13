import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function GridBackground({ children, className }: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full  dark:bg-black",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          // Lines are now a little less dark: #d4d4d8 for light mode, #71717a for dark mode
          "[background-image:linear-gradient(to_right,#d4d4d8_1.5px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1.5px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#71717a_1.5px,transparent_1px),linear-gradient(to_bottom,#71717a_1.5px,transparent_1px)]"
        )}
      />

      {/* fade mask */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
