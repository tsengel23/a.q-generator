import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import "./globals.css";
import { Header } from "./_components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";
import { SignedOutPosition } from "./_components/SignedOutPosition";

// import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Article Quiz Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="animated-bg antialiased">
          {/* Show the sign-in and sign-up buttons when the user is signed out */}
          <SignedOutPosition />

          {/* Show the user button when the user is signed in */}
          <SignedIn>
            <div className="flex flex-col">
              <Header />

              <SidebarProvider defaultOpen={false}>
                <div className="flex w-full">
                  <AppSidebar />
                  <main className="bg-gray-50 flex-1 min-h-screen">
                    {children}
                  </main>
                </div>
              </SidebarProvider>
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
