import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}
  
) {
  return (
    <html lang="en">
      <body className='bg-black-100'>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
