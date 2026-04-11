import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'PKS Stalowa Wola — bezpieczna podróż od 1999',
    template: '%s · PKS Stalowa Wola',
  },
  description:
    'Komunikacja pasażerska, wynajem autokarów, stacje paliw, SKP i biuro podróży. PKS Stalowa Wola — od 1999 łączymy ludzi i miejsca.',
  metadataBase: new URL('https://pksstwola.example'),
  openGraph: {
    type: 'website',
    siteName: 'PKS Stalowa Wola',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning className={`${inter.variable} ${display.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
