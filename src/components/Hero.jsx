import Spline from '@splinetool/react-spline';
import { Download, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-8 md:pb-16 bg-[#0b0d12] overflow-hidden">
      {/* Background subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.08),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center relative">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500 animate-pulse" />
            Available for freelance & collaborations
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-white">
            Shivani Balasubramaniam
          </h1>
          <p className="text-lg sm:text-xl text-white/80">AI + Cloud Developer</p>
          <p className="text-white/70 max-w-xl">
            Building intelligent systems powered by AWS and LLMs.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-2 text-sm font-medium text-black hover:brightness-110 transition-all shadow-[0_0_24px_4px_rgba(56,189,248,0.35)]"
            >
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
            >
              <Send size={16} />
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative h-[380px] sm:h-[440px] md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Gradient aura overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-teal-400/10 to-blue-500/10" />
          </div>
          {/* Glow ring */}
          <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.25)_0deg,rgba(56,189,248,0.15)_120deg,transparent_360deg)] blur-2xl" />
        </div>
      </div>
    </section>
  );
}
