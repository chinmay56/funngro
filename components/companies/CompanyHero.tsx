"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, TrendingDown, Zap } from "lucide-react";

export default function CompanyHero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
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
              className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-medium mb-6"
            >
              🚀 Reach 70 lakh young Indian consumers
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="dark:text-white">Promote Your Brand</span>
              <br />
              <span className="text-gradient">Through Gen Z</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Funngro connects your brand with 70 lakh young Indians who promote
              your products, create content, run referrals, and do product sampling
              — at scale, authentically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 text-center"
              >
                Start Hiring
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 glass rounded-full font-semibold hover:shadow-lg transition-all text-center"
              >
                View Pricing
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-4 rounded-xl">
                <Users className="w-6 h-6 text-blue-500 mb-2" />
                <div className="text-2xl font-bold dark:text-white">70L+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Young reach</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <TrendingDown className="w-6 h-6 text-green-500 mb-2" />
                <div className="text-2xl font-bold dark:text-white">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Brands onboard</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <Zap className="w-6 h-6 text-accent-500 mb-2" />
                <div className="text-2xl font-bold dark:text-white">UPI</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pay per task</div>
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
                Available Services
              </h3>
              <div className="space-y-4">
                {[
                  { service: "Brand Promotion",    students: "70L+ earners",  rate: "CPA / CPL" },
                  { service: "Content Creation",   students: "5L+ creators",  rate: "Per post" },
                  { service: "Referral Campaigns", students: "20L+ referrers", rate: "Per referral" },
                  { service: "Product Sampling",   students: "2L+ samplers",  rate: "Per sample" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="glass p-4 rounded-xl hover:scale-105 transition-transform"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold dark:text-white">
                          {item.service}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {item.students} verified students
                        </div>
                      </div>
                      <div className="text-primary-600 dark:text-primary-400 font-bold">
                        {item.rate}
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
