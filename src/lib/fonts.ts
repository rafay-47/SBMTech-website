import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter-v11-latin-100.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter-v11-latin-200.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter-v11-latin-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter-v11-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter-v11-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter-v11-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter-v11-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter-v11-latin-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter-v11-latin-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
}); 