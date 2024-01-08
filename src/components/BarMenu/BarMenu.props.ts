import { HTMLAttributes } from "react";

export interface BarMenuItemProps {
    text: string;
    shortcutText?: string;
    separatorAfter: boolean
    onClickFn?: () => void,
    isAnchor?:boolean;
    href?:string
}

export interface BarMenuProps extends HTMLAttributes<HTMLDivElement> {
    menuTitle: string; 
}