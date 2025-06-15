"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PreHeader() {
  return (
    <div className="bg-[#0C2D46]">
      <div className="container">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="mailto:info@example.com" className="hidden md:flex items-center gap-2 text-sm font-medium !text-white hover:!text-accent">
              <Image src="/mail.svg" width={24} height={24} className="w-4 h-4" alt={"mail-icon"} />
              <span>info@example.com</span>
            </Link>
            <Link href="tel:+91 98765 43210" className="hidden md:flex items-center gap-2 text-sm font-medium !text-white hover:!text-accent">
              <Image src="/phone.svg" width={24} height={24} className="w-4 h-4" alt={"phone-icon"} />
              <span>+91 98765 43210</span>
            </Link>
            <div className="flex md:hidden gap-8 text-white">
              <Image src="/mail.svg" width={24} height={24} className="w-4 h-4" alt={"mail-icon"} />
              <Image src="/phone.svg" width={24} height={24} className="w-4 h-4" alt={"phone-icon"} />
            </div>
          </div>
          <div className="flex items-center gap-10 relative right-[-20px] xl:right-[-42px]">
            <nav className="hidden lg:flex gap-10 text-sm text-white font-medium">
              <a href="#" className="hover:!text-accent">
                Why Study in the UAE?
              </a>
              <a href="#" className="hover:!text-accent">
                Our Blogs
              </a>
              <a href="#" className="hover:!text-accent">
                Careers
              </a>
            </nav>
            <Button className="!px-6 py-2 rounded-none h-[45px] bg-accent flex items-center gap-2 cursor-pointer hover:!bg-accent/90 transition-colors duration-300">
              Apply
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
