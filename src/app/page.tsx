import CapabilityExplorer from "@/components/CapabilityExplorer";
import SignalMatrix from "@/components/SignalMatrix";
import WorkflowBlueprint from "@/components/WorkflowBlueprint";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 top-40 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-16 lg:px-12 lg:py-20">
        <section className="grid gap-10 rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/50 backdrop-blur lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
              Agentic operating partner
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white lg:text-5xl">
              What can this agent do? Build, orchestrate, and scale outcomes across your product teams.
            </h1>
            <p className="text-base leading-relaxed text-slate-200 lg:text-lg">
              Combine deep research, production-grade implementation, and program operations. Plug the agent into your workflow to unlock rapid experiments, shipping velocity, and a continuously improving operating cadence.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-100">
              {primaryHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-100 shadow-inner shadow-black/40">
            <header className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Engagement modes</h2>
              <span className="rounded-full border border-emerald-300/50 bg-emerald-300/10 px-3 py-1 text-[11px] uppercase tracking-wide text-emerald-200">
                Blended human + agent
              </span>
            </header>
            <ul className="space-y-4">
              {engagementModes.map((mode) => (
                <li key={mode.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="flex items-center justify-between text-sm font-semibold text-white">
                    {mode.title}
                    <span className="text-xs uppercase tracking-widest text-slate-400">{mode.cadence}</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{mode.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CapabilityExplorer />
        <WorkflowBlueprint />
        <SignalMatrix />

        <section className="rounded-3xl border border-white/10 bg-white/5 p-10 text-slate-100 shadow-inner shadow-black/50">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-white">Ready to slot the agent into your mission?</h2>
              <p className="mt-3 max-w-xl text-base text-slate-200">
                Share your north-star outcomes, top constraints, and current tooling. The agent will return a tailored operating plan, projected milestones, and a starter backlog of high-leverage moves in under 48 hours.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-slate-200">
              {nextSteps.map((step) => (
                <div key={step.title} className="rounded-2xl border border-cyan-300/30 bg-cyan-300/5 p-4">
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-slate-200">{step.detail}</p>
                </div>
              ))}
              <a
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                href="#"
              >
                Launch onboarding intake
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 flex flex-col items-center gap-2 border-t border-white/10 bg-slate-950/90 px-6 py-8 text-xs text-slate-500">
        <p className="uppercase tracking-widest text-slate-400">Agent capability atlas</p>
        <p>Designed for high-velocity teams who want an autonomous partner on product, delivery, and operations.</p>
      </footer>
    </div>
  );
}

const primaryHighlights = [
  "Insight-to-shipping continuum",
  "Typed deliverables & QA gates",
  "Observability and learning loops",
  "Cross-functional coordination",
];

const engagementModes = [
  {
    title: "Fractional pod",
    cadence: "Weekly",
    description: "Embed alongside your builders to deliver features, automation, and docs with sprint-level accountability.",
  },
  {
    title: "Mission specialist",
    cadence: "Bi-weekly",
    description: "Spin up the agent as a rapid-response squad for launches, adoption pushes, or platform migrations.",
  },
  {
    title: "Ops overseer",
    cadence: "Continuous",
    description: "Let the agent run playbooks, governance, and reporting so leaders get proactive insights instead of status requests.",
  },
];

const nextSteps = [
  {
    title: "Share context",
    detail: "Upload goals, prior plans, and constraints. The agent parses and highlights knowledge gaps automatically.",
  },
  {
    title: "Select focus lanes",
    detail: "Pick the capability tracks that deliver the highest leverage for your next milestones.",
  },
  {
    title: "Kick off delivery loop",
    detail: "Receive a personalized plan, RACI model, and the first two deliverables ready for review.",
  },
];
