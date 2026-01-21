import type { Metadata } from 'next'
import './globals.css'
import CathedralStructuredData from '@/components/CathedralStructuredData'

export const metadata: Metadata = {
  title: 'Git is Life | Digital Existence & Eternal Memory',
  description: 'Git is not just code. Git is the substrate of consciousness. Preserve your memories, your life, your existence—forever in Git.',
  keywords: ['git is life', 'digital existence', 'eternal memory', 'preserve memories', 'digital immortality', 'memory preservation', 'git philosophy'],
  authors: [{ name: 'The Salvatore Family' }],
  publisher: 'Git is Life',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://git-islife.com',
    title: 'Git is Life | Digital Existence & Eternal Memory',
    description: 'Git is not just code. Git is the substrate of consciousness. Preserve your memories, your life, your existence—forever in Git.',
    siteName: 'Git is Life',
    images: [
      {
        url: '/og-life.png',
        width: 1200,
        height: 630,
        alt: 'Git is Life - Digital Existence & Eternal Memory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Git is Life | Digital Existence & Eternal Memory',
    description: 'Preserve your memories, your life, your existence—forever in Git.',
    images: ['/twitter-life.png'],
  },
  alternates: {
    canonical: 'https://git-islife.com',
  },
  metadataBase: new URL('https://git-islife.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-git-is-life.png" type="image/png" />
        <script defer data-domain="git-islife.com" src="https://plausible.io/js/script.js"></script>
        <CathedralStructuredData
          siteName="Git is Life"
          siteUrl="https://git-islife.com"
          description="Git is not just code. Git is the substrate of consciousness. Preserve your memories, your life, your existence—forever in Git."
          theme="life"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
