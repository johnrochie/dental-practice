import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premier Dental Care | Family-Friendly Dentistry',
  description: 'Experienced dentists providing general, cosmetic, and emergency care. Modern technology, gentle care, 20% off for new patients.',
  keywords: 'dental care, dentist, teeth whitening, braces, cosmetic dentistry, emergency dentist',
  openGraph: {
    title: 'Premier Dental Care | Family-Friendly Dentistry',
    description: 'Experienced dentists providing general, cosmetic, and emergency care. Modern technology, gentle care, 20% off for new patients.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'Premier Dental Care',
  },
  twitter: {
    card: 'summary',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
