"use client"

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Moon, Search, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function navbar() {
  const [theme, setTheme] = useState(false);
  return (
    <nav className="flex justify-between px-10">
      <div className="flex">
        <Link
          href="/saerch?q="
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "rounded-tl-full rounded-bl-full px-2"
          )}
        >
          <Search />
        </Link>
        <Input
          type="text"
          placeholder="Search"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "py-1 px-4 rounded-tl-none rounded-bl-none focus-visible:ring-0ss focus-visible:ring-offset-0"
          )}
        />
      </div>
      <div className="flex items-center gap-8 select-none">
        <Link
          href="/sign-in"
          className={buttonVariants({ variant: "default" })}
        >
          Sign In
        </Link>
        <div
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "p-2 rounded-full cursor-pointer"
          )}
        >
          <div onClick={() => setTheme(!theme)}>
            {theme ? <Moon /> : <Sun />}
          </div>
        </div>
      </div>
    </nav>
  );
}
