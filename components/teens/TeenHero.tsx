"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Shield, Zap } from "lucide-react";

export default function TeenHero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-6"
            >
              💰 Free to join &mdash; earn in UPI, no experience needed
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="dark:text-white">Work with</span>
              <br />
              <span className="text-gradient">India&apos;s Biggest Brands</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              70 lakh young Indians earn on Funngro by promoting brands, creating
              content, referring friends and trying new products &mdash; all paid directly
              to your UPI. No degree. No experience. Free, forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#calculator"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 text-center"
              >
                Calculate Your Earnings
              </Link>
              <Link
                href="#how"
                className="px-8 py-4 glass rounded-full font-semibold hover:shadow-lg transition-all text-center"
              >
                See How It Works
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-4 rounded-xl">
                <TrendingUp className="w-6 h-6 text-green-500 mb-2" />
                <div className="text-2xl font-bold dark:text-white">70L+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Earners</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <Shield className="w-6 h-6 text-blue-500 mb-2" />
                <div className="text-2xl font-bold dark:text-white">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Brands</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <Zap className="w-6 h-6 text-accent-500 mb-2" />
                <div className="text-2xl font-bold dark:text-white">UPI</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Instant pay</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">
                Popular Projects
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Brand Promotion",    pay: "₹200-800",   time: "1-2 hrs" },
                  { title: "Content Creation",   pay: "₹300-1,200", time: "2-3 hrs" },
                  { title: "Refer & Earn",        pay: "₹100-500",   time: "30 mins" },
                  { title: "Product Sampling",   pay: "₹150-600",   time: "1 hr" },
                ].map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="glass p-4 rounded-xl hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold dark:text-white">
                          {project.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {project.time}
                        </div>
                      </div>
                      <div className="text-green-600 dark:text-green-400 font-bold">
                        {project.pay}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
