// components/TopSkillsSection.tsx

import Image from "next/image";

const skills = [
  { label: "Programming Proficiency", image: "/programming-min.webp", delay: "0" },
  { label: "Software Design Principles", image: "/software-min.webp", delay: "100" },
  { label: "Object-Oriented Programming", image: "/object-min.webp", delay: "200" },
  { label: "Agile Development", image: "/agile-min.webp", delay: "300" },
  { label: "Software Documentation", image: "/documentaion-min.webp", delay: "400" },
  { label: "Critical Thinking", image: "/critical-min.webp", delay: "500" },
];

export default function TopSkillsSection() {
  return (
    <section className="bg-[#FAFBFB] py-12 lg:-mt-32">
      <div className="container">
        <h2 className="text-2xl md:text-[40px] font-medium mb-6 md:mb-16 md:text-center" data-aos="fade-up" data-aos-delay="0">
          Top <span className="text-accent">Skills</span> you will Learn
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 md:p-4"
              data-aos="fade-up" data-aos-delay={skill.delay}
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
