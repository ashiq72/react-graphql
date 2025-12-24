// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // <--- Import করুন

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bponi Suite",
  description: "SaaS Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        {/* Providers দিয়ে র‍্যাপ করুন */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
