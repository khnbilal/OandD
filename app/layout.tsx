import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'One&Done | Premium fitness, made effortless', description: 'Your One&Done workout program, calendar, video sessions and progress.' };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0B1A33' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
