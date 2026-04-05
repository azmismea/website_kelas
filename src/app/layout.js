import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Kenangan Kelas Selenium XII RPL | Class of 2026",
  description:
    "Website kenangan kelas Selenium XII RPL berisi memori, kebersamaan, dan galeri perjalanan 33 siswa menuju masa depan. Class of 2026.",
  keywords: [
    "Selenium",
    "XII RPL",
    "kelas",
    "kenangan",
    "33 siswa",
    "2026",
    "landing page",
  ],
  openGraph: {
    title: "Kenangan Kelas Selenium XII RPL | Class of 2026",
    description:
      "Website kenangan kelas Selenium XII RPL untuk mengabadikan momen terbaik 33 siswa.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
