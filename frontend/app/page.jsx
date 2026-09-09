import Hero from "@/components/home/Hero";
import WhyEnvistream from "@/components/home/WhyEnvistream";
import PopularCourses from "@/components/home/PopularCourses";
import InternshipPrograms from "@/components/home/InternshipPrograms";
import AIEmergingTech from "@/components/home/AIEmergingTech";
import IndustryProjects from "@/components/home/IndustryProjects";
import InstitutionalPartnerships from "@/components/home/InstitutionalPartnerships";
import Testimonials from "@/components/home/Testimonials";
import Certifications from "@/components/home/Certifications";
import CareerOutcomes from "@/components/home/CareerOutcomes";
import FAQs from "@/components/home/FAQs";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyEnvistream />
      <PopularCourses />
      <InternshipPrograms />
      <AIEmergingTech />
      <IndustryProjects />
      <InstitutionalPartnerships />
      <Testimonials />
      <Certifications />
      <CareerOutcomes />
      <FAQs />
      <FinalCTA />
    </>
  );
}
