import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/features/navBar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Meals",
  description: "An application to manage your recipes, and meal plans",
};

const pages = [{ title: "Home", href: "/" }, { title: "Recipes", href: "/recipes" }, { title: "Meal Plans", href: "/meal-plans" }]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavBar pages={pages} />
        </div>
        <div className="mt-[var(--navbar-height)] overflow-y-none fixed top-0 left-0 right-0">
          {children}
        </div>
      </body>
    </html>
  );
}
