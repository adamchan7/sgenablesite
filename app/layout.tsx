import './globals.css';
import type { Metadata } from 'next';
import { AccessibilityPanel } from '@/components/AccessibilityPanel';
import { TopBar } from '@/components/TopBar';
import { ChatLauncher } from '@/components/ChatLauncher';

export const metadata: Metadata = {
  title: 'SG Enable - Your First Stop',
  description: 'Inclusive Journey Starter Kit - All the tools you need to earn the SG Enabling Mark.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <TopBar />
        {children}
        <AccessibilityPanel />
        <ChatLauncher />
      </body>
    </html>
  );
}