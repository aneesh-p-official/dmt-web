// components/TopSkillsSection.tsx

import Image from "next/image";

const skills = [
  { label: "Programming Proficiency", image: "/programming-min.webp" },
  { label: "Software Design Principles", image: "/software-min.webp" },
  { label: "Object-Oriented Programming", image: "/object-min.webp" },
  { label: "Agile Development", image: "/agile-min.webp" },
  { label: "Software Documentation", image: "/documentaion-min.webp" },
  { label: "Critical Thinking", image: "/critical-min.webp" },
];

export default function TopSkillsSection() {
  return (
    <section className="bg-[#FAFBFB] py-12 lg:-mt-32">
      <div className="container">
        <h2 className="text-2xl md:text-[40px] font-medium mb-6 md:mb-16 md:text-center">
          Top <span className="text-accent">Skills</span> you will Learn
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 md:p-4"
            >
              <div className="relative shrink-0">
                <Image
                  src={skill.image}
                  alt={skill.label}
                  width={130}
                  height={130}
                  className="object-contain max-w-20 lg:max-w-none"
                />
              </div>
              <span className="text-lg md:text-xl font-light">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
