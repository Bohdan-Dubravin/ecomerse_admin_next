import { Inter } from 'next/font/google';

import Layout from '@/layouts/Layout';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <Layout></Layout>;
}