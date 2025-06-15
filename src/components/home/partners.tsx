// components/PartnersSection.tsx

import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function PartnersSection() {
  return (
    <section className="py-16 bg-[#E7EBED]">
      <div className="container flex flex-col lg:flex-row gap-12">
        <div className="lg:w-3/5 w-full flex flex-col gap-6 order-1 md:-order-1">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-[#0C2D46] rounded-3xl shadow p-2 flex flex-col gap-4 min-w-[200px] overflow-hidden">
              <div className="w-full h-[190px] rounded-tl-2xl rounded-tr-2xl flex items-center justify-center bg-white ">
                <Image
                  src="/pearson_logo.svg"
                  alt="Partner 1"
                  width={200}
                  height={70}
                  className="object-contain"
                />
              </div>
              <p className="text-white font-light p-4 px-6">
                A leading global organization focused on enhancing management
                and leadership capabilities through accreditation,
                qualifications, and resources.
              </p>
              <div className="flex gap-3 mb-6">
                <Button className="!py-2 !px-4 md:!px-10 right-[16px] relative rounded-xl rounded-s-none w-160px] h-[38px] bg-white text-black flex items-center justify-end cursor-pointer hover:!bg-black hover:!text-white transition-all duration-300 mr-auto">
                  Get in touch!
                </Button>
                <Button className="!py-2 !px-4 md:!px-10 left-[16px] relative rounded-xl rounded-e-none w-160px] h-[38px] bg-accent flex items-center justify-end cursor-pointer hover:!bg-black transition-all duration-300 ml-auto">
                  Know More
                  <ChevronRight className="w-4 h-4 stroke-[2] text-black" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-between relative">
              <div className="partner-item group md:absolute top-0 w-full bg-[#0C2D46] rounded-3xl shadow p-0 hover:p-2 flex flex-col gap-4 min-w-[200px] overflow-hidden transition-all duration-300">
                <div className="w-full h-[190px] group-hover:rounded-bl-none rounded-2xl group-hover:rounded-br-none flex items-center justify-center bg-white transition-all duration-300">
                  <Image
                    src="/ncfe-logo.svg"
                    alt={`Partner`}
                    width={200}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <div className="md:hidden group-hover:block transition-all duration-300">
                  <p className="text-white font-light p-4 px-6">
                    A leading global organization focused on enhancing
                    management and leadership capabilities through
                    accreditation, qualifications, and resources.
                  </p>
                  <div className="flex gap-3 mb-6">
                    <Button className="!py-2 !px-4 md:!px-10 right-[16px] relative rounded-xl rounded-s-none w-160px] h-[38px] bg-white text-black flex items-center justify-end cursor-pointer hover:!bg-black hover:!text-white transition-all duration-300 mr-auto">
                      Get in touch!
                    </Button>
                    <Button className="!py-2 !px-4 md:!px-10 left-[16px] relative rounded-xl rounded-e-none w-160px] h-[38px] bg-accent flex items-center justify-end cursor-pointer hover:!bg-black transition-all duration-300 ml-auto">
                      Know More
                      <ChevronRight className="w-4 h-4 stroke-[2] text-black" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group partner-item md:absolute bottom-0 w-full bg-[#0C2D46] rounded-3xl shadow p-0 hover:p-2 flex flex-col md:flex-col-reverse gap-4 min-w-[200px] overflow-hidden transition-all duration-300">
                <div className="w-full h-[190px] group-hover:rounded-tl-none rounded-2xl group-hover:rounded-tr-none flex items-center justify-center bg-white transition-all duration-300">
                  <Image
                    src="/cmi-logo.svg"
                    alt={`Partner`}
                    width={200}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <div className="md:hidden group-hover:block transition-all duration-300">
                  <p className="text-white font-light p-4 px-6">
                    A leading global organization focused on enhancing
                    management and leadership capabilities through
                    accreditation, qualifications, and resources.
                  </p>
                  <div className="flex gap-3 mb-6">
                    <Button className="!py-2 !px-4 md:!px-10 right-[16px] relative rounded-xl rounded-s-none w-160px] h-[38px] bg-white text-black flex items-center justify-end cursor-pointer hover:!bg-black hover:!text-white transition-all duration-300 mr-auto">
                      Get in touch!
                    </Button>
                    <Button className="!py-2 !px-4 md:!px-10 left-[16px] relative rounded-xl rounded-e-none w-160px] h-[38px] bg-accent flex items-center justify-end cursor-pointer hover:!bg-black transition-all duration-300 ml-auto">
                      Know More
                      <ChevronRight className="w-4 h-4 stroke-[2] text-black" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 w-full flex flex-col max-w-[400px] items-center">
          <h2 className="text-2xl md:text-[40px] font-medium mb-6">
            Discover Our Academic <span className="text-accent">Partners</span>
          </h2>
          <p className="font-light">
            <strong className="font-medium">DeMont</strong> Institute of Management and Technology proudly collaborates with top institutions globally, ensuring our students receive world-class higher education.
          </p>
        </div>
      </div>
    </section>
  );
}
