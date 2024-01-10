import { HTMLAttributes } from "react";

export interface FormMessageProps extends HTMLAttributes<HTMLElement> {
    text: string;
    type: 'success' | 'danger' | 'alert'
}