"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TeenTestimonials() {
  const testimonials = [
    {
      name: "Ishaan Sharma",
      age: 17,
      location: "Delhi",
      rating: 5,
      text: "Funngro gave me the opportunity to earn while learning. I've developed so many skills and made great connections!",
      role: "Content Writer",
    },
    {
      name: "Riya Patel",
      age: 16,
      location: "Mumbai",
      rating: 5,
      text: "The platform is super easy to use and payments are always on time. My parents are so proud of my achievements!",
      role: "Social Media Manager",
    },
    {
      name: "Kabir Singh",
      age: 18,
      location: "Bangalore",
      rating: 5,
      text: "I love the flexibility! I can work around my school schedule and still earn enough for my own expenses.",
      role: "Graphic Designer",
    },
    {
      name: "Ananya Gupta",
      age: 15,
      location: "Chennai",
      rating: 5,
      text: "Started with small projects and now handling bigger ones. The experience is invaluable for my future career!",
      role: "Data Entry Specialist",
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
            What Students <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by thousands of students across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="font-semibold dark:text-white">
                  {testimonial.name}, {testimonial.age}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
