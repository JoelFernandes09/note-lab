'use client';
import { FaSearch } from 'react-icons/fa';
import { CiImport, CiExport } from 'react-icons/ci';
import { Button, ButtonGroup, Input } from '@heroui/react';
import { useState, useEffect } from 'react';

import NoteCreator from './NoteCreator';

import { fontKalam } from '@/config/fonts';
import { setNoteFilter } from '@/lib/notes';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setNoteFilter(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className={'flex justify-between w-full px-8 md:px-10'}>
        <div className={'flex items-center'}>
          <p className={`font-bold text-4xl ${fontKalam.className}`}>notelab.</p>
        </div>

        <div className={'flex items-center w-1/2'}>
          <NoteCreator />
          <Input
            className={'pencil-border'}
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

        <div className={'flex items-center gap-4'}>
          <ButtonGroup>
            <Button
              className={'text-black pencil-border'}
              color={'primary'}
              endContent={<CiImport className={'outline-none'} size={20} />}
              variant={'solid'}
            >
              Import
            </Button>
            <Button
              className={'text-black pencil-border'}
              color={'primary'}
              endContent={<CiExport className={'outline-none'} size={20} />}
              variant={'solid'}
            >
              Export
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Header;
