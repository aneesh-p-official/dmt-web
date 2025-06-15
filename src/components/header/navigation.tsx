"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

const cards = [
  { title: "Higher National Diploma", image: "/menu-1.webp" },
  { title: "Foundation", image: "/menu-2.webp" },
  { title: "Teacher Education", image: "/menu-3.webp" },
  { title: "CMI Level 5 in Management and Leadership", image: "/menu-4.webp" },
  { title: "Certification Programs", image: "/menu-5.webp" },
  { title: "Continuing Professional Development (CPD)", image: "/menu-6.webp" },
];

export default function Navigation() {
  return (
    <NavigationMenu
      viewport={false}
      className="pt-11 xl:pt-0 dm-nav justify-start items-start overflow-y-auto"
    >
      <NavigationMenuList className="flex-col xl:flex-row justify-start items-start gap-5 xl:gap-0">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-lg md:text-base font-medium hover:!text-accent hover:bg-transparent focus:!text-accent focus:bg-transparent px-5 py-1"
          >
            <Link href="/">About Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg md:text-base font-medium focus:!text-accent hover:!text-accent bg-transparent hover:bg-transparent focus:!bg-transparent data-[state=open]:text-accent data-[state=open]:hover:!bg-transparent data-[state=open]:!bg-transparent px-5 py-1">
            Programs
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className={`!static xl:!fixed !left-0 bottom-0 !top-auto -z-1 !w-screen bg-[#051f33] !bg-gradient-to-b from-[#0C2D46] via-[#0C2D46] via-[60%] to-[#0C2D46]/80 h-[calc(100%-125px)] !border-0 !rounded-none !pointer-events-auto !px-0 md:!px-4`}
          >
            <div className="container !px-0 md:px-4">
              <div className="flex overflow-x-auto md:overflow-hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 md:gap-6 xl:pt-[75px]">
                {cards.map((card, index) => (
                  <Link
                    href="/"
                    key={index}
                    className="no-underline cursor-pointer min-w-[210px] lg:min-w-0 mx-3 lg:mx-0"
                  >
                    <Card
                      key={index}
                      className="relative overflow-hidden h-56 rounded-[10px] shadow-lg border-0 group "
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                        style={{ backgroundImage: `url(${card.image})` }}
                      />
                      <CardContent className="relative flex flex-col px-4 pr-0 pointer-events-none">
                        <h2 className="text-lg font-medium mb-2">
                          {card.title}
                        </h2>
                      </CardContent>
                      <Button className="absolute right-0 bottom-[10px] bg-[#ECA22D] text-black hover:bg-[#0C2D46] hover:text-white transition-colors duration-300 w-fit rounded-s-3xl rounded-e-none h-[28px] cursor-pointer">
                        <ChevronRightIcon />
                      </Button>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-lg md:text-base font-medium focus:!text-accent focus:bg-transparent hover:!text-accent hover:bg-transparent px-5 py-1"
          >
            <Link href="/">Our Partners</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg md:text-base font-medium focus:!text-accent data-[state=open]:text-accent hover:!text-accent bg-transparent hover:bg-transparent focus:!bg-transparent data-[state=open]:hover:!bg-transparent data-[state=open]:!bg-transparent px-5 py-1">
            DeMont Plus
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className={`!static xl:!fixed !left-0 bottom-0 !top-auto -z-1 !w-screen bg-[#051f33] !bg-gradient-to-b from-[#0C2D46] via-[#0C2D46] via-[60%] to-[#0C2D46]/80 h-[calc(100%-125px)] !border-0 !rounded-none !pointer-events-auto !px-0 md:!px-4`}
          >
            <div className="container !px-0 md:px-4">
              <div className="flex overflow-x-auto md:overflow-hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 md:gap-6 xl:pt-[75px]">
                {cards.map((card, index) => (
                  <Link
                    href="/"
                    key={index}
                    className="no-underline cursor-pointer min-w-[210px] lg:min-w-0 mx-3 lg:mx-0"
                  >
                    <Card
                      key={index}
                      className="relative overflow-hidden h-56 rounded-[10px] shadow-lg border-0 group "
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                        style={{ backgroundImage: `url(${card.image})` }}
                      />
                      <CardContent className="relative flex flex-col px-4 pr-0 pointer-events-none">
                        <h2 className="text-lg font-medium mb-2">
                          {card.title}
                        </h2>
                      </CardContent>
                      <Button className="absolute right-0 bottom-[10px] bg-[#ECA22D] text-black hover:bg-[#0C2D46] hover:text-white transition-colors duration-300 w-fit rounded-s-3xl rounded-e-none h-[28px] cursor-pointer">
                        <ChevronRightIcon />
                      </Button>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-lg md:text-base font-medium focus:!text-accent focus:bg-transparent hover:!text-accent hover:bg-transparent px-5 py-1"
          >
            <Link href="/">Business Challenge</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-lg md:text-base font-medium focus:!text-accent focus:bg-transparent hover:!text-accent hover:bg-transparent px-5 py-1"
          >
            <Link href="/">Life at DeMont</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
