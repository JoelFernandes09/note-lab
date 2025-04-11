'use client';

import {
  Button,
  useDisclosure,
  Card,
  CardBody,
  CardFooter,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
} from '@heroui/react';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';

import { deleteNote, editNote } from '@/lib/notes';

const Note = ({ id, content }: { id: string; content: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [noteContent, setNoteContent] = useState<string>('');

  return (
    <>
      <Card className='w-60 h-80 text-center' shadow={'none'}>
        <CardBody
          onClick={() => {
            setNoteContent(content);
            onOpen();
            console.log('Card Clicked!');
          }}
        >
          <div className={'flex flex-col gap-6 w-full text-center'}>{content}</div>
        </CardBody>
        <CardFooter>
          <div className={'flex justify-end w-full'}>
            <MdDelete
              onClick={() => {
                deleteNote(id);
              }}
            />
          </div>
        </CardFooter>
      </Card>
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
                          editNote(id, noteContent);
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

export default Note;
