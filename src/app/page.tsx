import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import Enterprises from './sections/Enterprises';

export default function Home() {
  return (
    <main className='h-[10000px]'>
      <Hero />
      <WhoWeAre />
      <Enterprises />
    </main>
  );
}
