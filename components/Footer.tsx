import Link from 'next/link';

import Tutorial from './Tutorial';

const Footer = () => {
  return (
    <>
      <div className={'flex flex-col items-center justify-center mb-0 mt-4'}>
        <Tutorial />
        <p>
          Made with ♥ by{' '}
          <Link href={'https://joelfernandes.co.in'} target={'_blank'}>
            Joel
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
