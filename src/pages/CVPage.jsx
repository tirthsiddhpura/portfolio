import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MapPin, Linkedin, Github, Download, Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const cvData = {
  name: 'Tirth Siddhapura',
  title: 'Full Stack Developer',
  contact: [
    { icon: <Mail size={14} />, text: 'tirthsiddhapura@gmail.com', href: 'mailto:tirthsiddhapura@gmail.com' },
    { icon: <Phone size={14} />, text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: <Globe size={14} />, text: 'tirth.dev', href: '#' },
    { icon: <MapPin size={14} />, text: 'Gujarat, India', href: '#' },
  ],
  social: [
    { icon: <Linkedin size={14} />, text: 'linkedin.com/in/tirth-siddhapura', href: 'https://linkedin.com/in/tirth-siddhapura' },
    { icon: <Github size={14} />, text: 'github.com/tirthsiddhpura', href: 'https://github.com/tirthsiddhpura' },
  ],
  summary: 'Passionate Full Stack Developer with 2+ years of experience building scalable web applications. Expert in React, Node.js, and cloud architectures. Dedicated to clean code and exceptional user experiences.',
  experience: [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      points: [
        'Architected and deployed high-performance React applications serving 100k+ users.',
        'Optimized backend API response times by 40% using Redis caching.',
        'Led a team of 4 developers in transitioning from monolithic to microservices architecture.',
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Creative Digital Agency',
      period: '2020 - 2022',
      points: [
        'Built 15+ custom client websites using React, Tailwind CSS, and Node.js.',
        'Implemented complex state management solutions using Redux Toolkit.',
        'Integrated multiple 3rd party APIs including Stripe for payments.',
      ]
    }
  ],
  skills: {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase']
  },
  education: [
    {
      degree: 'Bachelor of Computer Science',
      school: 'Gujarat Technological University',
      period: '2015 - 2019',
      desc: 'First Class with Distinction.'
    }
  ]
};

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* Navbar for CV Page (Hidden on Print) */}
      <nav className="print:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all"
          >
            <Printer size={16} /> Print / Save PDF
          </button>
        </div>
      </nav>

      <div className="max-w-[1000px] mx-auto p-8 md:p-16 print:p-0">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b-2 border-slate-900 pb-10 mb-10">
          <div>
            <h1 className="text-5xl font-black tracking-tight mb-2 uppercase">{cvData.name}</h1>
            <p className="text-2xl font-bold text-indigo-600 uppercase tracking-widest">{cvData.title}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium">
            {cvData.contact.map((c, i) => (
              <a key={i} href={c.href} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <span className="text-indigo-600">{c.icon}</span> {c.text}
              </a>
            ))}
            {cvData.social.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <span className="text-indigo-600">{s.icon}</span> {s.text}
              </a>
            ))}
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-lg font-black uppercase tracking-widest border-b border-slate-200 pb-2 mb-4">Professional Summary</h2>
              <p className="text-slate-600 leading-relaxed italic">{cvData.summary}</p>
            </section>

            <section>
              <h2 className="text-lg font-black uppercase tracking-widest border-b border-slate-200 pb-2 mb-6">Work Experience</h2>
              <div className="space-y-8">
                {cvData.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <span className="text-sm font-bold text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-indigo-600 font-bold text-sm mb-3">{exp.company}</p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm">
                      {exp.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            
            <section>
              <h2 className="text-lg font-black uppercase tracking-widest border-b border-slate-200 pb-2 mb-4">Core Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.frontend.map(s => <span key={s} className="px-2 py-1 bg-slate-100 rounded text-xs font-bold">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.backend.map(s => <span key={s} className="px-2 py-1 bg-slate-100 rounded text-xs font-bold">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.tools.map(s => <span key={s} className="px-2 py-1 bg-slate-100 rounded text-xs font-bold">{s}</span>)}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-black uppercase tracking-widest border-b border-slate-200 pb-2 mb-4">Education</h2>
              {cvData.education.map((edu, i) => (
                <div key={i}>
                  <h3 className="font-bold text-sm mb-1">{edu.degree}</h3>
                  <p className="text-xs text-indigo-600 font-bold mb-1">{edu.school}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase mb-2">{edu.period}</p>
                  <p className="text-xs text-slate-500">{edu.desc}</p>
                </div>
              ))}
            </section>

            <section className="print:hidden">
              <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                <h3 className="font-bold text-indigo-900 mb-2">Tip for you</h3>
                <p className="text-xs text-indigo-700 leading-relaxed">
                  You can click the "Print / Save PDF" button above to save this CV as a perfectly formatted PDF document.
                </p>
              </div>
            </section>
          </div>

        </div>

        <footer className="mt-16 pt-8 border-t border-slate-100 text-center text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
          {cvData.name} — Full Stack Developer — Gujarat, India
        </footer>
      </div>
    </div>
  );
}
