"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TeenSuccessStories() {
  const stories = [
    {
      name: "Aditya Kumar",
      age: 16,
      city: "Pune",
      achievement: "Earned ₹18,000 in his first 2 months",
      category: "Video Editing",
      story:
        "I used to edit YouTube videos just for fun. Funngro helped me turn that into actual income. My first project was a product reel for a clothing brand — paid ₹2,500. That felt unreal.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      name: "Sneha Reddy",
      age: 17,
      city: "Hyderabad",
      achievement: "35+ projects, built her design portfolio",
      category: "Graphic Design",
      story:
        "I had no idea companies would pay a 17-year-old for design work. I started small — social media posts, thumbnails — and now I have a portfolio that got me into a design program.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Arjun Mehta",
      age: 18,
      city: "Jaipur",
      achievement: "Saved up for his first laptop",
      category: "Content Writing",
      story:
        "Writing articles for companies during board exam prep was tough but worth it. I saved enough to buy my own laptop before college. My parents couldn't believe I managed both.",
      gradient: "from-green-500 to-cyan-500",
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
            Students who made it <span className="text-gradient">work</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            No overnight success stories. Just students who showed up and got paid.
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
              className="glass rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className={`h-28 bg-gradient-to-br ${story.gradient} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold text-white">
                  {story.name.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold dark:text-white">
                    {story.name}, {story.age}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{story.city} · {story.category}</p>
                </div>

                <div className="mb-4 px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-700 dark:text-green-400 text-sm font-medium">{story.achievement}</p>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary-200 dark:text-primary-800" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-5">
                    {story.story}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
