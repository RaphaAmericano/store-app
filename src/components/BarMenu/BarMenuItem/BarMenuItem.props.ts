export interface BarMenuItemProps {
    text: string;
    shortcutText?: string;
    separatorAfter: boolean
    onClickFn?: () => void,
    isAnchor?:boolean;
    href?:string
}