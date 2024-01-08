
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
  const { children, openSide } = props
  return (
    <Sheet >
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side={openSide}>
        {children}
      </SheetContent>
    </Sheet>
  )
}
export default Drawer;