"use client"
import {
    MenubarItem,
    MenubarSeparator,
    MenubarShortcut,    
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { Fragment } from "react";
import { BarMenuItemProps } from "./BarMenuItem.props";


const BarMenuItem = (item:BarMenuItemProps) => {
    const { text, shortcutText, separatorAfter, onClickFn, href, isAnchor = false } = item;   
    const comp = (isAnchor && href) ? 
          (
            <Link href={href}>
              {text}{" "}{shortcutText && <MenubarShortcut>{shortcutText}</MenubarShortcut>}
            </Link>
          ) 
          : 
          (
              <Button variant="ghost" onClick={onClickFn}>
                {text}{" "}{shortcutText && <MenubarShortcut>{shortcutText}</MenubarShortcut>}
              </Button>
          ) 
           
    return (
      <Fragment key={text}>
          <MenubarItem>
            {comp}
          </MenubarItem>
          {separatorAfter && <MenubarSeparator />}
      </Fragment>
    );
}

export default BarMenuItem