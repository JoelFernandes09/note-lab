import { Divider } from '@heroui/react';

import Header from '@/components/Header';
import NotesDisplay from '@/components/NotesDisplay';

const Home = async () => {
  return (
    <section className='flex flex-col items-center gap-4 py-8 md:py-10'>
      <Header />
      <Divider className={'pencil-border w-full mt-4 mb-12'} />
      <NotesDisplay />
    </section>
  );
};

export default Home;
