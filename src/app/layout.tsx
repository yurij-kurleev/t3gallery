import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "~/app/_components/topnav";
import { type ReactNode } from "react";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { utFileRouter } from "~/app/api/uploadthing/core";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Small playground to test out latest tech",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: ReactNode; modal: ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(utFileRouter)}
        />
        <body className="flex flex-col gap-4">
          <TopNav />
          {modal}
          {children}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
