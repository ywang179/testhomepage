import type { ReactNode } from "react";
import "../src/styles/index.css";

export const metadata = {
  title: "Youyuan Portfolio",
  description:
    "Product designer portfolio featuring selected AI, SaaS, growth, and loyalty program work.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
