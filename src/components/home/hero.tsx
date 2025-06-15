"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    id: 1,
    icon: "/level.svg",
    label: "Duration",
    value: "24 Months",
    delay: "0"
  },
  {
    id: 2,
    icon: "/duration.svg",
    label: "Course Level",
    value: "Level 5",
    delay: "100"
  },
  {
    id: 3,
    icon: "/credit.svg",
    label: "Credits",
    value: "240",
    delay: "200"
  },
  {
    id: 4,
    icon: "/module.svg",
    label: "Modules",
    value: "15",
    delay: "300"
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden mt-[120px]">
      <div className="container flex flex-col md:flex-row relative">
        <div className="relative z-2 flex-1 py-12 md:py-16 text-white md:text-black max-w-[600px] xl:max-w-none">
          <div>
            <Link
              href="/"
              className="group inline-flex items-center text-sm font-medium transition relative -left-5"
            >
              <div className="relative flex items-center justify-center w-8 h-8 mr-2">
                <div className="absolute inset-0 rounded-full bg-[#879DA5] scale-0 group-hover:scale-100 transition-transform duration-300" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-left w-8 h-4 z-10 duration-300 left-3 relative"
                >
                  <path d="m12 19-7-7 7-7" className="transition-all duration-300 group-hover:-translate-x-3 origin-center"></path>
                  <path d="M19 12H5" className="transition-all duration-300 group-hover:-translate-x-0.5 group-hover:scale-x-200 origin-center"></path>
                </svg>
              </div>
              <span className="font-medium">
Back to all Programs
              </span>
            </Link>
          </div>
          <div className="rounded-e-full bg-[#F6F6F6] md:p-7 p-4 !px-14 mt-5 inline-block -translate-x-13">
            <Image
              src="/pearson_logo.svg"
              alt="Pearson"
              width={190}
              height={57}
              className="max-w-[120px] md:max-w-none"
            />
          </div>

          <h1 className="text-2xl md:text-[40px] font-light mt-8" data-aos="fade-up" data-aos-delay="0">
            Higher National diploma international
            <span className="block text-xl md:text-3xl font-light">
              In Computing (Software Engineering)
            </span>
          </h1>
        </div>
        <div className="absolute right-0 top-0 z-1 w-full h-full md:w-auto md:h-auto" data-aos="fade-left" data-aos-delay="0">
          <div className="absolute inset-0 bg-black/70 md:hidden" />
          <Image
            src="/hero-min.webp"
            alt="Clipped Ellipse"
            width={560}
            height={560}
            className="object-cover hidden md:block"
            style={{
              clipPath: "ellipse(50% 40% at 50% 50%)",
              transform: "rotate(6deg) translate(5%, -30%)",
            }}
          />
          <Image
            src="/hero-min.webp"
            alt="Clipped Ellipse"
            width={560}
            height={560}
            className="object-cover w-full md:hidden"
          />
        </div>
      </div>
      <div className="xl:max-w-[80%] 2xl:max-w-[75%] 3xl:max-w-[70%] px-4 py-5 bg-[#0C2D46] text-white relative z-2 xl:z-0">
        <div className="container">
          <div className="max-w-4xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div key={item.id} className="flex items-center gap-4" data-aos="fade-up" data-aos-delay={item.delay}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={45}
                  height={45}
                  className="max-w-9 md:max-w-none"
                />
                <div className="flex flex-col">
                  <span className="text-sm pb-1 font-light">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
