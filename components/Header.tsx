'use client';
import { FaSearch, FaGithub } from 'react-icons/fa';
import { CiImport, CiExport } from 'react-icons/ci';
import { Button, ButtonGroup, Input, addToast } from '@heroui/react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import NoteCreator from './NoteCreator';

import { fontKalam } from '@/config/fonts';
import { areNotesValid, exportNotes, importNotes, setNoteFilter } from '@/lib/notes';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setNoteFilter(searchValue);
  }, [searchValue]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const text = await file.text();
      const jsonData = JSON.parse(text);

      if (jsonData.length < 1) {
        addToast({
          title: 'Error',
          description: 'Could not find notes!',
          color: 'danger',
          classNames: { base: 'pencil-border' },
        });

        return;
      }

      if (!areNotesValid(jsonData)) {
        addToast({
          title: 'Error',
          description: 'Invalid Notes',
          color: 'danger',
          classNames: { base: 'pencil-border' },
        });

        return;
      }

      importNotes(jsonData);
      addToast({
        title: 'Success',
        description: 'Successfully restored notes!',
        color: 'success',
        classNames: { base: 'pencil-border' },
      });
    } catch (e) {
      console.log(`Invalid JSON file uploaded! ${e}`);
      addToast({
        title: 'Error',
        description: 'Invalid JSON File',
        color: 'danger',
        classNames: { base: 'pencil-border' },
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className={'flex flex-col items-center justify-between w-full px-8 md:flex-row md:items-stretch'}>
        <div className={'flex items-center'}>
          <p className={`font-bold text-4xl ${fontKalam.className}`}>notelab.</p>
        </div>

        <div className={'flex flex-col-reverse items-center w-full md:flex-row md:w-1/2'}>
          <NoteCreator />
          <Input
            className={'pencil-border'}
            id={'search-notes-input'}
            name={'search'}
            placeholder='Search Notes'
            radius={'none'}
            size={'md'}
            startContent={<FaSearch />}
            type='text'
            value={searchValue}
            onValueChange={setSearchValue}
          />
        </div>

        <div className={'mt-4 md:flex md:items-center md:gap-4 md:mt-0'}>
          <input
            ref={fileInputRef}
            accept='.json'
            style={{ display: 'none' }}
            type='file'
            onChange={handleFileChange}
          />
          <ButtonGroup id={'notes-import-export'}>
            <Button
              className={'text-black pencil-border'}
              color={'primary'}
              endContent={<CiImport className={'outline-none'} size={20} />}
              variant={'solid'}
              onPress={triggerFileInput}
            >
              <span className={'md:hidden lg:block'}>Import</span>
            </Button>
            <Button
              className={'text-black pencil-border'}
              color={'primary'}
              endContent={<CiExport className={'outline-none'} size={20} />}
              variant={'solid'}
              onPress={exportNotes}
            >
              <span className={'md:hidden lg:block'}>Export</span>
            </Button>
          </ButtonGroup>
          <Link
            className={'hidden md:block'}
            href={'https://github.com/JoelFernandes09/note-lab'}
            id={'github-button'}
            target={'_blank'}
          >
            <FaGithub size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
