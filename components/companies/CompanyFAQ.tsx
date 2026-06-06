"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CompanyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are these actually verified students?",
      answer:
        "Yes. Every student goes through identity verification and, for those under 18, parental consent. We also run skill checks before students can take on projects in specific categories.",
    },
    {
      question: "What kind of work can I get done through Funngro?",
      answer:
        "Content writing, graphic design, social media management, video editing, data entry, basic web work, market research — tasks that don't require full-time hiring but still take up your team's time.",
    },
    {
      question: "How do I know the quality will be acceptable?",
      answer:
        "You review the work before approving payment. If it doesn't meet the brief, you can ask for revisions. We don't release payment until you're satisfied. Student ratings are also publicly visible so you can choose accordingly.",
    },
    {
      question: "How quickly can I get someone working on my project?",
      answer:
        "After you post a project, students can apply within hours. You pick who you want based on their profile, past work, and ratings. Most companies get started within 24–48 hours.",
    },
    {
      question: "What happens if a student goes quiet or misses the deadline?",
      answer:
        "You can raise a dispute with our support team. If the work isn't delivered as agreed, we step in. Repeated defaults affect a student's standing on the platform.",
    },
    {
      question: "Can I keep working with the same student again?",
      answer:
        "Absolutely. If you find someone who works well for you, you can directly invite them to future projects. A lot of companies end up building a small consistent pool of students this way.",
    },
    {
      question: "How is pricing decided?",
      answer:
        "You set the budget for your project. Students bid or accept based on what's listed. Rates depend on the type of work and the student's experience level — there's no fixed pricing across the board.",
    },
    {
      question: "Is there a contract or long-term commitment?",
      answer:
        "No. Each project is independent. You're not locked into anything. Hire for one task, or post 50 — it's up to you.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Things companies <span className="text-gradient">usually ask</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Straight answers before you decide.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-semibold dark:text-white pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 dark:text-primary-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
