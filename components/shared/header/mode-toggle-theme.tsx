"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { TbSunMoon } from "react-icons/tb";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

const ModeToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="cursor-pointer outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-none">
            {theme === "system" ? <TbSunMoon /> : theme === "light" ? <LuSun /> : <FaRegMoon />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ModeToggleTheme;
