import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coach Application | Triumph Volleyball Academy",
  description:
    "Apply to join the TVA coaching staff. We develop athletes physically, mentally, and spiritually through faith-based volleyball in the Central Valley.",
};

export default function CoachesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
