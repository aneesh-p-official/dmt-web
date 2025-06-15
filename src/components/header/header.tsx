'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Navigation from "./navigation";
import MobileNav from "./mobileNav";
import PreHeader from './pre-header';
  
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-10 bg-[#F6F6F6] pb-4 transition-all duration-300 ${scrolled ? 'pt-0 !fixed' : ''}`}>
      <PreHeader />
      <div className='sticky'>
        <div className="container !pt-4">
          <div className=" flex justify-between items-center h-[48px]">
            <Link href="/" className="block rounded-b-4xl bg-[#F6F6F6] p-5 relative top-4 right-2 z-11">
              <Image
                src="/header-logo.svg"
                alt="BouncyHouse"
                width={234}
                height={71}
                quality={100}
                loading="eager"
                priority
                className='max-w-[165px] md:max-w-none'
              />
            </Link>
            <div className={`hidden xl:block`}>
              <Navigation />
            </div>
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
