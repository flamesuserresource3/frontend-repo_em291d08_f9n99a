import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Serverless AI Chatbot',
    desc: 'A production-grade LLM chatbot on AWS using Lambda, API Gateway, and vector search.',
    stack: ['AWS', 'Lambda', 'OpenAI', 'React'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Cloud Cost Optimizer',
    desc: 'Dashboards and alerting to reduce AWS spend using usage analytics and automation.',
    stack: ['Python', 'FastAPI', 'Athena', 'S3'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Realtime DevOps Monitor',
    desc: 'Streaming metrics and anomaly detection with a sleek web UI.',
    stack: ['React', 'WebSockets', 'TimescaleDB'],
    href: '#',
    repo: '#',
  },
];

export default function ProjectsAndContact() {
  return (
    <section id="projects" className="relative bg-[#0b0d12]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-white text-2xl font-semibold">Projects</h3>
            <p className="text-white/60 mt-1 text-sm">A selection of recent work with a focus on AI and cloud.</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />)
          )}
        </div>

        <ContactSection />
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, stack, href, repo }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
      <div className="aspect-video relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_40%),radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.18),transparent_50%)]" />
        <div className="absolute inset-0 grid place-items-center text-white/30 text-xs tracking-widest">
          <span>Project Screenshot</span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-white font-medium text-lg">{title}</h4>
        <p className="text-white/70 mt-2 text-sm leading-relaxed">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="rounded-full bg-white/5 border border-white/10 text-white/70 text-xs px-2.5 py-1">{s}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a href={href} className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm">
            <ExternalLink size={16} /> View Project
          </a>
          <a href={repo} className="inline-flex items-center gap-1 text-white/70 hover:text-white/90 text-sm">
            <Github size={16} /> Code
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-12 opacity-0 group-hover:opacity-100 transition-opacity bg-[conic-gradient(from_90deg_at_50%_50%,rgba(56,189,248,0.15),rgba(99,102,241,0.15),transparent_60%)] blur-2xl" />
    </div>
  );
}

function ContactSection() {
  return (
    <div id="contact" className="mt-24 grid md:grid-cols-2 gap-8 items-stretch">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-white text-xl font-semibold">Get in Touch</h3>
        <p className="text-white/60 text-sm mt-1">Have a project in mind or want to collaborate? Let’s talk.</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-white/70 mb-1">Name</label>
            <input
              type="text"
              className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-2 text-sm font-medium text-black hover:brightness-110 transition-all shadow-[0_0_24px_4px_rgba(56,189,248,0.35)]"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              alert('Thanks! This is a demo UI. Connect to your backend or email service to make it live.');
            }}
          >
            Send Message
          </button>
      </form>
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
        <h3 className="text-white text-xl font-semibold">Connect</h3>
        <p className="text-white/60 text-sm mt-1">Find me on the platforms below.</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <SocialCard label="GitHub" href="https://github.com/" icon={<Github />} />
          <SocialCard label="LinkedIn" href="https://linkedin.com/" icon={<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='h-5 w-5'><path d='M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.07 0 4.82 2.68 4.82 6.16V24h-4v-7.08c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.84-2.71 3.74V24h-4V8z'/></svg>" />
          <SocialCard label="Email" href="mailto:hello@example.com" icon={<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='h-5 w-5'><path d='M12 13.065L.015 6h23.97L12 13.065zM0 7.5V18a2 2 0 002 2h20a2 2 0 002-2V7.5l-10.553 6.21a3 3 0 01-2.894 0L0 7.5z'/></svg>" />
        </div>
      </div>
    </div>
  );
}

function SocialCard({ label, href, icon }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:text-white hover:border-teal-400/40 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 grid place-items-center rounded-lg bg-black/30 text-white/80">
          {icon}
        </div>
        <span>{label}</span>
      </div>
      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}
