import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundParticles />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
