export default function Explainer2Section() {
  return (
    <section
      id="for-defi"
      className="section-full shared-background flex items-center relative"
    >
      {/* Overlay for top half */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              FOR DEFI PROTOCOLS
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              The Reserve Asset DeFi Actually Needs
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  THE CHALLENGE:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Traditional stablecoins lack the stability and transparency
                  that DeFi protocols require. Single-point failures and opaque
                  operations put your users' funds at risk.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  OUR SOLUTION:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  DiversiFi provides institutional-grade stability with complete
                  transparency. Our multi-collateral approach and automated risk
                  management ensure your protocol always has access to reliable
                  reserves.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
                Start Integration
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="hidden lg:block">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-semibold">
                  DeFi Integration Ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
