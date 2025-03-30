import { Divider } from '@heroui/react';

import Header from '@/components/Header';
import NoteCreator from '@/components/NoteCreator';

export default function Home() {
  return (
    <section className='flex flex-col items-center gap-4 py-8 md:py-10'>
      <Header />
      <Divider className={'pencil-border w-full mt-8 mb-12'} />
      <NoteCreator />
    </section>
  );
}
