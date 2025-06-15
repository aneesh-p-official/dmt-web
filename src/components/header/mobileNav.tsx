"use client";

import { useState } from "react";
import Navigation from "./navigation";
import { AlignRight, X } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="xl:hidden p-2 z-20 relativ"
        aria-label="Open Menu"
      >
        <AlignRight className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0C2D46] backdrop-blur-sm flex transition-all duration-700">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className={`flex-auto py-8 flex text-white w-full`}
          >
            <Navigation />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
