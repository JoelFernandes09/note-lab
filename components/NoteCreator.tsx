'use client';

import { Card, CardBody, Button, Textarea } from '@heroui/react';
import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';

const NoteCreator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onFocusChange = (value: boolean) => {
    setIsVisible(value);
  };

  return (
    <>
      <div className={'flex justify-center w-full'}>
        <div className={'absolute bottom-0 right-0 mr-4 mb-4'}>
          <Button
            className={'w-24 h-24 rounded-full hover:bg-primary dark:hover:text-black hover:text-white hover:animate-bounce'}
            color={'primary'}
            radius={'full'}
            variant={'bordered'}
          >
            <IoAdd size={30} />
          </Button>
        </div>
        <Card className='w-1/2 text-center pencil-border'>
          <CardBody>
            <div className={'flex flex-col gap-6 w-full text-center'}>
              <Textarea
              className={'pencil-border'}
                color={'primary'}
                name={'search'}
                placeholder='Take a note'
                size={'md'}
                type='text'
                variant={'bordered'}
                radius={'none'}
              >
                {' '}
              </Textarea>
              <Button
                className={'hover:bg-primary dark:hover:text-black hover:text-white pencil-border'}
                color={'primary'}
                variant={'bordered'}
              >
                Save
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default NoteCreator;
