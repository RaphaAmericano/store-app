import { HTMLAttributes, ReactNode } from "react";

export interface AlertBarProps extends  HTMLAttributes<HTMLDivElement> {
    title: string;
    icon?: any;
    children: ReactNode;
}