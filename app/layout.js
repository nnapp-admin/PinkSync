import './globals.css';

export const metadata = {
  title: 'PinkSync',
  description: 'Meet the locket that alerts your circle and shares your location — instantly, accurately, for 36 hours.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}