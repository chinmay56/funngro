"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";

export default function EarningsCalculator() {
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [ratePerHour, setRatePerHour] = useState(200);

  const dailyEarnings = hoursPerDay * ratePerHour;
  const weeklyEarnings = dailyEarnings * daysPerWeek;
  const monthlyEarnings = weeklyEarnings * 4;
  const yearlyEarnings = monthlyEarnings * 12;

  return (
    <section id="calculator" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Calculator className="w-16 h-16 mx-auto mb-6 text-primary-600 dark:text-primary-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Earnings <span className="text-gradient">Calculator</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Estimate how much you can earn based on your availability
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold mb-3 dark:text-white">
                  Hours per day: {hoursPerDay}
                </label>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>1 hr</span>
                  <span>8 hrs</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 dark:text-white">
                  Days per week: {daysPerWeek}
                </label>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>1 day</span>
                  <span>7 days</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 dark:text-white">
                  Rate per hour: ₹{ratePerHour}
                </label>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="50"
                  value={ratePerHour}
                  onChange={(e) => setRatePerHour(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>₹100</span>
                  <span>₹500</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl border-2 border-primary-200 dark:border-primary-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Daily</span>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-gradient">
                  ₹{dailyEarnings.toLocaleString()}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl">
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Weekly
                </span>
                <div className="text-2xl font-bold dark:text-white">
                  ₹{weeklyEarnings.toLocaleString()}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30">
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Monthly
                </span>
                <div className="text-3xl font-bold text-gradient">
                  ₹{monthlyEarnings.toLocaleString()}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl">
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Yearly Potential
                </span>
                <div className="text-2xl font-bold dark:text-white">
                  ₹{yearlyEarnings.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              💡 Top students earn even more! Rates increase with experience and ratings.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
