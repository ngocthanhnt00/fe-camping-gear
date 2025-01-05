import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "./fontawesome-free-6.4.0-web/css/all.min.css";
import { SearchProvider } from "./components/searchContext";
import { AuthProvider } from "./components/authContext";
import ReduxProviders from "../redux/Provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FanFan",
  description: "FanFan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        href="https://theme.hstatic.net/200000467803/1000988268/14/favicon.png?v=794"
      />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProviders>
          <AuthProvider>
            <SearchProvider>
              <Header />
              {children}
              <Footer />
            </SearchProvider>
          </AuthProvider>
        </ReduxProviders>
      </body>
    </html>
  );
}
