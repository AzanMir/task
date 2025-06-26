import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../../ui/Navigation";
import { House, BookOpen, Logs, Users, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center ">
      <NavigationMenu className="p-3">
        <NavigationMenuList>
          <NavigationMenuItem className="flex justify-center items-center hover:bg-black hover:text-white rounded-[6px] p-2 py-0">
            <House className="w-4" />
            <NavigationMenuLink
              asChild
              className="hover:bg-black hover:text-white"
            >
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center hover:bg-black hover:text-white rounded-[6px] p-2 py-0">
            <BookOpen className="w-4" />
            <NavigationMenuLink
              asChild
              className="hover:bg-black hover:text-white"
            >
              <Link to="/form" className={navigationMenuTriggerStyle()}>
                Form
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center hover:bg-black hover:text-white rounded-[6px] p-2 py-0">
            <Logs className="w-4" />
            <NavigationMenuLink
              asChild
              className="hover:bg-black hover:text-white"
            >
              <Link className={navigationMenuTriggerStyle()}>Blogs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center hover:bg-black hover:text-white rounded-[6px] p-2 py-0">
            <Users className="w-4" />
            <NavigationMenuLink asChild>
              <Link className={navigationMenuTriggerStyle()}>About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center items-center hover:bg-black hover:text-white rounded-[6px] p-2 py-0">
            <Phone className="w-4" />
            <NavigationMenuLink asChild>
              <Link className={navigationMenuTriggerStyle()}>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
