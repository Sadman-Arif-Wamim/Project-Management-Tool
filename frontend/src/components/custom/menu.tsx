import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export default function Menu() {
   return (
      <NavigationMenu>
         <NavigationMenuList>
            <NavigationMenuItem>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Link to={"/"}>Home</Link>
               </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Link to={"/dashboard"}>Dashboard</Link>
               </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
               </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
               </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Link to={"/login"}>Login</Link>
               </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Link to={"/signup"}>Sing up</Link>
               </NavigationMenuLink>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
   );
}
