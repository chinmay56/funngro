"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white dark:bg-[#0f0f13]">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute top-10 left-[-80px] w-96 h-96 bg-primary-400/50 dark:bg-primary-600/20" />
        <div className="blob absolute top-32 right-[-60px] w-80 h-80 bg-accent-300/40 dark:bg-accent-500/15" style={{ animationDelay: "1s" }} />
        <div className="blob absolute bottom-10 left-1/3 w-72 h-72 bg-primary-300/30 dark:bg-primary-700/10" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-7
                         bg-primary-50 dark:bg-primary-900/30
                         text-primary-600 dark:text-primary-400
                         border border-primary-200 dark:border-primary-800"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              70 lakh young Indians already earning
            </motion.span>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-[1.08] tracking-tight">
              <span className="text-gradient">Earn While</span>
              <br />
              <span className="text-gray-900 dark:text-white">You Learn</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-9 leading-relaxed max-w-lg">
              Work with India&apos;s biggest brands — promote them, create content,
              refer friends, try their products — and get paid in UPI. Free, forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/teens" className="btn-primary flex items-center justify-center gap-2">
                Start Earning
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/companies" className="btn-secondary flex items-center justify-center gap-2">
                Hire Talent
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["bg-primary-400","bg-accent-400","bg-primary-300","bg-accent-300"].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white dark:border-surface-900`} />
                  ))}
                </div>
                <span>70 lakh earners</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-accent-500 font-semibold">★ 4.5</span>
                <span>on Play Store</span>
              </div>
            </div>
          </motion.div>

          {/* Right — dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative"
          >
            {/* Glow ring behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/10 rounded-3xl blur-2xl scale-105" />

            <div className="glass-strong rounded-3xl p-7 relative">
              {/* Mock browser bar */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500">funngro.com / dashboard</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="space-y-3">
                {/* Earnings card */}
                <div className="rounded-2xl p-4 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm text-white/70">This month&apos;s earnings</span>
                    <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">+18%</span>
                  </div>
                  <div className="text-3xl font-bold">₹3,240</div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Tasks done</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Referrals</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">8</div>
                  </div>
                </div>

                {/* Recent task */}
                <div className="glass rounded-xl p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium dark:text-white truncate">Brand promotion — Approved</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">₹450 credited via UPI</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
