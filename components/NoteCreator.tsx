'use client';

import {
  addToast,
  Button,
  useDisclosure,
  Card,
  CardBody,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
} from '@heroui/react';
import { IoAdd } from 'react-icons/io5';
import { useState } from 'react';

import { saveNote } from '@/lib/notes';

const NoteCreator = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [noteContent, setNoteContent] = useState<string>('');

  const createNote = async () => {
    if (noteContent.length < 1)
      return addToast({
        title: 'Error',
        description: 'Cannot save an empty note',
        color: 'danger',
        classNames: { base: 'pencil-border' },
      });

    saveNote(noteContent);

    addToast({
      title: 'Success',
      description: 'Note saved successfully!',
      color: 'success',
      classNames: { base: 'pencil-border' },
    });
    setNoteContent('');
  };

  return (
    <>
      <Button
        className={'text-black pencil-border w-full h-10 md:h-full md:w-24'}
        color={'primary'}
        endContent={<IoAdd className={'outline-none'} size={20} />}
        variant={'solid'}
        onPress={onOpen}
      />
      <Modal className={'pencil-border'} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex text-3xl -mb-4'>Take a note</ModalHeader>
              <div className={'flex justify-center w-full h-full'}>
                <Card className='w-full text-center' shadow={'none'}>
                  <CardBody>
                    <div className={'flex flex-col gap-6 w-full text-center'}>
                      <Textarea
                        isClearable
                        className={'pencil-border'}
                        color={'primary'}
                        errorMessage='Cannot save an empty note!'
                        maxRows={15}
                        minRows={10}
                        name={'search'}
                        placeholder='Start Typing...'
                        radius={'none'}
                        size={'md'}
                        type='text'
                        value={noteContent}
                        variant={'bordered'}
                        onValueChange={setNoteContent}
                      >
                        {' '}
                      </Textarea>
                      <Button
                        className={'text-black pencil-border'}
                        color={'primary'}
                        variant={'solid'}
                        onPress={() => {
                          onClose();
                          createNote();
                        }}
                      >
                        Save
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NoteCreator;
