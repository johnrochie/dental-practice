'use client';

import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section className="py-20 bg-[#1e293b]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-[#64748b] text-lg">Get in touch to schedule your appointment</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#64748b] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#1e293b] border border-[#0891b2]/20 rounded-lg text-white focus:border-[#0891b2] focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#64748b] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#1e293b] border border-[#0891b2]/20 rounded-lg text-white focus:border-[#0891b2] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#64748b] mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-[#1e293b] border border-[#0891b2]/20 rounded-lg text-white focus:border-[#0891b2] focus:outline-none transition-colors"
                  placeholder="+353 1 234 5678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#64748b] mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1e293b] border border-[#0891b2]/20 rounded-lg text-white focus:border-[#0891b2] focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-[#0891b2] hover:bg-[#0ea5e9] text-[#1e293b] font-semibold rounded-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-[#1e293b]/50 rounded-lg p-6 border border-[#0891b2]/20">
              <h3 className="text-xl font-semibold text-white mb-3">Address</h3>
              <p className="text-[#64748b]">
                123 Main Street<br />
                Dublin, Ireland<br />
                D02 XY12
              </p>
            </div>

            <div className="bg-[#1e293b]/50 rounded-lg p-6 border border-[#0891b2]/20">
              <h3 className="text-xl font-semibold text-white mb-3">Opening Hours</h3>
              <p className="text-[#64748b]">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 9am - 2pm<br />
                Sunday: Closed
              </p>
            </div>

            <div className="bg-[#1e293b]/50 rounded-lg p-6 border border-[#0891b2]/20">
              <h3 className="text-xl font-semibold text-white mb-3">Contact Details</h3>
              <p className="text-[#64748b]">
                Phone: +353 1 234 5678<br />
                Email: info@premierdental.ie
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
