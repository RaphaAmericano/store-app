"use client"
import {
    MenubarItem,
    MenubarSeparator,
    MenubarShortcut,    
} from "@/components/ui/menubar";
import { BarMenuItemProps } from "./BarMenu.props";
import { Fragment } from "react";

export function formatMenuItem(item: BarMenuItemProps) {
  const { text, shortcutText, separatorAfter, onClickFn } = item;
  return (
    <Fragment key={text}>
      <MenubarItem onClick={onClickFn}>
        {text}{" "}
        {shortcutText && <MenubarShortcut>{shortcutText}</MenubarShortcut>}
      </MenubarItem>
      {separatorAfter && <MenubarSeparator />}
    </Fragment>
  );
}
