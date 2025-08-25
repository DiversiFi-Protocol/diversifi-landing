export default function Explainer3Section() {
  return (
    <section
      id="for-institutions"
      className="section-full shared-background flex items-center relative"
    >
      {/* Overlay for bottom half */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-dark/50 to-dark/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              FOR INSTITUTIONS
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Institutional-Grade Structured Stability
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Professional digital asset reserves with quantified risk
              management.
            </p>
          </div>

          {/* Right Side - Key Metrics */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">KEY METRICS:</h3>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$50M+</div>
                <div className="text-gray-400 text-sm">TVL</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">AAA</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                CORE BENEFITS:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">
                      Risk Management
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Advanced protocols for asset protection
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">
                      Compliance Ready
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Built for regulatory requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">
                      Operational Excellence
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Professional-grade infrastructure
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">
                      Capital Efficiency
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Optimized yield generation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
