export default function Explainer1Section() {
  return (
    <section
      id="how-it-works"
      className="section-full bg-black flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Abstract Pattern */}
          <div className="space-y-8">
            <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/60 to-secondary/60 rounded-full"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Designed for Enhanced Stability
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Our multi-layered approach ensures consistent performance even
              during market volatility.
            </p>
          </div>

          {/* Right Side - How It Works */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">HOW IT WORKS</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold">
                  +
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Multi-Collateral Diversification
                  </h4>
                  <p className="text-gray-400">
                    Spreads risk across multiple high-quality collateral types
                    including US Treasuries, corporate bonds, and other stable
                    assets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold">
                  +
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Transparent Infrastructure
                  </h4>
                  <p className="text-gray-400">
                    All operations are visible on-chain with real-time reporting
                    and regular audits ensuring complete transparency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  ×
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Crisis Protection
                  </h4>
                  <p className="text-gray-400">
                    Advanced risk management protocols automatically adjust
                    exposure during market stress, protecting your assets when
                    you need it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
