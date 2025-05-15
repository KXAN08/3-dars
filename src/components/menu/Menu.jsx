import React from 'react';
import MenuGalaxy from './MenuGalaxy'

const Menu = () => {
  return (
    <div className="py-10 px-4" >
   <MenuGalaxy
        categories={["Galaxy S25 Ultra", "Galaxy Z Fold6", "Galaxy Tab S10 FE+", "Galaxy Watch Ultra"]}
        image="/img/menu01.avif"
        title="Galaxy S25 Ultra"
        description="Get up to $630 instant trade-in and double the storage on us."
        buttons={[
          { label: "Shop more phone deals", style: "outline" },
          { label: "Buy now", style: "fill" },
        ]}
          textColor="black"
      />
    <MenuGalaxy
  categories={["Neo QLED 8K", "Neo QLED 4K", "QLED", "Crystal UHD"]}
  image="/img/MENU2.avif"
  title="Ultra-slim and packed with a punch"
  description="The Neo QLED 8K delivers brilliant detail with Quantum Matrix Technology and AI-powered upscaling."
  buttons={[
    { label: "Explore now", style: "outline" },
    { label: "Buy now", style: "fill" },
  ]}
  textColor="white"
/>

<MenuGalaxy
  categories={["Bespoke Laundry", "Refrigerators", "Vacuum", "Dishwashers", "SmartThings"]}
  image="/img/menu3.png"
  title="New Bespoke AI Laundry Vented Combo™"
  description="Save $800 on Bespoke AI Laundry Combo. The AI you’ll actually use. The power you’ll actually see."
  buttons={[
    { label: "Learn more", style: "outline" },
    { label: "Shop now", style: "fill" },
  ]}
  textColor="white"
/>

<MenuGalaxy
  categories={["27'' Odyssey", "32'' 4K", "Gaming", "Pro Monitor", "5120x1440"]}
  image="/img/menu4.avif"
  title="Wrap yourself in spectacular detail"
  description="Immerse yourself in a panoramic experience with the Odyssey Neo curved displays."
  buttons={[
    { label: "See details", style: "outline" },
    { label: "Buy now", style: "fill" },
  ]}
  textColor="white"
/>

    </div>
  );
};

export default Menu;
