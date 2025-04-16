'use client';

import { useEffect, useState } from 'react';

import Note from './Note';

import { INote } from '@/types/index';

const NotesDisplay = () => {
  const [existingNotes, setExistingNotes] = useState([]);

  useEffect(() => {
    const updateNotes = () => {
      const notes = localStorage.getItem('notelab-notes');
      const filteredNotes = localStorage.getItem('notelab-notes-filtered');

      if (filteredNotes && JSON.parse(filteredNotes).length > 0) setExistingNotes(JSON.parse(filteredNotes));
      else {
        if (notes) setExistingNotes(JSON.parse(notes));
      }
    };

    updateNotes();

    window.addEventListener('storage', updateNotes);

    return () => window.removeEventListener('storage', updateNotes);
  }, []);

  return (
    <>
      <div className={'flex flex-wrap items-center justify-center w-full px-8 gap-8'}>
        {existingNotes.map((note: INote) => (
          <Note key={note.id} content={note.content} id={note.id} />
        ))}
      </div>
    </>
  );
};

export default NotesDisplay;
