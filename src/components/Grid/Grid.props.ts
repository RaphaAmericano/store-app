import { HTMLAttributes } from "react"

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    gap: Number;
    cols: Number;
}