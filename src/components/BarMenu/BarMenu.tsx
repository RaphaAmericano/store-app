import {
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { BarMenuProps } from "./BarMenu.props";



const BarMenu = (props: BarMenuProps) => {
  const { menuTitle, children } = props;
  return (
    <MenubarMenu>
      <MenubarTrigger className="cursor-pointer">{menuTitle}</MenubarTrigger>
      <MenubarContent>
        {children}
      </MenubarContent>
    </MenubarMenu>
  );
};

export default BarMenu;
