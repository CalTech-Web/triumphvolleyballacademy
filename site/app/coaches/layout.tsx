import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coach Application | Triumph Volleyball Academy",
  description:
    "Apply to join the TVA coaching staff. We develop athletes physically, mentally, and spiritually through faith-based volleyball in the Central Valley.",
  openGraph: {
    title: "Coach Application | Triumph Volleyball Academy",
    description:
      "Apply to join the TVA coaching staff. We develop athletes physically, mentally, and spiritually through faith-based volleyball in the Central Valley.",
    url: "/coaches",
    images: ["/logos/TVA-Logo.png"],
  },
  twitter: {
    title: "Coach Application | Triumph Volleyball Academy",
    description:
      "Apply to join the TVA coaching staff. We develop athletes physically, mentally, and spiritually through faith-based volleyball in the Central Valley.",
    images: ["/logos/TVA-Logo.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://triumphvolleyballacademy.com" },
    { "@type": "ListItem", position: 2, name: "Coach Application", item: "https://triumphvolleyballacademy.com/coaches" },
  ],
};

export default function CoachesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
