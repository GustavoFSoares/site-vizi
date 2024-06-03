import EmptySection from './sections/EmptySection';
import EnterprisesList from './sections/EnterprisesList';

export default function Home() {
  return (
    <>
      <EnterprisesList />
      <EmptySection />
    </>
  );
}
