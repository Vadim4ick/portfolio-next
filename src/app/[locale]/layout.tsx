import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/providers/ThemeProvider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { BurgerProvider } from "@/shared/providers/BurgerProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vadim Firulov | Portfolio",
  description: "Портфолио фронтенд разработчика",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} bg-bg-light dark:bg-bg-dark`}>
        <NextIntlClientProvider messages={messages}>
          <BurgerProvider>
            <ThemeProvider>
              <main className="h-full">{children}</main>
            </ThemeProvider>
          </BurgerProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
