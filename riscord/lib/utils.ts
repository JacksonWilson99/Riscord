import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//this cn function is gonna be very useful for bothe shadcn components and also inside of our pages and custom components
//so this CN util is a very nice util which is gonna help us create dynamic classes inside tailwind.
//Why do we need a util for that and both cslx and tailwind merge?
//because there are cases that we could create conflicted classes and instead of creating our own complicated util to decide which one should be prioritised, we have this nice util which is gonna help us
//Usage:
//In the page.tsx
/* 
depending on state->
    const state = true;
     <button className = {cn(
        "bg-indigo-500",
        state && "bg-red-500"
      )}
*/
