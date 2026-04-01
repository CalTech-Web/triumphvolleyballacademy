import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://triumphvolleyballacademy.com"),
  title: "Triumph Volleyball Academy",
  description:
    "A Christian-based volleyball club in the Central Valley of California offering competitive boys indoor, girls indoor, and sand volleyball programs.",
  openGraph: {
    type: "website",
    siteName: "Triumph Volleyball Academy",
    title: "Triumph Volleyball Academy",
    description:
      "A Christian-based volleyball club in the Central Valley of California offering competitive boys indoor, girls indoor, and sand volleyball programs.",
    url: "https://triumphvolleyballacademy.com",
    images: ["/photos/tva-sand-action-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@triumphvballacademy",
    title: "Triumph Volleyball Academy",
    description:
      "A Christian-based volleyball club in the Central Valley of California offering competitive boys indoor, girls indoor, and sand volleyball programs.",
    images: ["/photos/tva-sand-action-hero.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Triumph Volleyball Academy",
  alternateName: "TVA",
  url: "https://triumphvolleyballacademy.com",
  logo: "https://triumphvolleyballacademy.com/logos/TVA-Logo.png",
  description:
    "A Christian-based volleyball club in the Central Valley of California offering competitive boys indoor, girls indoor, and sand volleyball programs for youth athletes.",
  foundingDate: "2011",
  sport: "Volleyball",
  areaServed: {
    "@type": "Place",
    name: "Central Valley, California",
  },
  sameAs: ["https://www.instagram.com/triumphvballacademy/"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "coachgugtva@gmail.com",
      contactType: "Boys Indoor Program",
    },
    {
      "@type": "ContactPoint",
      email: "coachwoldtva@gmail.com",
      contactType: "Girls Indoor Program",
    },
    {
      "@type": "ContactPoint",
      email: "tvabeachvb@gmail.com",
      contactType: "Beach Volleyball Program",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
