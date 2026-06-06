"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function BenefitsComparison() {
  const comparisons = [
    {
      feature: "Average Cost per Hour",
      funngro: "₹500-800",
      traditional: "₹1,500-3,000",
      highlight: true,
    },
    {
      feature: "Project Delivery Time",
      funngro: "24-48 hours",
      traditional: "3-7 days",
      highlight: false,
    },
    {
      feature: "Quality Assurance",
      funngro: true,
      traditional: true,
      highlight: false,
    },
    {
      feature: "Flexible Scaling",
      funngro: true,
      traditional: false,
      highlight: false,
    },
    {
      feature: "No Long-term Contracts",
      funngro: true,
      traditional: false,
      highlight: false,
    },
    {
      feature: "Fresh Perspectives",
      funngro: true,
      traditional: false,
      highlight: false,
    },
    {
      feature: "Social Impact",
      funngro: true,
      traditional: false,
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compare <span className="text-gradient">The Value</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            See how Funngro stacks up against traditional freelancing platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6">
            <div className="font-semibold">Feature</div>
            <div className="font-semibold text-center">Funngro</div>
            <div className="font-semibold text-center">Traditional Platforms</div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`grid grid-cols-3 p-6 border-b border-gray-200 dark:border-gray-700 last:border-0 ${
                item.highlight
                  ? "bg-primary-50 dark:bg-primary-900/20"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
              } transition-colors`}
            >
              <div className="font-medium dark:text-white">{item.feature}</div>
              <div className="text-center">
                {typeof item.funngro === "boolean" ? (
                  item.funngro ? (
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  )
                ) : (
                  <span
                    className={`font-semibold ${
                      item.highlight
                        ? "text-green-600 dark:text-green-400 text-lg"
                        : "dark:text-white"
                    }`}
                  >
                    {item.funngro}
                  </span>
                )}
              </div>
              <div className="text-center">
                {typeof item.traditional === "boolean" ? (
                  item.traditional ? (
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  )
                ) : (
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.traditional}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-block glass p-6 rounded-2xl">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Average Savings per Project
            </div>
            <div className="text-4xl font-bold text-gradient">60%</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
