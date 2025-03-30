'use client';
import { CgNotes } from 'react-icons/cg';
import { FaSearch } from 'react-icons/fa';
import { CiImport, CiExport } from 'react-icons/ci';
import { Button, ButtonGroup, Input } from '@heroui/react';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { fontKalam } from '@/config/fonts';

const Header = () => {
  const onSearchValueChange = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div className={'flex justify-between w-full px-8 md:px-10'}>
        <div className={'flex items-center'}>
          <CgNotes size={40} /> <span className={`font-bold text-4xl ${fontKalam.className}`}>NoteLab</span>
        </div>

        <div className={'flex w-1/2'}>
          <Input
            color={'primary'}
            name={'search'}
            placeholder='Search Notes'
            size={'md'}
            startContent={<FaSearch />}
            type='text'
            variant={'underlined'}
            onValueChange={onSearchValueChange}
            className={'pencil-border'}
          />
        </div>

        <div className={'flex items-center gap-4'}>
          <ButtonGroup>
            <Button
              className={'hover:bg-primary dark:hover:text-black hover:text-white pencil-border'}
              color={'primary'}
              endContent={<CiImport size={20} />}
              variant={'bordered'}
            >
              Import
            </Button>
            <Button
              className={'hover:bg-primary dark:hover:text-black hover:text-white pencil-border'}
              color={'primary'}
              endContent={<CiExport size={20} />}
              variant={'bordered'}
            >
              Export
            </Button>
          </ButtonGroup>
          {/* <div>
            <ThemeSwitcher />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
