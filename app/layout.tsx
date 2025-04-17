import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontKalam } from '@/config/fonts';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-WE24G2HMTC`} strategy='afterInteractive' />
        <Script id='ga-script' strategy='afterInteractive'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WE24G2HMTC', {
                page_path: window.location.pathname,
              });
          `}
        </Script>
      </head>
      <body className={clsx('min-h-screen notepad-background font-sans antialiased', fontKalam.className)}>
        <div className={''}>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
