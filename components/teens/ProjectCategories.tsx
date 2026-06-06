"use client";

import { motion } from "framer-motion";
import { Megaphone, Video, Share2, Package, Pen, Camera, Users, Star } from "lucide-react";

const categories = [
  {
    icon: Megaphone,
    name: "Brand Promotion",
    desc: "Share brand content on your social media, college groups, or WhatsApp",
    earning: "₹100–500 per task",
    gradient: "from-primary-500 to-primary-600",
  },
  {
    icon: Share2,
    name: "Refer & Earn",
    desc: "Refer friends, family, or classmates to a brand's app or service",
    earning: "₹50–300 per referral",
    gradient: "from-accent-400 to-accent-500",
  },
  {
    icon: Pen,
    name: "Content Creation",
    desc: "Create Instagram posts, Reels, or YouTube Shorts for a brand",
    earning: "₹300–1,500 per post",
    gradient: "from-primary-400 to-accent-400",
  },
  {
    icon: Package,
    name: "Product Sampling",
    desc: "Try a brand's product and share genuine feedback or a review",
    earning: "₹150–600 per review",
    gradient: "from-accent-500 to-primary-400",
  },
  {
    icon: Video,
    name: "Video Tasks",
    desc: "Record unboxing, review or challenge videos for brands",
    earning: "₹500–2,000 per video",
    gradient: "from-primary-500 to-accent-300",
  },
  {
    icon: Camera,
    name: "Photo Tasks",
    desc: "Take product photos or lifestyle shots featuring a brand",
    earning: "₹200–800 per set",
    gradient: "from-accent-400 to-primary-500",
  },
  {
    icon: Users,
    name: "Campus Ambassador",
    desc: "Represent a brand at your college — offline events and online buzz",
    earning: "₹2,000–8,000 / month",
    gradient: "from-primary-600 to-accent-500",
  },
  {
    icon: Star,
    name: "App Installs & Reviews",
    desc: "Install an app, use it, and leave an honest rating on Play Store",
    earning: "₹50–200 per install",
    gradient: "from-accent-300 to-primary-400",
  },
];

export default function ProjectCategories() {
  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Ways to <span className="text-gradient">earn</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Pick what suits your lifestyle. Do one or do all of them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl p-6 card-hover group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow-md transition-shadow`}>
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-1.5 dark:text-white">{cat.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{cat.desc}</p>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">{cat.earning}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
