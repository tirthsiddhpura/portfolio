import { Mail, Phone, Globe, MapPin, Linkedin, Github, Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const cvData = {
  name: 'Tirth Siddhapura',
  title: 'Full Stack Developer & UI/UX Architect',
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
  summary: 'Results-driven Full Stack Developer with 3+ years of experience in crafting high-performance web applications. Expertise in the MERN stack (MongoDB, Express, React, Node.js) and modern frontend architectures. Proven track record of delivering scalable solutions, optimizing system performance by 40%, and leading cross-functional teams to success. Passionate about UI/UX excellence and clean, maintainable code.',
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'InnovateTech Systems',
      period: 'Jan 2022 - Present',
      points: [
        'Spearheaded the development of a flagship SaaS platform using React, Next.js, and Node.js, resulting in a 50% increase in user engagement.',
        'Implemented a microservices architecture using Docker and AWS, improving system reliability and deployment speed by 35%.',
        'Led the frontend optimization initiative, reducing page load times from 4.5s to 1.2s through advanced code splitting and caching strategies.',
        'Mentored junior developers and established code review standards that reduced production bugs by 20%.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'WebCraft Solutions',
      period: 'Jun 2020 - Dec 2021',
      points: [
        'Developed 20+ responsive web applications for global clients using the MERN stack and Tailwind CSS.',
        'Built a real-time collaborative task manager using Socket.io and Redux, improving team productivity for clients by 25%.',
        'Integrated multiple secure payment gateways (Stripe, Razorpay) and managed complex database migrations with MongoDB.',
        'Automated CI/CD pipelines using GitHub Actions, cutting manual deployment time by 80%.'
      ]
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Digital Pulsar',
      period: 'Jun 2019 - May 2020',
      points: [
        'Assisted in building pixel-perfect UI components for high-traffic e-commerce sites.',
        'Collaborated with UI/UX designers to translate Figma designs into interactive React components.',
        'Gained deep proficiency in CSS-in-JS, Framer Motion, and responsive design principles.'
      ]
    }
  ],
  skills: {
    frontend: ['React', 'Next.js', 'TypeScript', 'Redux/Zustand', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL'],
    tools: ['Git/GitHub', 'Docker', 'AWS (S3, EC2, Lambda)', 'Vercel', 'Firebase', 'Jest/Cypress']
  },
  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      school: 'Gujarat Technological University (GTU)',
      period: '2015 - 2019',
      desc: 'Graduated with a CPI of 8.5/10. Specialization in Software Engineering and Distributed Systems.'
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
