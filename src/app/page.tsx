import AdCarousel from "@/components/ui/AdCarousel";
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
import TiltedCard from "@/components/TiltedCard";
  



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
<div className="flex">
<Selector/>
<AdCarousel/>
</div>
<h2 className="text-2xl font-bold m-10">Featured Hotels</h2>
<div className="m-10 flex gap-8 flex-wrap justify-center">
<TiltedCard
  imageSrc="https://images.pexels.com/photos/34631242/pexels-photo-34631242.jpeg"
  altText="Pinecrest Inn - Cozy Retreat"
  captionText="Pinecrest Inn - Cozy Retreat"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="bg-accent rounded-3xl p-3 tilted-card-demo-text">
      Pinecrest Inn - Cozy Retreat
    </p>
  }
/>
<TiltedCard
  imageSrc="https://images.pexels.com/photos/19869225/pexels-photo-19869225.jpeg"
  altText="The Elite Hotel - Sweden"
  captionText="The Elite Hotel - Sweden"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="bg-accent rounded-3xl p-3 tilted-card-demo-text">
      The Elite Hotel - Sweden
    </p>
  }
/>
<TiltedCard
  imageSrc="https://images.pexels.com/photos/13722872/pexels-photo-13722872.jpeg"
  altText="Hotel Grandeur - Luxury Stay"
  captionText="Hotel Grandeur - Luxury Stay"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="bg-accent rounded-3xl p-3 tilted-card-demo-text">
      Hotel Grandeur - Luxury Stay
    </p>
  }
/>
<TiltedCard
  imageSrc="https://images.pexels.com/photos/14021931/pexels-photo-14021931.jpeg"
  altText="Radisson Blu - Modern Comfort"
  captionText="Radisson Blu - Modern Comfort"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="bg-accent rounded-3xl p-3 tilted-card-demo-text">
      Radisson Blu - Modern Comfort
    </p>
  }
/>
<TiltedCard
  imageSrc="https://images.pexels.com/photos/7942132/pexels-photo-7942132.jpeg"
  altText="The Meadowbrook - France"
  captionText="The Meadowbrook - France"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="bg-accent rounded-3xl p-3 tilted-card-demo-text">
      The Meadowbrook - France
    </p>
  }
/>
</div>
    </>
  );
}
