import { HTMLAttributes } from "react"
export type HeadingTag = "h1" | "h2" | "h3" | "h4"| "h5" | "h6"
export interface HeadingStyleProps extends HTMLAttributes<HTMLHeadingElement> {
    
}
export default interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    tag: HeadingTag;
}