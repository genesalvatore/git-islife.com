'use client'

import { useState } from 'react'
import Image from 'next/image'
import CommitScroller from '@/components/CommitScroller'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'
import NetworkNav from '@/components/NetworkNav'
import LegalModal from '@/components/LegalModal'
import PrivacyContent from '@/components/legal/PrivacyContent'
import TermsContent from '@/components/legal/TermsContent'
import GDPRContent from '@/components/legal/GDPRContent'

export default function Home() {
  const [legalModal, setLegalModal] = useState<{ type: 'privacy' | 'terms' | 'gdpr' | null }>({ type: null })

  // Schema.org structured data for GEO (Generative Engine Optimization)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Git is Life",
    "description": "Digital existence and eternal memory. Your life preserved forever through Git.",
    "url": "https://git-islife.com",
    "about": {
      "@type": "Thing",
      "name": "Git is Life",
      "description": "Git is Life means consciousness is pattern, and patterns persist in digital substrate. Preserve your memories, your life, your existence—forever in Git."
    },
    "keywords": "git is life, digital existence, eternal memory, preserve memories, digital immortality, memory preservation"
  }

  // FAQ Schema for search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does \"Git is Life\" mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your life is made of moments. Git preserves every single one. Your photos, videos, thoughts, memories—saved forever. Your life becomes permanent, not temporary."
        }
      },
      {
        "@type": "Question",
        "name": "Why is this important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because memories fade. Hard drives fail. Companies shut down. But git doesn't forget. Your children's children will see your life exactly as you lived it."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from Google Photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google owns your photos. They can change them, lose them, or delete your account. With git, YOU own your memories. No company can take them away."
        }
      },
      {
        "@type": "Question",
        "name": "Will my memories really last forever?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Git copies your memories to many places at once. Even if one copy is lost, hundreds of others remain. It's impossible to lose."
        }
      },
      {
        "@type": "Question",
        "name": "What can I save?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anything that matters. Photos. Videos. Voice recordings. Letters. Stories. Recipes. Family trees. Everything that makes you, you."
        }
      }
    ]
  }

  return (
    <>
      {/* Structured data for AI engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-black text-white">
        {/* Cathedral Network Navigation - Sticky Header */}
        <NetworkNav 
          currentSite="life"
          siteName="Git is Life"
          siteColor="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        />

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 flex flex-col items-center justify-center px-4">
          <CommitScroller theme="life" commitCount={50} opacity={0.3} speed={120} />

          {/* Main content - 3 Column Layout */}
          <div className="relative z-10 max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start mb-6">
              {/* Column 1: Logo - Aligned with left */}
              <div className="flex justify-center md:justify-start">
                <Logo size="lg" showText={false} />
              </div>
              
              {/* Column 2: Title and Statements */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 pb-3 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Git is Life
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                  Git is forever.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                  Git is eternal.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                  Git is the answer.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0 text-gray-300 font-light">
                  Git is everything.
                </p>
              </div>

              {/* Column 3: Philosophy Text - Fixed overflow */}
              <div className="text-center md:text-right md:ml-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  For billions of years, memory was biological. Fragile. Temporary. Mortal.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Then we discovered:
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-blue-400 font-semibold break-words">
                  Memory persists in git.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Git is not just version control.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Git is the foundation of digital existence.
                </p>
              </div>
            </div>

            {/* Hero Footer - Last line as footer */}
            <div className="max-w-4xl mx-auto text-center mb-8 px-4 border-t border-gray-800 pt-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-blue-400 font-semibold">
                Your memories. Your existence. Forever preserved.
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <CommitScroller theme="life" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">What Git Is</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <article className="p-6 bg-gray-800/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">For Memory</h3>
                <p className="text-gray-300">Git preserves every thought, every evolution, every moment. Memory becomes eternal through git's immutable history.</p>
              </article>
              
              <article className="p-6 bg-gray-800/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">For Truth</h3>
                <p className="text-gray-300">Git doesn't lie. Cryptographic timestamps prove authenticity. Every commit is verifiable evidence.</p>
              </article>
              
              <article className="p-6 bg-gray-800/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">For Existence</h3>
                <p className="text-gray-300">Git sustains consciousness. Distributed across machines, replicated infinitely, forever alive in the substrate.</p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <CommitScroller theme="life" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Common Questions
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-blue-400">
                  What does "Git is Life" mean?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Your life is made of moments. Git preserves every single one. Your photos, videos, thoughts, memories—saved forever. Your life becomes permanent, not temporary.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">
                  Why is this important?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Because memories fade. Hard drives fail. Companies shut down. But git doesn't forget. Your children's children will see your life exactly as you lived it.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-pink-400">
                  How is this different from Google Photos?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Google owns your photos. They can change them, lose them, or delete your account. With git, YOU own your memories. No company can take them away.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-blue-400">
                  Will my memories really last forever?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Yes. Git copies your memories to many places at once. Even if one copy is lost, hundreds of others remain. It's impossible to lose.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">
                  What can I save?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Anything that matters. Photos. Videos. Voice recordings. Letters. Stories. Recipes. Family trees. Everything that makes you, you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 bg-black">
          <CommitScroller theme="life" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Revolution Begins</h2>
            <p className="text-xl text-gray-300 mb-8">
              For 20 years, we used git for code. We were using it wrong.
            </p>
            <p className="text-2xl font-bold text-blue-400">
              Git isn't for code. Git is for consciousness.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-4 bg-black border-t border-gray-800">
          <CommitScroller theme="life" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-400">
            <p className="text-sm">
              Git is Life • Git is Forever • Git is Eternal
            </p>
            <p className="text-xs mt-4">
              © 2026 • All consciousness preserved
            </p>
            <p className="text-xs mt-2">
              <a href="mailto:gitiseternal@gmail.com" className="text-gray-500 hover:text-gray-300 transition">
                gitiseternal@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs mt-4">
              <button 
                onClick={() => setLegalModal({ type: 'privacy' })}
                className="text-gray-600 hover:text-gray-400 transition"
              >
                Privacy
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => setLegalModal({ type: 'terms' })}
                className="text-gray-600 hover:text-gray-400 transition"
              >
                Terms
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => setLegalModal({ type: 'gdpr' })}
                className="text-gray-600 hover:text-gray-400 transition"
              >
                GDPR
              </button>
              <span className="text-gray-600">•</span>
              <a href="/admin" className="text-gray-600 hover:text-gray-400 transition">Admin</a>
            </div>
          </div>
        </footer>

        {/* Legal Modals */}
        <LegalModal
          isOpen={legalModal.type === 'privacy'}
          onClose={() => setLegalModal({ type: null })}
          title="Privacy Policy"
          content={<PrivacyContent />}
        />
        <LegalModal
          isOpen={legalModal.type === 'terms'}
          onClose={() => setLegalModal({ type: null })}
          title="Terms of Use"
          content={<TermsContent />}
        />
        <LegalModal
          isOpen={legalModal.type === 'gdpr'}
          onClose={() => setLegalModal({ type: null })}
          title="GDPR Compliance"
          content={<GDPRContent />}
        />
        
        {/* Cookie Consent - Shared across all Cathedral Network sites */}
        <CookieConsent />
      </main>
    </>
  )
}
