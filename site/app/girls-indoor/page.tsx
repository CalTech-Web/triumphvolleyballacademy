import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Heart } from "lucide-react";

export default function GirlsIndoorPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background team photo */}
        <Image
          src="/photos/girls-indoor-action.jpg"
          alt="TVA girls indoor volleyball"
          fill
          className="object-cover object-top"
          style={{ opacity: 0.28 }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.9) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 60%, #F4A07A 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(244,160,122,0.2)", color: "#F4A07A" }}>
                Girls Program
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Girls <span style={{ color: "#3DBFB0" }}>Indoor</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
                Competitive indoor volleyball for girls in the Central Valley. The standard is high. The community sticks around.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                  Competitive Training
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                  Club Achievements
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                  Faith-Based Culture
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{ backgroundColor: "#F4A07A" }} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/girls-indoor-action.jpg"
                  alt="TVA Girls Indoor volleyball"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-black mb-6" style={{ color: "#1E2D5C" }}>
                Program Overview
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#374151" }}>
                TVA Girls Indoor is a competitive program, not a recreational one. The girls who thrive here come ready to work and stay because of what they find beyond the drill.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#374151" }}>
                Every season, coaches develop skills while building something harder to measure - character. That means conversations about integrity, leadership, and what it looks like to compete with a purpose greater than winning.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#374151" }}>
                TVA is a family. That word gets overused in sports, but here it holds. Players and parents from previous seasons still show up to games. The community outlasts the roster.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <Users size={32} className="mb-4" style={{ color: "#F4A07A" }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1E2D5C" }}>What to Expect</h3>
              <ul className="space-y-3">
                {[
                  "Competitive training with high standards",
                  "Faith-integrated coaching",
                  "Strong community and team culture",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F4A07A" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Team Photo and Flyer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/photos/girls-team.png"
                alt="Girls team group photo"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/photos/girls-flyer.png"
                alt="Girls program flyer"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Club Achievements */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Trophy size={36} style={{ color: "#F4A07A" }} />
            <h2 className="text-4xl font-black" style={{ color: "#1E2D5C" }}>
              Club Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy size={28} color="white" />,
                color: "#3DBFB0",
                title: "Competitive Excellence",
                description:
                  "TVA Girls Indoor competes at a serious level. Athletes from this program have gone on to play high school and collegiate volleyball, and they leave better equipped for life beyond the sport.",
              },
              {
                icon: <Heart size={28} color="white" />,
                color: "#F4A07A",
                title: "Character Development",
                description:
                  "A win matters. So does how you got there. At TVA, faith, integrity, and leadership are not sidebars - they are built into how the program runs.",
              },
              {
                icon: <Users size={28} color="white" />,
                color: "#1E2D5C",
                title: "Team Community",
                description:
                  "The families who come through TVA tend to stay connected long after the season ends. What gets built here is real, and that does not go away when the court lights turn off.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ borderTop: `4px solid ${item.color}` }}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1E2D5C" }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 text-center overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background team photo */}
        <Image
          src="/photos/girls-indoor-action.jpg"
          alt="TVA girls indoor volleyball"
          fill
          className="object-cover object-top"
          style={{ opacity: 0.28 }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.88) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.9) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-4">Your Next Step at TVA</h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Girls Indoor runs through the competitive season. Beach Academy opens every summer for girls who want to stay on the court. Same coaches. Same faith. Two different courts.
          </p>
          <blockquote className="text-xl font-bold italic mb-2" style={{ color: "rgba(255,255,255,0.65)" }}>
            &ldquo;Whatever you do, do it all for the glory of God.&rdquo;
          </blockquote>
          <p className="text-sm mb-10" style={{ color: "#3DBFB0" }}>
            1 Corinthians 10:31
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sand"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#3DBFB0" }}
            >
              Explore Sand Volleyball <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border-2 hover:bg-white/10"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              About TVA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
