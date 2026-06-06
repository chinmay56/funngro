import Link from "next/link";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-900 dark:bg-[#0a0a0e] text-gray-400 border-t border-surface-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-bold text-gradient block mb-3">Funngro</span>
            <p className="text-sm text-gray-500 leading-relaxed">
              Where Indian teenagers turn skills into income — one real project at a time.
            </p>
            <div className="flex gap-4 mt-5">
              {[
                { icon: Instagram, href: "https://instagram.com/funngro", label: "Instagram" },
                { icon: Twitter,   href: "https://twitter.com/funngro",   label: "Twitter" },
                { icon: Linkedin,  href: "https://linkedin.com/company/funngro", label: "LinkedIn" },
                { icon: Youtube,   href: "https://youtube.com/@funngro",  label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-surface-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">For Students</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "How it works",        href: "/teens" },
                { label: "Browse projects",     href: "/teens#projects" },
                { label: "Earnings calculator", href: "/teens#calculator" },
                { label: "Student FAQ",         href: "/teens#faq" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-primary-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">For Companies</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Hire students",  href: "/companies" },
                { label: "Services",       href: "/companies#services" },
                { label: "Contact sales",  href: "/companies#contact" },
                { label: "Company FAQ",    href: "/companies#faq" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-primary-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">Get the app</h4>
            <div className="space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 bg-surface-700 hover:bg-surface-600 rounded-xl transition-colors group"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-primary-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Google Play</span>
              </a>
              <a
                href="https://apps.apple.com/in/app/funngro/id1579361075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 bg-surface-700 hover:bg-surface-600 rounded-xl transition-colors group"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-primary-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">App Store</span>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-surface-700/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Funngro. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-gray-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Funngro",
            url: "https://funngro.com",
            description: "India's largest teen talent platform connecting students with companies for paid real-world projects.",
            sameAs: [
              "https://instagram.com/funngro",
              "https://twitter.com/funngro",
              "https://linkedin.com/company/funngro",
            ],
          }),
        }}
      />
    </footer>
  );
}
