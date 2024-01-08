
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DrawerProps } from "./Drawer.props"

const Drawer = (props: DrawerProps) => {
  const { text, children, openSide  } = props
  return (
    <Sheet >
      <SheetTrigger className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground cursor-pointer" >
        {text}
      </SheetTrigger>
      <SheetContent side={openSide}>
        {children}
      </SheetContent>
    </Sheet>
  )
}
export default Drawer;