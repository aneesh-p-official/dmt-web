import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: "/level.svg",
    label: "Duration",
    value: "24 Months",
  },
  {
    id: 2,
    icon: "/duration.svg",
    label: "Course Level",
    value: "Level 5",
  },
  {
    id: 3,
    icon: "/credit.svg",
    label: "Credits",
    value: "240",
  },
  {
    id: 4,
    icon: "/module.svg",
    label: "Modules",
    value: "15",
  },
];

const courses = [
  {
    title:
      "Higher National Diploma International in Computing (Cyber Security)",
    logo: "/pearson_logo.svg",
    background: "/rel-1-min.webp",
  },
  {
    title: "Higher National Diploma International in Computing",
    logo: "/pearson_logo.svg",
    background: "/rel-2-min.webp",
  },
  {
    title:
      "BTEC International Level 3 Foundation-Diploma in Information Technology",
    logo: "/pearson_logo.svg",
    background: "/rel-3-min.webp",
  },
  {
    title:
      "BTEC International Level 3 Extended Diploma in Information Technology",
    logo: "/pearson_logo.svg",
    background: "/rel-4-min.webp",
  },
];

export default function RelatedCoursesSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-[40px] font-medium mb-10">
          Related <span className="text-accent">Courses</span>
        </h2>

        <div className="flex gap-4 lg:gap-8 overflow-x-auto lg:grid md:grid-cols-2 xl:grid-cols-4 lg:overflow-visible">
          {courses.map((course, index) => (
            <Link
              href="/"
              key={index}
              className="relative group min-w-[280px] h-[360px] rounded-3xl overflow-hidden bg-[#F5F5F5]"
            >
              <Image
                src={course.background}
                alt={course.title}
                fill
                className="object-contain object-bottom"
              />
              <div className="absolute transition duration-300 inset-0 bg-gradient-to-b from-[#F5F5F5] via-[#F5F5F5] via-70% to-transparent p-4 flex flex-col group-hover:to-[#F5F5F5] h-[70%] group-hover:h-full">
                <div className="relative">
                  <Image
                    src={course.logo}
                    alt="logo"
                    width={150}
                    height={45}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-light my-4">{course.title}</h3>
                <Button className="!py-2 rounded-xl w-[60px] h-[28px] bg-accent flex items-center justify-end cursor-pointer hover:!bg-accent/90 transition duration-300 ml-auto group-hover:hidden">
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </Button>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={24}
                          height={24}
                        />
                        <div className="flex flex-col">
                          <span className="text-xs pb-1 font-light">
                            {item.label}
                          </span>
                          <span className="font-medium text-xs">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="!py-2 !px-10 mt-6 left-[16px] relative rounded-xl rounded-e-none w-160px] h-[38px] bg-accent flex items-center justify-end cursor-pointer hover:!bg-black transition duration-300 ml-auto">
                    Know More
                    <ChevronRight className="w-4 h-4 stroke-[2] text-black" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="group inline-flex items-center font-medium transition mt-6 md:mt-12"
        >
          <span className="font-light md:text-xl">
            Explore <strong className="font-medium">All Programs</strong>
          </span>
          <div className="relative flex items-center justify-center w-8 h-8 mr-2">
            <div className="absolute inset-0 rounded-full bg-[#879DA5] scale-0 group-hover:scale-100 transition-transform duration-300" />
            <ArrowRight className="w-4 h-4 stroke-[2] text-black relative z-1" />
          </div>
        </Link>
      </div>
    </section>
  );
}
