import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import Enterprises from './sections/Enterprises';
import EmptySection from './sections/EmptySection';

export default function Home() {
  return (
    <main className='h-[100vh]'>
      <Hero />
      <WhoWeAre />
      <Enterprises />
      <EmptySection />
    </main>
  );
}
