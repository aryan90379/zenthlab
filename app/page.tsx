// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Thesis from '@/components/Thesis';
import Products from '@/components/Products';
import HowWeThink from '@/components/HowWeThink';
import Industries from '@/components/Industries';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Thesis />
      <Products />
      <HowWeThink />
      <Industries />
      {/* Add your CTA section here */}
      <Footer />
    </main>
  );
}