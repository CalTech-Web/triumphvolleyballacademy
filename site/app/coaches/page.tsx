"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Send, CheckCircle } from "lucide-react";

// TODO: Replace FORMSPREE_FORM_ID with the actual Formspree form ID
// Client needs to: create account at formspree.io, create a form, and provide the ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORMSPREE_FORM_ID";

const programs = ["Boys Indoor", "Girls Indoor", "Beach", "FCA Partnership Camp", "Multiple / Open"];

export default function CoachesPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        <Image
          src="/photos/boys-new-3.jpg"
          alt="TVA coaches on the court"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.25 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.92) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.92) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}
          >
            <Users size={14} />
            Coach Applications
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Join the TVA Staff
          </h1>
          <p
            className="text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            TVA coaches develop athletes physically, mentally, and spiritually. If that mission resonates with you, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === "success" ? (
            <div className="text-center py-16">
              <CheckCircle size={56} className="mx-auto mb-5" style={{ color: "#3DBFB0" }} />
              <h2 className="text-3xl font-black mb-3" style={{ color: "#1E2D5C" }}>
                Application Received
              </h2>
              <p className="text-lg" style={{ color: "#6b7280" }}>
                Thank you for your interest in coaching with TVA. We will be in touch soon.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-black mb-3" style={{ color: "#1E2D5C" }}>
                  Coach Application
                </h2>
                <p className="text-base" style={{ color: "#6b7280" }}>
                  Fill out the form below and our staff will reach out to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1E2D5C" }}>
                      Full Name <span style={{ color: "#F4A07A" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{
                        borderColor: "#E5E7EB",
                        color: "#111827",
                        backgroundColor: "#fff",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1E2D5C" }}>
                      Email <span style={{ color: "#F4A07A" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{
                        borderColor: "#E5E7EB",
                        color: "#111827",
                        backgroundColor: "#fff",
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1E2D5C" }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(559) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{
                        borderColor: "#E5E7EB",
                        color: "#111827",
                        backgroundColor: "#fff",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1E2D5C" }}>
                      Program Interest <span style={{ color: "#F4A07A" }}>*</span>
                    </label>
                    <select
                      name="program"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{
                        borderColor: "#E5E7EB",
                        color: "#111827",
                        backgroundColor: "#fff",
                      }}
                    >
                      <option value="" disabled>Select a program</option>
                      {programs.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "#1E2D5C" }}>
                    Coaching Background <span style={{ color: "#F4A07A" }}>*</span>
                  </label>
                  <textarea
                    name="experience"
                    required
                    rows={4}
                    placeholder="Describe your volleyball playing and coaching experience..."
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#111827",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "#1E2D5C" }}>
                    Why TVA?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us why you want to coach at Triumph Volleyball Academy..."
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#111827",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-semibold" style={{ color: "#EF4444" }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#3DBFB0" }}
                >
                  <Send size={18} />
                  {status === "submitting" ? "Sending..." : "Submit Application"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
