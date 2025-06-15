// components/CoursesSection.tsx

'use client';

import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Image from "next/image";

const courseItems = [
  {
    title: "Higher National Diploma",
    content: [
      "International In Computing (Software Engineering)",
      "International in Computing (Cyber Security)",
      "International In Computing",
      "International in Business (Business Management)",
      "International in Business (Marketing)",
      "International in Business (Accounting and Finance)",
      "International in Business (Human Resource Management)",
    ],
  },
  {
    title: "Foundation",
    content: [
      "International In Computing (Software Engineering)",
      "International in Computing (Cyber Security)",
      "International In Computing",
      "International in Business (Business Management)",
      "International in Business (Marketing)",
      "International in Business (Accounting and Finance)",
      "International in Business (Human Resource Management)",
    ],
  },
  {
    title: "Management and Leadership",
    content: [
      "International In Computing (Software Engineering)",
      "International in Computing (Cyber Security)",
      "International In Computing",
      "International in Business (Business Management)",
      "International in Business (Marketing)",
      "International in Business (Accounting and Finance)",
      "International in Business (Human Resource Management)",
    ],
  },
  {
    title: "Teacher Education",
    content: [
      "International In Computing (Software Engineering)",
      "International in Computing (Cyber Security)",
      "International In Computing",
      "International in Business (Business Management)",
      "International in Business (Marketing)",
      "International in Business (Accounting and Finance)",
      "International in Business (Human Resource Management)",
    ],
  },
  {
    title: "Certification Programs",
    content: [
      "International In Computing (Software Engineering)",
      "International in Computing (Cyber Security)",
      "International In Computing",
      "International in Business (Business Management)",
      "International in Business (Marketing)",
      "International in Business (Accounting and Finance)",
      "International in Business (Human Resource Management)",
    ],
  },
];

export default function CoursesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-2xl md:text-[40px] font-medium mb-2 md:mb-6">Explore <span className="text-accent">Our Courses</span></h2>
          <div className="flex w-full md:w-[60%] border rounded-4xl overflow-hidden shadow-sm">
            <input
              type="text" 
              placeholder="Search for Courses..."
              className="w-full px-6 md:py-4 py-2 outline-none bg-[#F0F0F0]"
            />
            <button className="bg-[#879DA5] w-24 hover:bg-black text-white px-4 flex items-center justify-center">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            {courseItems.map((item, index) => (
              <div
                key={index}
                className="py-3 ml-[-45px]"
              >
                <button
                  className="flex justify-between items-center w-full text-left bg-[#0C2D46] text-white pl-[50px] px-3 md:px-6 py-3 rounded-e-3xl"
                  onClick={() => toggle(index)}
                >
                  <span className="text-lg font-medium">{item.title}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </button>
                {openIndex === index && (
        <ol className="mt-3 list-disc list-inside font-light space-y-1 pl-[50px]">
          {item.content.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ol>
      )}
              </div>
            ))}
          </div>
          <div className="relative h-full w-[400px] ml-auto mr-[-45px]">
            <Image
              src="/course-bg-min.webp"
              alt="Courses"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
