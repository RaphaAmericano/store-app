"use client"
import * as MenubarPrimitive from "@radix-ui/react-menubar"

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import clsx from "clsx"

const MainMenuWrapper = forwardRef<
  ElementRef<typeof MenubarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={clsx(
      "flex h-10 items-center rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
MainMenuWrapper.displayName = MenubarPrimitive.Root.displayName


export default MainMenuWrapper