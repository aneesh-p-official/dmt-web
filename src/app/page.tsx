"use client";

import ThreeColumnSection from "@/components/home/connect";
import CoursesSection from "@/components/home/cources";
import MinimumEligibilitySection from "@/components/home/eligibility";
import FormSection from "@/components/home/form-section";
import Hero from "@/components/home/hero";
import JobOpportunitiesSection from "@/components/home/job-opportunities";
import PartnersSection from "@/components/home/partners";
import RelatedCoursesSection from "@/components/home/related-cources";
import TopSkillsSection from "@/components/home/top-skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <FormSection />
      <TopSkillsSection />
      <JobOpportunitiesSection />
      <MinimumEligibilitySection />
      <RelatedCoursesSection />
      <PartnersSection />
      <CoursesSection />
      <ThreeColumnSection />
    </main>
  );
}
