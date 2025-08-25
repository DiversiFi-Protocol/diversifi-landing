export default function Explainer4Section() {
  return (
    <section
      id="explainer-4"
      className="section-full bg-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-dark">
              Advanced Risk Management
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Our proprietary algorithms continuously monitor market conditions
              and automatically adjust portfolio allocations to maintain optimal
              risk-adjusted returns.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">
                    Real-Time Monitoring
                  </h3>
                  <p className="text-gray-600">
                    24/7 surveillance of market conditions, liquidity, and
                    counterparty risk with instant alerts and automated
                    responses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">
                    Dynamic Allocation
                  </h3>
                  <p className="text-gray-600">
                    Intelligent portfolio rebalancing based on market
                    conditions, volatility, and correlation analysis to optimize
                    risk-adjusted returns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">
                    Transparent Reporting
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive dashboards and regular reports showing
                    portfolio composition, risk metrics, and performance
                    analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">
                Risk Metrics Dashboard
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Portfolio Volatility</span>
                  <span className="text-dark font-semibold">2.3%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "23%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sharpe Ratio</span>
                  <span className="text-dark font-semibold">1.85</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "74%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Max Drawdown</span>
                  <span className="text-dark font-semibold">-0.8%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "8%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
                View Live Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
