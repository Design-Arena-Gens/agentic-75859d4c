const tracks = [
  {
    id: "discovery",
    title: "Discovery Sprint",
    focus: "Clarify the problem space and success signals before execution begins.",
    checkpoints: [
      {
        name: "Kickoff Intake",
        detail: "Capture objectives, known constraints, and stakeholders in a structured brief.",
        output: "Mission brief + constraint map",
      },
      {
        name: "Signal Sweep",
        detail: "Review prior art, market context, and internal artifacts to expose blind spots.",
        output: "Insight radar + source index",
      },
      {
        name: "Opportunity Framing",
        detail: "Prioritize the levers with the best impact-to-effort ratio and align on scope.",
        output: "Decision canvas + prioritization grid",
      },
    ],
  },
  {
    id: "build",
    title: "Build & Iterate",
    focus: "Translate the plan into tangible deliverables with progressive validation.",
    checkpoints: [
      {
        name: "Architecture Sketch",
        detail: "Lay down interfaces, data contracts, and governance guidelines for the solution.",
        output: "System storyboard + integration map",
      },
      {
        name: "Incremental Drops",
        detail: "Ship reviewable increments with change logs and validation notes for rapid feedback.",
        output: "Working artifact + verification notes",
      },
      {
        name: "Hardening",
        detail: "Add resilience, instrumentation, and documentation to move from demo to dependable.",
        output: "Release bundle + runbook",
      },
    ],
  },
  {
    id: "enable",
    title: "Enable & Scale",
    focus: "Hand over the playbook, instrument outcomes, and set up the next iteration loop.",
    checkpoints: [
      {
        name: "Knowledge Transfer",
        detail: "Deliver walkthroughs, decision rationale, and self-serve guides for operators.",
        output: "Capability deck + learning path",
      },
      {
        name: "Adoption Launch",
        detail: "Coordinate messaging, support coverage, and calendar of nudges for rollout.",
        output: "Launch comms kit + support scripts",
      },
      {
        name: "Impact Pulse",
        detail: "Watch leading indicators, capture feedback, and queue the next optimization sprint.",
        output: "Metrics dashboard + iteration backlog",
      },
    ],
  },
];

export default function WorkflowBlueprint() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-8 py-12 text-slate-100 shadow-xl shadow-slate-950/40">
      <header className="mb-10 max-w-3xl">
        <span className="rounded-full border border-fuchsia-400/50 bg-fuchsia-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-200">
          Operating Blueprint
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">How the agent drives outcomes end-to-end</h2>
        <p className="mt-3 text-sm text-slate-300">
          Each lane stacks to form a repeatable delivery loop. Teams can jump in where they need help or let the agent own the process from discovery to scale.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {tracks.map((track) => (
          <article key={track.id} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30">
            <div>
              <h3 className="text-xl font-semibold text-white">{track.title}</h3>
              <p className="mt-2 text-sm text-slate-200">{track.focus}</p>
            </div>
            <ul className="flex flex-1 flex-col gap-4 text-sm">
              {track.checkpoints.map((checkpoint, index) => (
                <li key={checkpoint.name} className="relative rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-400/10 text-xs font-semibold text-fuchsia-100">
                    {index + 1}
                  </div>
                  <div className="pl-10">
                    <p className="text-sm font-semibold text-white">{checkpoint.name}</p>
                    <p className="mt-1 text-xs text-slate-300">{checkpoint.detail}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-wide text-fuchsia-200/90">
                      Primary output: <span className="font-semibold text-fuchsia-100">{checkpoint.output}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
