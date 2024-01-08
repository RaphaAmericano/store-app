import { HTMLAttributes } from "react";

export interface DrawerProps extends HTMLAttributes<HTMLDivElement>{
    text: string;
    openSide: "top" | "right" | "left" | "bottom",
}