import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../../ui/Navigation";

export default function Navbar() {
  return (
    <NavigationMenu className="p-3">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:bg-black hover:text-white"
          >
            <Link to="/" className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:bg-black hover:text-white"
          >
            <Link to="/form" className={navigationMenuTriggerStyle()}>
              Form
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:bg-black hover:text-white"
          >
            <Link className={navigationMenuTriggerStyle()}>Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:bg-black hover:text-white"
          >
            <Link className={navigationMenuTriggerStyle()}>About Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:bg-black hover:text-white"
          >
            <Link className={navigationMenuTriggerStyle()}>Contact Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
