import React from 'react';

export const metadata = {
  title: 'HistoryVoice AI',
  description: 'AI History Assistant and Rare Literature Explorer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}