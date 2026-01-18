import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Selector from "@/components/ui/Selector";

export default async function Home() {
  return (
    <>
      <div className="m-10 p-2 bg-accent rounded-xl">
    <div className="relative flex items-center">
    <div className="absolute left-4 flex items-center">
      <img src="logo.png" alt="Logo" className="h-8 w-auto"/>
    </div>
    <div className="flex w-full justify-end pr-2">
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Hotels</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>My Bookings</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
</div>
<Selector/>
    </>
  );
}
