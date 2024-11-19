import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/sonner';
import Navigation from './components/navigation';
import Navigation1 from './components/navigation1';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sudip Kumar | Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navigation /> */}
          <Navigation1/>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}