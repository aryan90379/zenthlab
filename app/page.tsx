// app/page.tsx

import Hero from '@/components/Hero';
import Thesis from '@/components/Thesis';
import Products from '@/components/Products';
import HowWeThink from '@/components/HowWeThink';
import Industries from '@/components/Industries';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main>
    
      <Hero />
      <Thesis />
      <Products />
      <HowWeThink />
      <Industries />
      <Cta/>
      {/* Add your CTA section here */}
     
    </main>
  );
}