import uniqid from 'uniqid';

import { INote } from '@/types/index';

export const saveNote = (content: string) => {
  const newNote = { id: uniqid(), content: content };

  const notes = localStorage.getItem('notelab-notes');

  if (!notes) localStorage.setItem('notelab-notes', JSON.stringify([newNote]));
  else {
    let existingNotes = JSON.parse(notes);

    existingNotes.push(newNote);
    localStorage.setItem('notelab-notes', JSON.stringify(existingNotes));
    localStorage.setItem('notelab-notes-filtered', JSON.stringify(existingNotes));
  }

  window.dispatchEvent(new Event('storage'));
};

export const deleteNote = (id: string) => {
  const storedNotes = localStorage.getItem('notelab-notes');

  if (storedNotes) {
    const notes = JSON.parse(storedNotes);
    const noteToDelete = notes.find((note: INote) => note.id === id);
    const noteIndex = notes.indexOf(noteToDelete);

    if (noteIndex != -1) notes.splice(noteIndex, 1);

    localStorage.setItem('notelab-notes', JSON.stringify(notes));
    localStorage.setItem('notelab-notes-filtered', JSON.stringify(notes));
  }

  window.dispatchEvent(new Event('storage'));
};

export const editNote = (id: string, content: string) => {
  const storedNotes = localStorage.getItem('notelab-notes');

  if (storedNotes) {
    const notes = JSON.parse(storedNotes);
    const noteToEdit = notes.find((note: INote) => note.id === id);
    const noteIndex = notes.indexOf(noteToEdit);

    if (noteIndex != -1) {
      notes[noteIndex] = {
        id: noteToEdit.id,
        content: content,
      };
    }

    localStorage.setItem('notelab-notes', JSON.stringify(notes));
    localStorage.setItem('notelab-notes-filtered', JSON.stringify(notes));
  }

  window.dispatchEvent(new Event('storage'));
};

export const setNoteFilter = (searchParams: string) => {
  const storedNotes = localStorage.getItem('notelab-notes');

  if (storedNotes) {
    const notes = JSON.parse(storedNotes);
    const filteredNotes: INote[] = notes.filter((note: INote) => note.content.includes(searchParams));

    if (filteredNotes.length > 0) localStorage.setItem('notelab-notes-filtered', JSON.stringify(filteredNotes));
    window.dispatchEvent(new Event('storage'));
  }
};

export const exportNotes = () => {
  const storedNotes = localStorage.getItem('notelab-notes');

  if (storedNotes) {
    const blob = new Blob([storedNotes], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = url;
    link.download = 'notelab-notes.json';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};

export const areNotesValid = (notes: INote[]) => {
  let isValid = true;

  notes.forEach((note) => {
    if (!note) isValid = false;
    if (!note.id) isValid = false;
    if (!note.content) isValid = false;
  });

  return isValid;
};

export const importNotes = (notes: INote[]) => {
  localStorage.setItem('notelab-notes', JSON.stringify(notes));
  localStorage.setItem('notelab-notes-filtered', JSON.stringify(notes));
  window.dispatchEvent(new Event('storage'));
};
