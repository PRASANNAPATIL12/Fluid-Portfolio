import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import FluidCursor from '@/app/components/FluidCursor'; // Import the new fluid cursor

export const metadata: Metadata = {
  title: 'Astra Portfolio - Prasanna Patil',
  description: 'Personal portfolio of Prasanna Patil, showcasing skills, experience, and projects with a sophisticated and minimalistic design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-inter: 'Inter', sans-serif;
            --font-space-grotesk: 'Space Grotesk', sans-serif;
          }
        `}} />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground" suppressHydrationWarning={true}>
        <FluidCursor /> {/* Add the fluid cursor component */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
