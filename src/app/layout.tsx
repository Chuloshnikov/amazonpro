import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import "slick-carousel/slick/slick.css";
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AmazonPro',
  description: 'Explore a world of endless possibilities with AmazonPro - your one-stop destination for premium products, unbeatable deals, and unrivaled convenience. Discover a vast selection of items, from cutting-edge electronics to fashion-forward apparel. Shop with confidence and experience the next level of online shopping at AmazonPro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sens antialiased bgDesign", inter.className)}>
        <Layout>
          <Navbar/>
          {children}
          <Footer/>
        </Layout>
      </body>
    </html>
  )
}
