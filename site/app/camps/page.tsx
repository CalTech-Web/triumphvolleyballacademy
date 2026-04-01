import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Sun, Heart } from "lucide-react";

export const metadata = {
  title: "Camps & Programs | Triumph Volleyball Academy",
  description:
    "TVA offers Boys Indoor, Girls Indoor, Beach, and FCA Partnership Camp programs for youth athletes in the Central Valley.",
};

const programs = [
  {
    title: "Boys Indoor",
    description:
      "Competitive club volleyball for boys youth athletes. TVA competes in the NCVA Power League and Fresno Heat League, developing players physically, mentally, and spiritually.",
    image: "/photos/boys-new-1.jpg",
    alt: "TVA Boys Indoor team",
    href: "/boys-indoor",
    icon: Users,
    badge: "Competitive Club",
  },
  {
    title: "Girls Indoor",
    description:
      "Club volleyball for girls youth athletes in the Central Valley. TVA Girls competes at a high level with faith integrated into every practice and tournament.",
    image: "/photos/girls-hero.jpg",
    alt: "TVA Girls Indoor team",
    href: "/girls-indoor",
    icon: Users,
    badge: "Competitive Club",
  },
  {
    title: "Beach",
    description:
      "TVA Beach Academy runs each summer for boys and girls. Sand changes everything - footwork, positioning, and reading the game. Same coaches. Same faith. On the sand.",
    image: "/photos/beach-new-1.jpg",
    alt: "TVA Beach Academy",
    href: "/sand",
    icon: Sun,
    badge: "Summer Academy",
  },
  {
    title: "FCA Partnership Camp",
    description:
      "TVA partners with Fellowship of Christian Athletes to bring a faith-centered volleyball camp to the Central Valley. Athletes compete, grow, and hear the gospel - on and off the court.",
    image: "/photos/tva-fca-camp-group-04.jpg",
    alt: "TVA FCA Partnership Camp",
    href: "#fca-camp",
    icon: Heart,
    badge: "Faith & Sport",
  },
];

export default function CampsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        <Image
          src="/photos/tva-fca-camp-group-2023.webp"
          alt="TVA camps and programs"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.28 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.92) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.90) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}
          >
            <Heart size={14} />
            FCA / TVA Camps
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Find Your Program
          </h1>
          <p
            className="text-xl leading-relaxed mb-4 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Boys Indoor. Girls Indoor. Beach. FCA Partnership Camp. TVA develops athletes across every platform - faith first, volleyball always.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.alt}
                      fill
                      className="object-cover object-center"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(30,45,92,0.1) 0%, rgba(30,45,92,0.55) 100%)",
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                        style={{ backgroundColor: "rgba(61,191,176,0.9)", color: "#fff" }}
                      >
                        <Icon size={11} />
                        {program.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h2 className="text-2xl font-black mb-3" style={{ color: "#1E2D5C" }}>
                      {program.title}
                    </h2>
                    <p className="text-base leading-relaxed flex-1" style={{ color: "#374151" }}>
                      {program.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={program.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-105"
                        style={{ backgroundColor: "#3DBFB0" }}
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FCA Section */}
      <section id="fca-camp" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/tva-fca-camp-group-04.jpg"
                  alt="TVA FCA Partnership Camp"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                style={{ backgroundColor: "rgba(61,191,176,0.12)", color: "#3DBFB0" }}
              >
                <Heart size={13} />
                FCA Partnership Camp
              </div>
              <h2 className="text-4xl font-black mb-5" style={{ color: "#1E2D5C" }}>
                Faith. Athletics. Community.
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "#374151" }}>
                TVA partners with Fellowship of Christian Athletes to host a camp where volleyball meets faith head-on. Athletes from across the Central Valley come together to compete, be coached by TVA staff, and hear the gospel in an environment built for growth.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#374151" }}>
                FCA camps are open to all youth athletes regardless of experience level. Whether it is your first time on the court or you have been competing for years, this camp is for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-16 text-center overflow-hidden"
        style={{ backgroundColor: "#1E2D5C" }}
      >
        <Image
          src="/photos/tva-sand-courts-hero.jpg"
          alt="TVA courts"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.2 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.9) 0%, rgba(30,45,92,0.75) 50%, rgba(30,45,92,0.92) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Follow TVA on Instagram for camp announcements, registration openings, and updates from every program.
          </p>
          <a
            href="https://www.instagram.com/triumphvballacademy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "#3DBFB0" }}
          >
            Follow on Instagram <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
