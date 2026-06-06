"use client";

import { motion } from "framer-motion";
import { Building2, Star } from "lucide-react";

export default function ClientTestimonials() {
  const testimonials = [
    {
      company: "TechStart Solutions",
      industry: "IT Services",
      person: "Rajesh Kumar, CEO",
      text: "We've saved over 50% on our content creation costs while getting fresh, creative work. The students are eager, talented, and deliver on time.",
      rating: 5,
      projects: "45 projects completed",
    },
    {
      company: "Creative Minds Agency",
      industry: "Digital Marketing",
      person: "Priya Sharma, Creative Director",
      text: "Funngro has become our go-to platform for graphic design and social media content. The quality is excellent and turnaround time is impressive.",
      rating: 5,
      projects: "78 projects completed",
    },
    {
      company: "EduTech Pro",
      industry: "Education Technology",
      person: "Amit Patel, Founder",
      text: "As an education company, we love supporting student talent. The platform makes it easy to find skilled students who understand our audience.",
      rating: 5,
      projects: "62 projects completed",
    },
    {
      company: "Brand Builders Co.",
      industry: "Branding & Design",
      person: "Sneha Reddy, Brand Manager",
      text: "The fresh perspectives from student freelancers have helped us create more engaging campaigns. Highly recommend for any growing business!",
      rating: 5,
      projects: "91 projects completed",
    },
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by businesses across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg dark:text-white">
                    {testimonial.company}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.industry}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold dark:text-white">
                      {testimonial.person}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">
                      {testimonial.projects}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
