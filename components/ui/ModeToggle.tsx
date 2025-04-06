"use client"

import * as React from "react"
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"} size="icon">
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">تغییر قالب سایت</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[500]" align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          روشن
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          تیره
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          مطابق سیستم
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
