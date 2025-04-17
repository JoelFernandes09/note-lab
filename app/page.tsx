import { Divider } from '@heroui/react';

import Header from '@/components/Header';
import NotesDisplay from '@/components/NotesDisplay';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <section className='min-h-screen flex flex-col gap-4 py-8 md:py-10 items-center'>
      <Header />
      <Divider className='pencil-border w-full mt-4 mb-12' />

      <div className='flex-1'>
        <NotesDisplay />
      </div>

      <Footer />
    </section>
  );
};

export default Home;
