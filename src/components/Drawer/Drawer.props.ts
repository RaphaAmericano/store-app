import { HTMLAttributes } from "react";

export interface DrawerProps extends HTMLAttributes<HTMLDivElement>{
    openSide: "top" | "right" | "left" | "bottom",
}