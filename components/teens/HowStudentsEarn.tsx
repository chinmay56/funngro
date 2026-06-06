"use client";

import { motion } from "framer-motion";
import { UserCircle, Search, Megaphone, CheckCircle, Wallet } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    title: "Sign up free",
    description: "Create your account, link your UPI ID, and get verified. No joining fees, ever.",
  },
  {
    icon: Search,
    title: "Browse campaigns",
    description: "Pick from brand promotion, content creation, referrals, or product sampling tasks.",
  },
  {
    icon: Megaphone,
    title: "Do the task",
    description: "Promote on Instagram, WhatsApp, college groups — wherever you have reach. Submit proof.",
  },
  {
    icon: CheckCircle,
    title: "Get verified",
    description: "The brand reviews your submission. Most tasks are approved within 24–48 hours.",
  },
  {
    icon: Wallet,
    title: "Paid in UPI",
    description: "Money goes straight to your UPI account. No waiting, no bank forms, no middlemen.",
  },
];

export default function HowStudentsEarn() {
  return (
    <section id="how" className="py-20 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            How you <span className="text-gradient">earn</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Five steps from sign-up to UPI payment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center group"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-primary-200 to-accent-200 dark:from-surface-600 dark:to-surface-700" />
              )}
              <div className="glass rounded-2xl p-5 card-hover relative z-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold mb-1.5 dark:text-white">{step.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
