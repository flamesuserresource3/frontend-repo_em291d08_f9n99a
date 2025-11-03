import { User, Cloud, Atom, Code } from 'lucide-react';

const SkillPill = ({ label }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500" />
    {label}
  </span>
);

export default function AboutAndSkills() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#0b0d12]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="relative rounded-3xl p-6 border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-teal-400 via-purple-500 to-blue-500 p-[2px]">
                  <div className="h-full w-full rounded-2xl bg-[#0b0d12] grid place-items-center">
                    <User className="text-white/90" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">About</h3>
                  <p className="text-white/60 text-sm">AI + Cloud Developer</p>
                </div>
              </div>
              <p className="text-white/70 mt-6 leading-relaxed">
                I craft elegant, scalable solutions across cloud and AI. My focus is building reliable systems on AWS, weaving in LLM-driven capabilities, and delivering delightful user experiences.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <SkillPill label="AWS" />
                <SkillPill label="React" />
                <SkillPill label="Python" />
              </div>
            </div>
          </div>

          <div id="skills" className="md:col-span-7">
            <h3 className="text-white text-2xl font-semibold">Skills</h3>
            <p className="text-white/60 mt-1 text-sm">A balanced mix across languages, frameworks, cloud, and AI/ML.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <SkillCard title="Languages" Icon={Code} items={['Python', 'TypeScript', 'JavaScript', 'SQL']} />
              <SkillCard title="Frameworks" Icon={Atom} items={['React', 'Next.js', 'FastAPI', 'Node.js']} />
              <SkillCard title="Cloud Tools" Icon={Cloud} items={['AWS Lambda', 'API Gateway', 'S3', 'DynamoDB']} />
              <SkillCard title="AI / ML" Icon={Atom} items={['OpenAI', 'LangChain', 'Vector DBs', 'Prompt Engineering']} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, Icon, items }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-teal-400/40 transition-colors">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-teal-400 via-purple-500 to-blue-500 p-[2px]">
          <div className="h-full w-full rounded-xl bg-[#0b0d12] grid place-items-center">
            <Icon className="text-white/90" size={18} />
          </div>
        </div>
        <h4 className="text-white font-medium">{title}</h4>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
