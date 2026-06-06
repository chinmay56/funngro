"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TeenFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can join Funngro?",
      answer:
        "Students between 13–21 years can join. If you're under 18, you'll need a parent or guardian to give consent during signup — it's a quick step.",
    },
    {
      question: "Do I need experience to get projects?",
      answer:
        "Not necessarily. There are beginner-friendly tasks like data entry, simple writing, or social media posting that don't require a portfolio. As you complete more projects, better ones open up.",
    },
    {
      question: "How does payment work?",
      answer:
        "Once a company approves your submitted work, the payment is released to your account. You can withdraw via UPI or bank transfer. It usually takes 3–5 working days to reflect.",
    },
    {
      question: "Will this affect my studies?",
      answer:
        "That's completely up to you. Most projects are flexible — no fixed hours, no daily check-ins. A lot of students work on weekends or after school. You decide when and how much.",
    },
    {
      question: "Is Funngro free to join?",
      answer:
        "Yes, joining is free. Funngro takes a small platform fee when you get paid — you keep the majority of your earnings.",
    },
    {
      question: "What if the company doesn't approve my work?",
      answer:
        "If there's a genuine dispute, our support team steps in. Companies can ask for revisions, and if something is unfair, you can raise a complaint. We don't just side with companies automatically.",
    },
    {
      question: "Can I work on more than one project at a time?",
      answer:
        "Yes. Just make sure you can actually deliver on time. Taking on too much and missing deadlines will hurt your rating, which makes it harder to get good projects later.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Got <span className="text-gradient">questions?</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Honest answers, no fluff.
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
