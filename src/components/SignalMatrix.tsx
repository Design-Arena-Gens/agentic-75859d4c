const signalMatrix = [
  {
    domain: "Product",
    description: "Feature performance, backlog focus, and voice-of-customer signals for roadmap choices.",
    signals: [
      { name: "Adoption velocity", trigger: "Drops below target cohort", response: "Refine onboarding journeys" },
      { name: "Feedback themes", trigger: "Pattern in support tickets", response: "Spin discovery sprint" },
      { name: "NPS trend", trigger: "3pt change in trailing avg", response: "Activate narrative refresh" },
    ],
  },
  {
    domain: "Go-to-Market",
    description: "Campaign resonance and pipeline health to amplify the stories that convert.",
    signals: [
      { name: "Content resonance", trigger: "Engagement on launch materials", response: "Deploy content upgrades" },
      { name: "Pipeline mix", trigger: "Stage imbalance", response: "Enable targeted plays" },
      { name: "Competitive mentions", trigger: "Spike in losses", response: "Ship counter-positioning kit" },
    ],
  },
  {
    domain: "Operations",
    description: "Delivery throughput, quality, and risk visibility across teams.",
    signals: [
      { name: "Cycle time", trigger: "SLA breaches", response: "Re-route workflow automation" },
      { name: "Quality drift", trigger: "QA score dips", response: "Inject reinforcement training" },
      { name: "Capacity load", trigger: "Utilization >85%", response: "Spin up assist pods" },
    ],
  },
];

export default function SignalMatrix() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 px-8 py-12 text-slate-100 shadow-xl shadow-slate-950/40">
      <header className="mb-8 max-w-3xl">
        <span className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200">
          Signal-to-Action Matrix
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">How the agent stays proactive</h2>
        <p className="mt-3 text-sm text-slate-300">
          Each signal has a pre-baked response so teams move faster than the issue. The agent keeps the matrix updated as the operating model evolves.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {signalMatrix.map((domain) => (
          <article key={domain.domain} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30">
            <header>
              <h3 className="text-xl font-semibold text-white">{domain.domain}</h3>
              <p className="mt-2 text-sm text-slate-200">{domain.description}</p>
            </header>
            <ul className="mt-4 space-y-4 text-sm">
              {domain.signals.map((signal) => (
                <li key={signal.name} className="rounded-2xl border border-emerald-300/40 bg-emerald-400/5 p-4">
                  <p className="text-sm font-semibold text-white">{signal.name}</p>
                  <p className="mt-1 text-xs text-slate-200">
                    Trigger: <span className="text-emerald-200">{signal.trigger}</span>
                  </p>
                  <p className="mt-1 text-xs text-slate-200">
                    Agent response: <span className="text-emerald-200">{signal.response}</span>
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
