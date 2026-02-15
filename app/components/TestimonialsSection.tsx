'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Murphy',
    rating: 5,
    comment: 'Exceptional service from start to finish. The team made me feel comfortable throughout.',
  },
  {
    name: 'Aileen Kelly',
    rating: 5,
    comment: 'Best dental experience I\'ve had. Modern facilities and friendly, professional staff.',
  },
  {
    name: 'Patrick O\'Sullivan',
    rating: 5,
    comment: 'Highly recommended for anyone seeking quality dental care in a welcoming environment.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="text-[#8892b0] text-lg">Real stories from our satisfied patients</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#112240]/50 rounded-lg p-6 border border-[#de1352]/10 hover:border-[#de1352]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#de1352]">★</span>
                ))}
              </div>
              <p className="text-[#ccd6f6] mb-4 italic">\"{testimonial.comment}\"</p>
              <p className="text-white font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
