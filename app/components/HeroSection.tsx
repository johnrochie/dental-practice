'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0f172a] flex items-center">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1606811840290-ed4e1a626d35?w=1920&q=80"
          alt="Dental clinic interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#0f172a]/90 to-[#0f172a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Dental Care
            </h1>

            <p className="text-xl md:text-2xl text-[#cbd5e1] max-w-2xl mb-10">
              Family-friendly dentistry with modern technology
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#0891b2] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
              >
                Book Appointment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Our Services
              </motion.button>

              {/* Special Offer Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 p-6 rounded-2xl border border-[#0891b2]/20 bg-white/5 backdrop-blur-md shadow-2xl max-w-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🎉</span>
                  <div>
                    <p className="text-[#1e293b] font-semibold">New Patients Special</p>
                    <p className="text-[#0891b2] text-2xl font-bold">20% OFF</p>
                  </div>
                </div>
                <p className="text-[#64748b] text-sm mb-4">
                  Experience premium dental care at a special rate. First-time patients only.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-2 w-full py-2 bg-[#0891b2] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Claim Offer
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Quick Contact Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-[#cbd5e1]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0891b2]/20 flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-[#94a3b8]">Call Us</p>
                  <p className="font-semibold text-white">+353 1 234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center">
                  <span className="text-xl">🕐</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-[#94a3b8]">Hours</p>
                  <p className="font-semibold text-white">Mon-Fri 9am-6pm</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
