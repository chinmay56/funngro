"use client";

import { motion } from "framer-motion";
import { FileText, Users, CheckCircle, Rocket } from "lucide-react";

export default function HiringProcess() {
  const steps = [
    {
      icon: FileText,
      title: "Post Your Project",
      description:
        "Describe your project requirements, timeline, and budget in minutes",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Review Proposals",
      description:
        "Receive proposals from verified students within 24 hours and review profiles",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CheckCircle,
      title: "Select & Assign",
      description:
        "Choose the best fit for your project and assign work with clear milestones",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Rocket,
      title: "Track & Launch",
      description:
        "Monitor progress, provide feedback, and launch your completed project",
      color: "from-orange-500 to-red-500",
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
            Simple <span className="text-gradient">Hiring Process</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Get your projects done in four easy steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-accent-300 dark:from-primary-700 dark:to-accent-700 -translate-x-1/2"></div>
              )}

              <div className="relative glass p-8 rounded-2xl hover:shadow-xl transition-all group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                <div
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-center dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
