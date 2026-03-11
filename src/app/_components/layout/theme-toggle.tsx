"use client";

import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const setLightTheme = useCallback(() => setTheme("light"), [setTheme]);
  const setDarkTheme = useCallback(() => setTheme("dark"), [setTheme]);
  const setSystemTheme = useCallback(() => setTheme("system"), [setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button type="button" variant="outline" size="icon" disabled>
        Theme
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" size="icon" />}
        className={cn("relative")}
        aria-label="Toggle theme"
      >
        <HugeiconsIcon
          icon={Sun01Icon}
          strokeWidth={2}
          className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <HugeiconsIcon
          icon={Moon02Icon}
          strokeWidth={2}
          className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={setLightTheme}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={setDarkTheme}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={setSystemTheme}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
