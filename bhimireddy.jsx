import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

// --- Data (pulled from your resume) ---
const INFO = {
  name: "Govardhan Bhimireddy",
  title: "MuleSoft Architect",
  location: "Dallas, TX",
  email: "govardhanreddy.bh@gmail.com",
  phone: "603‑233‑6621",
  links: {
    linkedin: "https://www.linkedin.com/in/govardhan-bhim",
    github: "https://github.com/goo-bhim",
    resume: "/Govardhan-Bhimireddy-FlowCV-Resume-20250810.pdf",
  },
};

const SKILLS = [
  "Mule 3/4", "DataWeave", "RAML", "REST/SOAP", "OAuth2", "Azure DevOps",
  "RTF", "SAP", "Salesforce", "Power BI", "Splunk", "AKS", "MTLS", "IdP/SSO",
];

const EXPERIENCES = [
  {
    role: "Senior Software Engineer",
    company: "AT&T",
    when: "Aug 2024 – Present | Dallas, TX",
    bullets: [
      "Built Mule Exchange reporting dashboards in Power BI for API governance.",
      "Implemented MFA with Entra ID as IdP; enhanced CI/CD for evolving needs.",
      "Added GenAI scoring for Exchange docs; supported DCR onboarding via Azure.",
    ],
  },
  {
    role: "MuleSoft Architect/Consultant",
    company: "CDPH (via Infinite Resource Solutions)",
    when: "Nov 2021 – Aug 2024 | Remote",
    bullets: [
      "Maintained Mule servers; patched Log4j; automated monthly patch scripts.",
      "Set up SAML 2.0 SSO with Azure AD; migrated 4.3 → 4.4 (clusters & domains).",
      "Integrated Salesforce → Azure Blob pipelines; routed on‑prem via F5.",
    ],
  },
  {
    role: "Sr MuleSoft Consultant/Developer/Coach",
    company: "Truist Bank (via Infinite)",
    when: "Aug 2020 – Oct 2021 | Remote",
    bullets: [
      "Defined API governance; rationalized redundant REST services (TIBCO).",
      "Demonstrated DataWeave, MUnit, async/sync strategies to federated teams.",
      "Enhanced Mule Metrics Accelerator; created Splunk KPI dashboards.",
    ],
  },
];

// --- Reusable Glow ---
const GlowBackground: React.FC = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {/* Soft gradient base */}
    <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(255,255,255,0.35),transparent_65%),radial-gradient(800px_500px_at_80%_10%,rgba(199,229,255,0.35),transparent_60%),radial-gradient(900px_500px_at_50%_120%,rgba(186,255,216,0.35),transparent_60%)]" />
    {/* Subtle animated orbs */}
    <motion.div
      className="absolute h-[48rem] w-[48rem] -left-32 top-24 rounded-full blur-3xl bg-white/20"
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute h-[40rem] w-[40rem] right-[-10rem] top-64 rounded-full blur-3xl bg-cyan-200/30"
      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// --- Small helpers ---
const Tile: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
  <Card className={`backdrop-blur-xl bg-white/50 border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.06)] ${className}`}>
    <CardContent className="p-6 md:p-8">{children}</CardContent>
  </Card>
);

const SectionTitle: React.FC<{ children: React.ReactNode }>= ({ children }) => (
  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-800">{children}</h2>
);

// --- Main Component ---
export default function UltraModernSite() {
  return (
    <div className="min-h-screen text-slate-900 antialiased selection:bg-black/80 selection:text-white">
      <GlowBackground />

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/40 border-b border-white/50">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-black/80 to-black/60 text-white grid place-items-center font-bold">GB</div>
            <div>
              <p className="text-sm font-medium leading-tight">{INFO.name}</p>
              <p className="text-xs text-slate-600 -mt-0.5">{INFO.title}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" className="text-sm">
              <a href="#about">About</a>
            </Button>
            <Button asChild variant="ghost" className="text-sm">
              <a href="#skills">Skills</a>
            </Button>
            <Button asChild variant="ghost" className="text-sm">
              <a href="#experience">Experience</a>
            </Button>
            <Button asChild size="sm" className="rounded-xl">
              <a href={INFO.links.resume} download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-10 md:pt-16 pb-6">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-8">
          <Tile className="md:col-span-1">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="relative">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-3xl bg-gradient-to-br from-white to-white/70 border border-white/60 shadow-inner grid place-items-center">
                  <span className="text-3xl md:text-4xl font-black text-slate-800">GB</span>
                </div>
                <div className="absolute -inset-1 rounded-3xl bg-white/50 blur-2xl -z-10" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-slate-900">
                  {INFO.name}
                </h1>
                <p className="mt-1 md:mt-2 text-slate-700">{INFO.title}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-700">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {INFO.location}</span>
                  <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${INFO.email}`}><Mail className="h-4 w-4" /> {INFO.email}</a>
                  <a className="inline-flex items-center gap-1 hover:underline" href={`tel:${INFO.phone.replace(/[^\d]/g, "")}`}><Phone className="h-4 w-4" /> {INFO.phone}</a>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button asChild variant="secondary" className="rounded-xl">
                    <a href={INFO.links.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="secondary" className="rounded-xl">
                    <a href={INFO.links.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Tile>

          <Tile className="md:col-span-1">
            <SectionTitle>Highlights</SectionTitle>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>8+ years delivering REST/SOAP integrations and API‑led connectivity with MuleSoft.</li>
              <li>MCD & MCA certified; strong CI/CD, security (SSO/OAuth2/MTLS), and observability.</li>
              <li>Hands‑on with Azure, SAP, Salesforce, Splunk, Power BI, and Runtime Fabric.</li>
            </ul>
          </Tile>
        </div>
      </section>

      {/* About + Skills */}
      <section id="about" className="mx-auto max-w-6xl px-4 md:px-6 pb-6 md:pb-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Tile>
            <SectionTitle>About</SectionTitle>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              I build reliable, secure API platforms and integrations with MuleSoft—spanning design, implementation,
              governance, and operations. I love simplifying complex systems, raising quality bars, and enabling
              teams with repeatable patterns and clean pipelines.
            </p>
          </Tile>

          <Tile id="skills">
            <SectionTitle>Skills</SectionTitle>
            <div className="mt-4 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <Badge key={s} variant="secondary" className="rounded-lg bg-white/70 border border-white/60 text-slate-800">
                  {s}
                </Badge>
              ))}
            </div>
          </Tile>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 md:px-6 pb-12">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <SectionTitle>Experience</SectionTitle>
          <div className="h-px flex-1 ml-4 bg-gradient-to-r from-slate-300/60 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8">
          {EXPERIENCES.map((job) => (
            <motion.div
              key={job.company + job.when}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <Tile>
                <CardHeader className="p-0">
                  <CardTitle className="text-lg md:text-xl text-slate-900">{job.role}</CardTitle>
                  <p className="text-sm text-slate-700 mt-1">{job.company}</p>
                  <p className="text-xs text-slate-600">{job.when}</p>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="leading-6">• {b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Tile>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-16">
        <Tile>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <SectionTitle>Let’s work together</SectionTitle>
              <p className="mt-2 text-sm text-slate-700">Have a project or role that could use a MuleSoft architect? I’d love to help.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="lg" className="rounded-xl">
                <a href={`mailto:${INFO.email}`}><Mail className="mr-2 h-5 w-5"/> Email Me</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-xl">
                <a href={`tel:${INFO.phone.replace(/[^\d]/g, "")}`}><Phone className="mr-2 h-5 w-5"/> Call</a>
              </Button>
            </div>
          </div>
        </Tile>
      </section>

      {/* Footer */}
      <footer className="pb-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-xs text-slate-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {INFO.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:underline" href={INFO.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href={INFO.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href={INFO.links.resume} download>Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
