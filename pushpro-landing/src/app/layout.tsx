import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "PushupPro - Plan. Coach. Track. Build",
  description: "Train Smarter. Progress Faster. Real-time AI form correction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", inter.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-full bg-[#EFEFEF] text-[#0F111A] antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
