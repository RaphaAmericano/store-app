import {
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { BarMenuProps } from "./BarMenu.props";



const Menu = (props: BarMenuProps) => {
  const { menuTitle, children } = props;
  return (
    <MenubarMenu>
      <MenubarTrigger>{menuTitle}</MenubarTrigger>
      <MenubarContent>
        {children}
      </MenubarContent>
    </MenubarMenu>
  );
};

export default Menu;
