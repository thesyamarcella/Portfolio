// src/app/layout.tsx
import './globals.css';
import { Footer } from '@/components/footer';
import { FloatingButton } from '@/components/floating-button';
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from '@/components/sidebar';

export const metadata = {
  title: 'Thesya Marcella Portfolio',
  description: 'Design Portfolio by Thesya Marcella',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased transition-colors">
        <Sidebar/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >


          {/* Main Content */}
          <main className="min-h-screen transition-colors">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Button */}
          <FloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
