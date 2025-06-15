import Image from "next/image";

const learnings = [
    "Gain the essential knowledge, understanding, and skills required for a successful career in the computing industry, equipping you with a solid foundation to excel in various roles.",
    "Develop a versatile skill set through the effective integration of knowledge and skills gained across different program components, enabling you to tackle multifaceted challenges in the computing industry.",
    "Gain flexibility, knowledge, skills, and motivation that serve as a solid foundation for ongoing studies and career advancement in the dynamic realm of computing",
  ];

const modules = [
  { name: "Programming", count: "15" },
  { name: "Networking", count: "15" },
  { name: "Professional Practice", count: "15" },
  { name: "Database Design & Development", count: "15" },
  { name: "Security", count: "15" },
  { name: "Planning a Computing Project (Pearson-set)", count: "15" },
  { name: "Software Development Lifecycles", count: "15" },
  { name: "Website Design & Development", count: "15" },
  { name: "Computing Research Project (Pearson-set)", count: "30" },
  { name: "Business Process Support", count: "15" },
  { name: "Discrete Maths", count: "15" },
  { name: "Data Structures & Algorithms", count: "15" },
  { name: "Applied Programming and Design Principles", count: "15" },
  { name: "Operating Systems", count: "15" },
  { name: "Cloud Computing", count: "15" },
];

export default function MinimumEligibilitySection() {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl md:text-[40px] font-medium mb-6" data-aos="fade-up" data-aos-delay="0">
            Minimum<span className="text-accent">Eligibility</span>
          </h2>
          <ul className="grid gap-3 max-w-xl" data-aos="fade-up" data-aos-delay="0">
            <li className="flex items-center gap-4 font-light">
              <span className="mt-1 w-[12px] h-[5px] bg-[#879DA5] rounded-full shrink-0"></span>
              <span>
                Students must be{" "}
                <strong className="font-semibold">High School Graduates</strong>
              </span>
            </li>
          </ul>
          <div className="flex gap-3 mt-12 mb-4" data-aos="fade-up" data-aos-delay="0">
            <span className="font-extralight text-xl md:text-3xl md:text-[40px]">Awarding Body:</span>
            <Image
              src="/pearson_logo.svg"
              alt="Pearson"
              width={190}
              height={57}
              className="max-w-[120px] md:max-w-none"
            />
          </div>
          <p className="font-light mb-12" data-aos="fade-up" data-aos-delay="0">
            Pearson Education is a British-owned educational publishing and
            appraisal service for educational institutions and corporations, as
            for students directly. It integrates world-class educational content
            and evaluation, driven by services and technology, to allow more
            efficient teaching and customized learning. Their mission is to have
            a direct partnership with millions of lifelong learners and to link
            education to the way people aspire to live and work each day. They
            assume that wherever learning flourishes, people do as well.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-extralight text-2xl md:text-[40px] mb-4">Core Modules</h3>
              <div className="border rounded-4xl p-6 md:p-9">
                <ul className="grid gap-3">
                    <li
                    className="flex items-center gap-4 font-medium text-lg md:text-2xl"
                  >
                    <span className="flex-1">Module Name</span>
                    <span className="shrink-0 md:min-w-26 text-center">Credit</span>
                  </li>
                {modules.map((module, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 font-light py-1 border-b"
                  >
                    <span className="flex-1">{module.name}</span>
                    <span className="shrink-0 md:min-w-26 text-center">{module.count}</span>
                  </li>
                ))}
              </ul>
              </div>
              
            </div>
            <div className="max-w-[530px] ml-auto">
                <h3 className="font-extralight text-2xl md:text-[40px] mb-4">Key Learnings</h3>
                <ul className="grid gap-3 max-w-xl">
              {learnings.map((learn, index) => (
                <li key={index} className="flex items-start gap-4 font-light">
                  <span className="inline-block mt-2 w-[12px] h-[5px] bg-accent rounded-full shrink-0"></span>
                  <span>{learn}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
