import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerProvide from "@/components/provide/ServiceWorkerProvide";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StoreProvide from "@/components/provide/StoreProvide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PWA with Next 14",
  description: "PWA application with Next 14",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  // themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Alldo Faiz Ramadhani" },
    {
      name: "Alldo Faiz Ramadhani",
      url: "https://www.linkedin.com/in/alldofaiz/",
    },
  ],
  // viewport:
  //   "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <StoreProvide>
            <ServiceWorkerProvide>
              {children}
            </ServiceWorkerProvide>
          </StoreProvide>
        </AntdRegistry>
      </body>
    </html>
  );
}
