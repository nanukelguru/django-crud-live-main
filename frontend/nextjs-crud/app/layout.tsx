import "./globals.css";

export const metadata = {
  title: "Product App",
  description: "App for CRUD operations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
