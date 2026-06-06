"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Star } from "lucide-react";

export default function SuccessMetrics() {
  const metrics = [
    {
      icon: Users,
      value: "500+",
      label: "Partner Companies",
      description: "From startups to enterprises",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      value: "125K+",
      label: "Projects Completed",
      description: "With 98% satisfaction rate",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      value: "24hrs",
      label: "Average Response",
      description: "Get proposals within a day",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      value: "4.8/5",
      label: "Client Rating",
      description: "Based on 2,500+ reviews",
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
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that speak for our quality and reliability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl text-center hover:shadow-2xl transition-all hover:scale-105"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-6`}
              >
                <metric.icon className="w-8 h-8 text-white" />
              </div>

              <div className="text-4xl font-bold text-gradient mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold mb-2 dark:text-white">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">60%</div>
              <div className="text-gray-600 dark:text-gray-400">
                Average Cost Savings
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">3-5x</div>
              <div className="text-gray-600 dark:text-gray-400">
                Faster Delivery
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400">
                Project Success Rate
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
