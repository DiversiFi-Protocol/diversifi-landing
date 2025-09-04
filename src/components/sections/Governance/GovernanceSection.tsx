export default function GovernanceSection() {
  return (
    <section
      id="governance"
      className="section-full governance-background flex items-center relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Community-Driven Protocol Governance
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              DFI token holders participate in treasury management and protocol
              decisions.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              The DFI token represents ownership in the DiversiFi ecosystem.
              Holders can vote on key protocol parameters, treasury allocations,
              and strategic decisions that shape the future of structured
              stability in DeFi.
            </p>

            {/* CTA Button */}
            <div>
              <button className="bg-primary text-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
                Subscribe for Updates
              </button>
            </div>
          </div>

          {/* Right Side - Governance Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">GOVERNANCE</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  VOTE ON:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300">
                      Treasury allocation strategies
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300">
                      Risk management parameters
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300">
                      Protocol upgrades and features
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300">
                      Partnership and integration decisions
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300">
                      Fee structure adjustments
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  VOTE VIA:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-gray-300">
                      Snapshot voting platform
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-gray-300">
                      On-chain governance contracts
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-gray-300">
                      Community forum discussions
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-gray-300">
                      Discord community channels
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Token Info */}
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                DFI Token
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Total Supply:</span>
                  <div className="text-white font-semibold">
                    1,000,000,000 DFI
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Circulating:</span>
                  <div className="text-white font-semibold">N/A DFI</div>
                </div>
                <div>
                  <span className="text-gray-400">Staked:</span>
                  <div className="text-white font-semibold">N/A DFI</div>
                </div>
                <div>
                  <span className="text-gray-400">Governance Power:</span>
                  <div className="text-white font-semibold">1 DFI = 1 Vote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
