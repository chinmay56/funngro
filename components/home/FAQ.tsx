"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly is Funngro?",
      answer:
        "Funngro is a platform that connects teenagers with companies that need real work done — content writing, design, social media, data entry, and more. Students get paid for completing these projects.",
    },
    {
      question: "How old do you need to be to join?",
      answer:
        "Between 13 and 21. If you're under 18, a parent or guardian needs to approve your account during signup. The whole process takes a few minutes.",
    },
    {
      question: "How much can a student actually earn?",
      answer:
        "It really depends on what you work on and how much time you put in. Some students earn a few thousand a month doing small tasks. Others who take it seriously and build skills earn significantly more over time.",
    },
    {
      question: "Is this safe for teenagers?",
      answer:
        "Companies are reviewed before they can post projects. Payments go through the platform — students never share bank details directly with companies. For under-18 users, parental consent is mandatory.",
    },
    {
      question: "What kind of projects are available?",
      answer:
        "Content writing, graphic design, video editing, social media posts, data entry, basic research, and more. There are tasks for beginners and more skilled students alike.",
    },
    {
      question: "Does it cost anything to sign up?",
      answer:
        "Signing up is free. Funngro takes a small service fee from earnings when a project is completed — you don't pay anything upfront.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

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
            Common <span className="text-gradient">questions</span>
          </h2>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
