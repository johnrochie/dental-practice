import { HeroSection } from './components/HeroSection';
import { Services } from './components/Services';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <HeroSection />
      <Services />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-[#112240]/50 bg-[#0a192f] py-8 text-center">
        <p className="text-[#8892b0] text-sm">
          © {new Date().getFullYear()} Premier Dental Care. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
