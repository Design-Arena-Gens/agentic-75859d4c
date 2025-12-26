"use client";

import { useMemo, useState } from "react";

const capabilityGroups = [
  {
    id: "research",
    name: "Research & Analysis",
    summary:
      "Scans large bodies of knowledge, distills insights, and monitors signals to keep teams informed.",
    personas: ["Product Strategist", "Research Analyst", "Competitive Intelligence"],
    capabilities: [
      {
        id: "market-mapping",
        label: "Market Mapping",
        description:
          "Organizes fragmented market data into shareable briefings, trend radars, and white-space maps.",
        metrics: ["30+ curated sources", "Insight summaries", "Risk heatmaps"],
      },
      {
        id: "evidence-trails",
        label: "Evidence Trails",
        description:
          "Pairs every recommendation with annotated sources and confidence levels to accelerate decision reviews.",
        metrics: ["Auto citations", "Confidence scoring", "Review-ready packets"],
      },
      {
        id: "monitoring",
        label: "Signal Monitoring",
        description:
          "Runs watchlists on competitors, technologies, and policy shifts with proactive alerts and impact analysis.",
        metrics: ["Custom triggers", "Daily pulse", "Impact grading"],
      },
    ],
  },
  {
    id: "delivery",
    name: "Solution Delivery",
    summary:
      "Builds production-ready assets across the stack, from UX prototypes to shippable services and docs.",
    personas: ["Full-stack Builder", "UX Engineer", "Technical Writer"],
    capabilities: [
      {
        id: "experience-design",
        label: "Experience Design",
        description:
          "Translates requirements into responsive flows, component systems, and user validation plans.",
        metrics: ["Component kits", "Interaction specs", "Usability notes"],
      },
      {
        id: "app-implementation",
        label: "App Implementation",
        description:
          "Implements modern web apps with typed APIs, edge-ready deployment, and observability hooks.",
        metrics: ["CI-ready", "Edge optimized", "Telemetry stubs"],
      },
      {
        id: "content-seeding",
        label: "Content Seeding",
        description:
          "Produces launch messaging, support docs, and knowledge-base articles aligned with product voice.",
        metrics: ["Persona targeting", "Reusable snippets", "Localization-ready"],
      },
    ],
  },
  {
    id: "operations",
    name: "Ops & Enablement",
    summary:
      "Orchestrates repeatable workflows, connects tools, and enforces quality gates across teams.",
    personas: ["Delivery Manager", "Ops Lead", "Chief of Staff"],
    capabilities: [
      {
        id: "workflow-design",
        label: "Workflow Design",
        description:
          "Captures playbooks as living checklists with owners, SLAs, and supporting automations.",
        metrics: ["SLA tracking", "Ownership matrix", "Audit logs"],
      },
      {
        id: "systems-ops",
        label: "Systems Ops",
        description:
          "Bridges SaaS tools and internal systems with event-driven automations and visibility dashboards.",
        metrics: ["No-code adapters", "Backlog sync", "Delivery dashboards"],
      },
      {
        id: "quality-loop",
        label: "Quality Loop",
        description:
          "Defines acceptance gates, scoring rubrics, and feedback cadences to sustain continuous improvement.",
        metrics: ["QA rubrics", "Feedback loops", "Improvement backlog"],
      },
    ],
  },
];

const investmentLevels = [
  { id: "prototype", label: "Prototype", turnaround: "1-3 days", collaboration: "Async-first", confidence: 0.6 },
  { id: "pilot", label: "Pilot", turnaround: "1-2 weeks", collaboration: "Hybrid", confidence: 0.8 },
  { id: "production", label: "Production", turnaround: "2-4 weeks", collaboration: "Embedded", confidence: 0.95 },
];

export default function CapabilityExplorer() {
  const [groupId, setGroupId] = useState(capabilityGroups[0].id);
  const [investmentIndex, setInvestmentIndex] = useState(1);

  const activeGroup = useMemo(
    () => capabilityGroups.find((group) => group.id === groupId) ?? capabilityGroups[0],
    [groupId]
  );

  const investment = investmentLevels[investmentIndex];
  const confidencePercent = Math.round(investment.confidence * 100);

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 text-slate-100 shadow-xl shadow-slate-950/40 backdrop-blur">
      <header className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
            Adaptive Capability Map
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">Explore what the agent can ship</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Toggle focus areas and delivery depth to preview the agent&apos;s responsibilities, delivery formats, and collaboration expectations.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Turnaround</p>
            <p className="font-semibold text-white">{investment.turnaround}</p>
          </div>
          <div className="h-9 w-px bg-white/10" aria-hidden="true" />
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Collaboration</p>
            <p className="font-semibold text-white">{investment.collaboration}</p>
          </div>
          <div className="h-9 w-px bg-white/10" aria-hidden="true" />
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Confidence</p>
            <p className="font-semibold text-white">{confidencePercent}%</p>
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="lg:w-1/3">
          <div className="grid gap-2">
            {capabilityGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setGroupId(group.id)}
                className={`group flex flex-col gap-1 rounded-2xl border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 ${
                  groupId === group.id
                    ? "border-cyan-400/70 bg-cyan-400/10"
                    : "border-white/5 bg-white/5 hover:border-cyan-300/40 hover:bg-cyan-300/5"
                }`}
              >
                <span className="text-sm font-semibold text-white">{group.name}</span>
                <span className="text-xs text-slate-300">{group.summary}</span>
                <span className="text-[11px] uppercase tracking-wide text-cyan-200/80">
                  {group.personas.join(" • ")}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <label htmlFor="investment" className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-400">
              Delivery depth
              <span className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-2 py-0.5 text-[11px] text-cyan-200">
                {investment.label}
              </span>
            </label>
            <input
              id="investment"
              type="range"
              min={0}
              max={investmentLevels.length - 1}
              value={investmentIndex}
              onChange={(event) => setInvestmentIndex(Number(event.target.value))}
              className="mt-4 h-1 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-cyan-400"
            />
            <div className="mt-2 flex justify-between text-[11px] font-medium text-slate-400">
              {investmentLevels.map((level) => (
                <span key={level.id}>{level.label}</span>
              ))}
            </div>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {activeGroup.capabilities.map((capability) => (
              <li
                key={capability.id}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 text-slate-100 shadow-inner shadow-black/40"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white">{capability.label}</h3>
                  <span className="rounded-full border border-cyan-300/50 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-wide text-cyan-100">
                    {investment.label}
                  </span>
                </div>
                <p className="text-sm text-slate-200">{capability.description}</p>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-slate-200">
                  {capability.metrics.map((metric) => (
                    <span key={metric} className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px]">
                      {metric}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
