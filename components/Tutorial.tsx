'use client';

import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import { Button } from '@heroui/react';
import { useEffect } from 'react';

const Tutorial = () => {
  const startTour = () => {
    localStorage.setItem('notelab-tour', 'true');
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        scrollTo: true,
        cancelIcon: {
          enabled: true,
        },
        classes: 'pencil-border',
        modalOverlayOpeningPadding: 10,
        modalOverlayOpeningRadius: 5,
      },
      useModalOverlay: true,
    });

    tour.addSteps([
      {
        id: 'intro',
        text: 'Welcome to NoteLab. A sleek, minimalist & locally stored note-taking application',
        buttons: [
          {
            text: 'Next',
            action: tour.next,
            classes: 'pencil-border !bg-white !text-black',
          },
        ],
      },
      {
        id: 'feature-local',
        text: 'Notelab stores all your notes in your browser making it secure & only accesible by you',
        buttons: [
          {
            text: 'Back',
            action: tour.back,
            classes: 'pencil-border !bg-white !text-black',
          },
          {
            text: 'Next',
            action: tour.next,
            classes: 'pencil-border !bg-white !text-black',
          },
        ],
      },
      {
        id: 'add-note',
        text: 'You can add notes from here',
        attachTo: {
          element: '#add-note-button',
          on: 'bottom',
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back,
            classes: 'pencil-border !bg-white !text-black',
          },
          {
            text: 'Next',
            action: tour.next,
            classes: 'pencil-border !bg-white !text-black',
          },
        ],
      },
      {
        id: 'search-note',
        text: 'You can do a search throughout your notes here',
        attachTo: {
          element: '#search-notes-input',
          on: 'bottom',
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back,
            classes: 'pencil-border !bg-white !text-black',
          },
          {
            text: 'Next',
            action: tour.next,
            classes: 'pencil-border !bg-white !text-black',
          },
        ],
      },
      {
        id: 'import-export-note',
        text: 'You can also export your notes into JSON format & import the same on another browser to restore your notes',
        attachTo: {
          element: '#notes-import-export',
          on: 'bottom',
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back,
            classes: 'pencil-border !bg-white !text-black',
          },
          {
            text: 'Next',
            action: tour.next,
            classes: 'pencil-border !bg-white !text-black',
          },
        ],
      },
      {
        id: 'github',
        text: 'Notelabs is Open Source, make sure to check it out on GitHub!',
        attachTo: {
          element: '#github-button',
          on: 'bottom',
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back,
            classes: 'pencil-border !bg-white !text-black',
          },
          {
            text: 'Next',
            action: tour.next,
            classes: 'pencil-border !bg-white !text-black',
          },
        ],
      },
      {
        id: 'upcoming-features',
        text: 'Notelab is constantly being updated, some features that are coming soon are - Supabase Auth & Storage, Labels to sort / filter notes & more!',
        buttons: [
          {
            text: 'Back',
            action: tour.back,
            classes: 'pencil-border !bg-white !text-black',
          },
          {
            text: 'Finish',
            action: tour.complete,
            classes: 'pencil-border !bg-white !text-black',
          },
        ],
      },
    ]);

    tour.start();
  };

  useEffect(() => {
    const initialTour = () => {
      const isTourTaken = localStorage.getItem('notelab-tour');

      if (!isTourTaken) startTour();
    };

    initialTour();
  }, []);

  return (
    <>
      <div className={''}>
        <Button className={'text-black'} color={'primary'} variant={'light'} onPress={startTour}>
          Retake Tour
        </Button>
      </div>
    </>
  );
};

export default Tutorial;
