import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Marketplace",
  description: "An online marketplace created by frjr17",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
