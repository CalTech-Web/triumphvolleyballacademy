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

export default function CoachesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
