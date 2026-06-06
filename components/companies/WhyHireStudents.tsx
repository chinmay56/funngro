"use client";

import { motion } from "framer-motion";
import { DollarSign, Lightbulb, Clock, TrendingUp, Shield, Heart } from "lucide-react";

export default function WhyHireStudents() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Costs less — genuinely",
      description:
        "You're not paying agency margins or full-time salaries. Students price their work fairly, and you pay only for what gets done.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "They understand today's internet",
      description:
        "These students grew up on Instagram Reels, YouTube Shorts, and trending content. They know what works online better than most adults do.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "Fast, because they want to prove themselves",
      description:
        "First-time freelancers are motivated to deliver well and on time. A good rating matters to them — and that works in your favour.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "No overhead, no commitment",
      description:
        "Post a project, get it done, move on. No onboarding, no benefits, no notice periods. Useful for one-off tasks or ongoing work alike.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Screened before they reach you",
      description:
        "Students on Funngro are verified. Their profiles show past work, ratings from other companies, and the skills they've demonstrated.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Heart,
      title: "You're actually helping someone",
      description:
        "Every project you post helps a student build real-world experience that a classroom simply can't give them. That matters.",
      gradient: "from-pink-500 to-rose-500",
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
            Why companies <span className="text-gradient">keep coming back</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            It&apos;s not charity — it&apos;s just smart hiring.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass p-8 rounded-2xl hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{benefit.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
