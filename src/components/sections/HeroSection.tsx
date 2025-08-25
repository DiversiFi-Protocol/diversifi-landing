"use client";

import AuditShield from "@/components/icons/AuditShield";
import InstitutionalShield from "@/components/icons/InstitutionalShield";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="section-full hero-background flex items-center relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-dark/40 z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Labels */}
            <div className="flex flex-wrap gap-4">
              <span className="border border-solid border-textPrimay text-textPrimary px-4 py-2 text-sm font-medium">
                DFIUSD
              </span>
              <span className=" text-textPrimary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                <AuditShield className="w-4 h-4" />
                Security Audited
              </span>
              <span className="text-textPrimary px-3 py-1 text-sm font-medium flex items-center gap-2">
                <InstitutionalShield className="w-4 h-4" />
                Institutional-Grade Risk Management
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Structured
              <br />
              <span className="text-primary">Stability</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              The engineered stablecoin that DeFi protocols trust as their
              preferred reserve asset.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-dark px-8 py-4 font-semibold text-lg hover:bg-primary/90 transition-colors">
                Integrate DiversiFi
              </button>
              <button className="border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-dark transition-colors">
                View Documentation
              </button>
            </div>

            {/* Additional Info */}
            <p className="text-gray-400 text-lg border-l border-solid border-primary pl-8 py-2">
              DiversiFi reduces single-asset risk by backing each DFiUSD token
              1:1 with a diversified basket of USD-pegged stablecoins. This
              multi-collateral approach creates a more resilient reserve
              designed to minimize depegging risks.
            </p>
          </div>

          {/* Right Side - Video background will be visible here */}
          <div className="hidden lg:block">
            {/* This space is intentionally left for the video background */}
          </div>
        </div>
      </div>
    </section>
  );
}
