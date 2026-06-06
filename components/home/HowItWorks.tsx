"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, FileCheck, Wallet } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create your profile",
    description: "Sign up free, link your UPI, and you're ready. Takes about 5 minutes.",
    color: "from-primary-500 to-primary-600",
    num: "01",
  },
  {
    icon: Search,
    title: "Pick a campaign",
    description: "Browse brand campaigns — promotion, content, referrals, sampling — and pick what suits you.",
    color: "from-accent-400 to-accent-500",
    num: "02",
  },
  {
    icon: FileCheck,
    title: "Complete the task",
    description: "Do the task on your own time. Post, refer, sample, create — then submit proof.",
    color: "from-primary-400 to-accent-400",
    num: "03",
  },
  {
    icon: Wallet,
    title: "Get paid in UPI",
    description: "Once your submission is verified, earnings land in your UPI account. Simple.",
    color: "from-accent-500 to-primary-500",
    num: "04",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">Four steps, no fluff</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%-0px)] w-full h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-surface-600 z-0" />
              )}

              <div className="glass rounded-2xl p-7 card-hover relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-shadow`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-gray-100 dark:text-surface-700 select-none">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
