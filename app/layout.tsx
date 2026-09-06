import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frengjisht Online | Prof. Natalia Manaj",
  description:
    "Mësime frëngjishteje online me Prof. Natalia Manaj, nga A1 deri në C2.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sq" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
