import type { Metadata } from "next";
import TeenHero from "@/components/teens/TeenHero";
import HowStudentsEarn from "@/components/teens/HowStudentsEarn";
import ProjectCategories from "@/components/teens/ProjectCategories";
import SkillsSection from "@/components/teens/SkillsSection";
import EarningsCalculator from "@/components/teens/EarningsCalculator";
import TeenSuccessStories from "@/components/teens/TeenSuccessStories";
import TeenTestimonials from "@/components/teens/TeenTestimonials";
import TeenFAQ from "@/components/teens/TeenFAQ";
import DownloadAppCTA from "@/components/DownloadAppCTA";

export const metadata: Metadata = {
  title: "For Students - Earn Money Online | Student Freelancing Jobs",
  description:
    "Join 70 lakh young Indians already earning on Funngro. Promote brands, create content, refer friends — paid instantly via UPI. Free to join, no experience needed.",
  alternates: {
    canonical: "/teens",
  },
  keywords: [
    "earn money online for students",
    "student freelancing",
    "freelance jobs for teenagers",
    "part-time work for students",
    "online jobs for teens",
    "student jobs India",
    "work from home for students",
  ],
  openGraph: {
    title: "For Students - Earn Money Online | Funngro",
    description:
      "70 lakh young Indians earn on Funngro. Work with India's biggest brands and get paid via UPI. Free to join.",
    url: "https://funngro.com/teens",
    images: ["/og-teens.jpg"],
  },
};

export default function TeensPage() {
  return (
    <>
      <TeenHero />
      <HowStudentsEarn />
      <ProjectCategories />
      <SkillsSection />
      <EarningsCalculator />
      <TeenSuccessStories />
      <TeenTestimonials />
      <TeenFAQ />
      <DownloadAppCTA />
    </>
  );
}
