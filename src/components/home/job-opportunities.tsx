export default function JobOpportunitiesSection() {
  const jobs = [
    "Software Developer",
    "Web Developer",
    "Quality Assurance Engineer",
    "Database Developer",
    "Software Tester",
    "Technical Support Engineer",
  ];

  return (
    <>
      <section className="relative py-12 overflow-hidden">
        <div className="container">
          <div className="max-w-[800px]">
            <h2 className="text-2xl md:text-[40px] font-medium mb-6" data-aos="fade-up" data-aos-delay="0">
              <span className="text-accent">Job</span> Opportunities
            </h2>
            <p className="mb-10 font-light" data-aos="fade-up" data-aos-delay="0">
              Graduates of the Higher National Diploma International (HND) in
              Computing (Software Engineering) are well-equipped to pursue a
              wide range of job opportunities in the dynamic field of software
              development. The skills gained through this program open doors to
              various roles across industries that rely on technology and
              software solutions.
            </p>
            <h3 className="text-lg md:text-xl font-medium mb-4" data-aos="fade-up" data-aos-delay="0">
              <span className="font-light">Here are some of the</span> job
              opportunities for graduates:
            </h3>

            <ul className="grid gap-3 max-w-xl" data-aos="fade-up" data-aos-delay="0">
              {jobs.map((job, index) => (
                <li key={index} className="flex items-center gap-4 font-light">
                  <span className="mt-1 w-[12px] h-[5px] bg-[#879DA5] rounded-full shrink-0"></span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="absolute right-0 top-0 bottom-0 w-full h-full bg-no-repeat bg-cover lg:bg-contain bg-center lg:bg-right-bottom pointer-events-none -z-1 opacity-20 lg:opacity-100"
          style={{ backgroundImage: "url('/job-bg-min.webp')" }}
        />
      </section>
      <section className="bg-[#0C2D46] py-12">
        <div className="container">
            <div className="max-w-[800px] text-white">
            <h2 className="text-2xl md:text-[40px] font-medium mb-6" data-aos="fade-up" data-aos-delay="0">
              <span className="text-accent">Who</span> Is This Programme for?
            </h2>
            <p className="font-light" data-aos="fade-up" data-aos-delay="0">
              The Higher National Diploma International (HND) in Computing with a specialization in Software Engineering is designed for a diverse range of individuals who are interested in pursuing a career in the field of software development. This program caters to various backgrounds and aspirations, making it suitable for High School Graduates, Tech Enthusiasts, and IT Professionals etc.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
