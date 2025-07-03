import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PremiumHero from '@/components/PremiumHero';
import About from '@/components/About';
import Research from '@/components/Research';
import Publications from '@/components/Publications';
import Gallery from '@/components/Gallery';
import News from '@/components/News';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PremiumHero />
        <About />
        <Research />
        <Publications />
        <Gallery />
        <News />
      </main>
      <Footer />
    </div>
  );
}
