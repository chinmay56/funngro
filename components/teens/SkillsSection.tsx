"use client";

import { motion } from "framer-motion";
import { Brain, Target, TrendingUp, Users } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: Brain,
      title: "Creative Skills",
      items: [
        "Graphic Design",
        "Video Editing",
        "Photography",
        "Content Writing",
        "UI/UX Design",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Technical Skills",
      items: [
        "Web Development",
        "App Development",
        "Data Analysis",
        "Digital Marketing",
        "SEO Optimization",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Business Skills",
      items: [
        "Social Media Management",
        "Market Research",
        "Customer Support",
        "Sales & Lead Gen",
        "Project Management",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Soft Skills",
      items: [
        "Communication",
        "Time Management",
        "Problem Solving",
        "Teamwork",
        "Client Relations",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills You&apos;ll <span className="text-gradient">Learn & Earn</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Develop valuable skills that will help you throughout your career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:shadow-xl transition-all"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-6 mx-auto`}
              >
                <skill.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-center dark:text-white">
                {skill.title}
              </h3>

              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-600 dark:text-gray-400 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
