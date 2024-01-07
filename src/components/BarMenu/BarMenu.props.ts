import { HTMLAttributes } from "react";

export interface BarMenuItemProps {
    text: string;
    shortcutText?: string;
    separatorAfter: boolean
    onClickFn?: () => void
}

export interface BarMenuProps extends HTMLAttributes<HTMLDivElement> {
    menuTitle: string; 
}