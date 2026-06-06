import type { Metadata } from "next";
import CompanyHero from "@/components/companies/CompanyHero";
import WhyHireStudents from "@/components/companies/WhyHireStudents";
import BenefitsComparison from "@/components/companies/BenefitsComparison";
import ServicesOffered from "@/components/companies/ServicesOffered";
import HiringProcess from "@/components/companies/HiringProcess";
import SuccessMetrics from "@/components/companies/SuccessMetrics";
import ClientTestimonials from "@/components/companies/ClientTestimonials";
import CompanyFAQ from "@/components/companies/CompanyFAQ";
import ContactForm from "@/components/companies/ContactForm";

export const metadata: Metadata = {
  title: "Hire Student Freelancers - Affordable Young Talent | Funngro",
  description:
    "Reach 70 lakh young Indian consumers through Funngro. Run brand promotions, content campaigns, referral drives and product sampling at scale — authentically, affordably.",
  keywords: [
    "hire student freelancers",
    "hire young talent",
    "student workforce",
    "affordable freelance talent",
    "hire teenagers for projects",
    "student talent India",
    "teen freelancers",
    "hire students online",
    "student content writers",
    "student graphic designers",
    "cost-effective hiring",
  ],
  openGraph: {
    title: "Hire Student Freelancers - Affordable Young Talent | Funngro",
    description:
      "Reach 70 lakh young Indians through Funngro. Authentic brand promotions, content creation and referral campaigns at scale.",
    url: "https://funngro.com/companies",
    images: ["/og-companies.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Student Freelancers | Funngro",
    description:
      "Reach 70 lakh young Indians through Funngro. Run brand campaigns authentically at scale.",
    images: ["/og-companies.jpg"],
  },
};

export default function CompaniesPage() {
  return (
    <>
      <CompanyHero />
      <WhyHireStudents />
      <BenefitsComparison />
      <ServicesOffered />
      <HiringProcess />
      <SuccessMetrics />
      <ClientTestimonials />
      <CompanyFAQ />
      <ContactForm />
    </>
  );
}
