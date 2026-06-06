"use client";

import { motion } from "framer-motion";
import { Briefcase, Shield, Clock, CreditCard, Award, Users } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Brand Promotion",
    description: "Promote India's biggest brands on social media, WhatsApp, and in your college — and earn per action.",
    from: "from-primary-500", to: "to-primary-600",
  },
  {
    icon: Shield,
    title: "Verified Brands Only",
    description: "Every brand on Funngro is vetted. You'll never be asked to promote something dodgy or unsafe.",
    from: "from-accent-400", to: "to-accent-500",
  },
  {
    icon: Clock,
    title: "Do it on your time",
    description: "Between classes, on weekends, during holidays. No login times, no daily targets.",
    from: "from-primary-400", to: "to-accent-400",
  },
  {
    icon: CreditCard,
    title: "Paid straight to UPI",
    description: "Earnings go directly to your UPI ID. No middlemen, no waiting 30 days, no bank paperwork.",
    from: "from-accent-500", to: "to-primary-400",
  },
  {
    icon: Award,
    title: "Real work experience",
    description: "Brand promotion, content, referrals, sampling — these are skills companies actually hire for.",
    from: "from-primary-500", to: "to-accent-300",
  },
  {
    icon: Users,
    title: "70 lakh strong community",
    description: "You join India’s largest community of young earners. Learn from others, grow faster.",
    from: "from-accent-400", to: "to-primary-500",
  },
];

export default function Features() {
  return (
    <section className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Why students choose <span className="text-gradient">Funngro</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Built specifically for teenagers — not a watered-down version of adult freelancing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-2xl p-7 card-hover group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.from} ${f.to} flex items-center justify-center mb-5 shadow-glow-sm group-hover:shadow-glow-md transition-shadow`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">{f.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
