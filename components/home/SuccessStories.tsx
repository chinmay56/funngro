"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Star } from "lucide-react";

export default function SuccessStories() {
  const stories = [
    {
      name: "Priya Sharma",
      age: 17,
      location: "Mumbai",
      achievement: "Earned ₹22,000 in 3 months",
      skill: "Graphic Design",
      projects: 14,
      rating: 4.9,
      testimonial:
        "I was making Instagram posts for fun. Funngro showed me companies actually pay for that. Started with ₹500 projects, now I charge more and have repeat clients.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Rahul Verma",
      age: 16,
      location: "Delhi",
      achievement: "22 projects completed",
      skill: "Content Writing",
      projects: 22,
      rating: 4.8,
      testimonial:
        "Writing blog posts between study sessions paid for my coaching fees. My parents didn't have to worry about that part, and that meant a lot to me.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Ananya Patel",
      age: 18,
      location: "Bangalore",
      achievement: "Built her design portfolio",
      skill: "Social Media Management",
      projects: 19,
      rating: 4.7,
      testimonial:
        "I needed real work samples for college applications. Funngro projects gave me exactly that — actual campaigns I ran for actual brands. My portfolio looked better than most adults applying.",
      gradient: "from-purple-500 to-pink-500",
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
            Students who <span className="text-gradient">actually did it</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            No exaggerated numbers. Just real students and what they earned.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-2xl hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-5">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white font-bold text-xl`}>
                  {story.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold dark:text-white">{story.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {story.age} · {story.location}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full text-xs font-semibold text-orange-700 dark:text-orange-400 mb-3">
                  {story.skill}
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
                  &ldquo;{story.testimonial}&rdquo;
                </p>
              </div>

              <div className="space-y-2 border-t border-gray-100 dark:border-gray-700 pt-4 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                    Earnings
                  </div>
                  <span className="font-semibold dark:text-white">{story.achievement}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Award className="w-4 h-4 text-blue-500 mr-2" />
                    Projects
                  </div>
                  <span className="font-semibold dark:text-white">{story.projects} completed</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Rating
                  </div>
                  <span className="font-semibold dark:text-white">{story.rating}/5.0</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
