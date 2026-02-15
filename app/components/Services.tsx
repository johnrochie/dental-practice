'use client';

import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive care including cleanings, exams, and preventative treatments.',
    icon: '🦷',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers for your perfect look.',
    icon: '✨',
  },
  {
    title: 'Orthodontics',
    description: 'Braces, Invisalign, and alignment treatments for all ages.',
    icon: '😊',
  },
  {
    title: 'Emergency Care',
    description: 'Urgent dental services available when you need us most.',
    icon: '🚑',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-[#0f0f0f]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-[#8892b0] text-lg">Expert dental care for your entire family</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-[#00bcd4]/20 bg-[#112240]/30 p-6 hover:border-[#00bcd4]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00bcd4]/20"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00bcd4] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#8892b0] text-sm leading-relaxed">{service.description}</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 text-[#00bcd4] font-medium hover:text-white transition-colors text-sm"
              >
                Learn More →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
