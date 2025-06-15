import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0C2D46] text-white pt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
          <div className="space-y-6">
            <div>
              <Image
                src="/dmt-footer-logo.webp"
                alt="Partner 1"
                width={220}
                height={70}
                className="object-contain"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Image
                  src="/location.svg"
                  alt="Partner 1"
                  width={24}
                  height={30}
                  className="object-contain"
                />
                <div className="font-light">
                  <p>802, 8th Floor, Block No. 10,</p>
                  <p>Academic City – Dubai</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Image
                  src="/toll-free.webp"
                  alt="Partner 1"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="font-light">800 33 666 8</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-full"
              >
                <Image
                  src="/facebook-fo.svg"
                  alt="Partner 1"
                  width={37}
                  height={37}
                  className="object-contain"
                />
              </Link>
              <Link
                href="#"
                className="rounded-full"
              >
                <Image
                  src="/twitter-fo.svg"
                  alt="Partner 1"
                  width={37}
                  height={37}
                  className="object-contain"
                />
              </Link>
              <Link
                href="#"
                className="rounded-full"
              >
                <Image
                  src="/insta-fo.svg"
                  alt="Partner 1"
                  width={37}
                  height={37}
                  className="object-contain"
                />
              </Link>
              <Link
                href="#"
                className="rounded-full"
              >
                <Image
                  src="/linkedin-fo.svg"
                  alt="Partner 1"
                  width={37}
                  height={37}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-6">Menu</h4>
            <ul className="space-y-3 font-light">
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  Our Partners
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  Our Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-6">Information</h4>
            <ul className="space-y-3 font-light">
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  Skill Master
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  DeLead
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  DeCode
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-3 h-0.5 bg-white mr-2 inline-block rounded group-hover:w-5 group-hover:bg-accent transition-all duration-500" />
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-6">Get in Touch</h4>
            <form className="flex gap-2 items-end">
              <div className="space-y-4 text-black">
              <Input
                type="text"
                placeholder="Name"
                className="bg-[#E7EBED] border-0 rounded-3xl"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#E7EBED] border-0 rounded-3xl"
              />
              <Input
                type="tel"
                placeholder="Phone"
                className="bg-[#E7EBED] border-0 rounded-3xl"
              />
              <Textarea
                placeholder="Message"
                className="bg-[#E7EBED] border-0 rounded-3xl min-h-[100px]"
              />

              <div className="flex items-start space-x-2">
                <Checkbox id="consent" className="mt-1" />
                <label
                  htmlFor="consent"
                  className="text-xs font-light text-white leading-relaxed"
                >
                  I agree to share my contact info and receive exclusive offers
                  via email or call
                </label>
              </div>
</div>
<div className="pb-18">
<Button className="bg-transparent text-white p-3 rounded-full w-15 h-15 flex items-center justify-center ml-auto">
                <Image
                  src="/send.svg"
                  alt="Partner 1"
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </Button>
</div>
              
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFC] py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-black font-light">
            © 2025 DEMONT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
