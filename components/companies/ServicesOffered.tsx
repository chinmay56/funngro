"use client";

import { motion } from "framer-motion";
import {
  Pen,
  Palette,
  Code,
  Video,
  Share2,
  BarChart,
  Mail,
  Search,
} from "lucide-react";

export default function ServicesOffered() {
  const services = [
    {
      icon: Pen,
      title: "Content Writing",
      description: "Blog posts, articles, website copy, product descriptions",
      students: "5,200+",
      rate: "₹500-800/hr",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Logos, social media graphics, presentations, infographics",
      students: "3,800+",
      rate: "₹800-1,200/hr",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Website development, landing pages, web applications",
      students: "2,100+",
      rate: "₹1,000-1,500/hr",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "YouTube videos, promotional content, social media reels",
      students: "1,800+",
      rate: "₹700-1,000/hr",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Content creation, scheduling, community management",
      students: "4,500+",
      rate: "₹500-700/hr",
    },
    {
      icon: BarChart,
      title: "Data Entry & Analysis",
      description: "Data processing, spreadsheet management, research",
      students: "6,100+",
      rate: "₹300-500/hr",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Campaign creation, copywriting, list management",
      students: "1,400+",
      rate: "₹600-900/hr",
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Keyword research, on-page SEO, content optimization",
      students: "2,300+",
      rate: "₹700-1,000/hr",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services <span className="text-gradient">We Offer</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Access verified student talent across multiple categories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-2xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold mb-2 dark:text-white">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>

              <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">
                  {service.students} students
                </span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {service.rate}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
