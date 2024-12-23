import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "Blockchain FL - Modern IT Staffing & MSP Solutions",
    template: "%s - Blockchain FL - Modern IT Staffing & MSP Solutions"
  },
  description: 'Leading MSP and IT staffing provider specializing in EOR and AOR services. Empowering businesses with cutting-edge technology solutions.',
  keywords: [
    'Blockchain', 'Blockchainfl', 'Blockchain FL', 'IT staffing', 'MSP solutions', 'EOR services', 'AOR services',
    'IT services', 'technology solutions', 'global workforce', 'managed IT services', 'digital transformation',
    'cloud integration', 'cybersecurity solutions', 'data analytics', 'business process automation', 'talent acquisition',
    'offshore staffing', 'nearshore staffing', 'recruitment solutions', 'blockchain technology', 'modern IT services'
  ],
  twitter: {
    card: 'summary_large_image',
    title: "Blockchain FL - Modern IT Staffing & MSP Solutions",
    description: 'Blockchain FL provides cutting-edge MSP and IT staffing solutions, specializing in EOR and AOR services.',
    image: 'https://blockchainfl.com/opengraph-image.png', 
    site: '@BlockchainFL'  
  },
  openGraph: {
    title: "Blockchain FL - Modern IT Staffing & MSP Solutions",
    description: 'Explore innovative IT staffing and MSP solutions tailored to your business needs with Blockchain FL.',
    url: 'https://blockchainfl.com', 
    type: 'website',
    images: [
      {
        url: 'https://blockchainfl.com/opengraph-image.png',  
        width: 1200,
        height: 630,
        alt: 'Blockchain FL - IT Staffing & MSP Solutions'
      }
    ]
  },
  facebook: {
    app_id: '123456789012345'  
  },
  instagram: {
    url: 'https://www.instagram.com/blockchainfl',  
    title: "Blockchain FL - Modern IT Solutions",
    description: 'Blockchain FL delivers innovative MSP and IT staffing services, empowering businesses with cutting-edge solutions.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4169E1" />
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
          forcedTheme="light"
        > */}
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
