import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import Enterprises from './sections/Enterprises';
import Benefits from './sections/Benefits';
import TimeToChangeIsNow from './sections/TimeToChangeIsNow';
import Depositions from './sections/Depositions';

import EmptySection from './sections/EmptySection';

export default function Home() {
  return (
    <main className='h-[100vh]'>
      <Hero />
      <WhoWeAre />
      <Enterprises />
      <Benefits />
      <TimeToChangeIsNow />
      <Depositions />
      <EmptySection />
    </main>
  );
}
