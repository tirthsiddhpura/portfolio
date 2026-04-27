import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    desc: 'A feature-rich e-commerce web app with product listings, cart, Stripe payments, and an admin dashboard. Solved slow checkout by implementing optimistic UI updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/tirthsiddhpura',
    caseStudyUrl: '#',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    badge: 'Full Stack',
    badgeColor: 'hsl(258,90%,66%)',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Frontend + Backend',
    desc: 'A collaborative task manager for remote teams featuring real-time updates, drag-and-drop boards, role-based access control, and team workspaces.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    liveUrl: '#',
    githubUrl: 'https://github.com/tirthsiddhpura',
    caseStudyUrl: '#',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    badge: 'SaaS',
    badgeColor: '#ec4899',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    category: 'AI Integration',
    desc: 'An AI-powered app that generates marketing copy, blog posts, and social content. Integrated OpenAI GPT-4 with custom prompt engineering for domain-specific output.',
    tech: ['React', 'OpenAI API', 'Node.js', 'Framer Motion', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/tirthsiddhpura',
    caseStudyUrl: '#',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
    badge: 'AI Powered',
    badgeColor: '#f59e0b',
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="My Work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-card group overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden rounded-t-[1.25rem]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }} />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: project.badgeColor }}>
                  {project.badge}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a href={project.liveUrl}
                  className="p-3 rounded-full backdrop-blur-md text-white transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <ExternalLink size={18} />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-full backdrop-blur-md text-white transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <FaGithub size={18} />
                </a>
              </div>
              <p className="absolute bottom-3 left-4 text-xs text-white/80 font-medium">{project.category}</p>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">{project.title}</h3>
              <p className="text-sm leading-relaxed mb-5 flex-grow"
                style={{ color: 'hsl(var(--muted-foreground))' }}>{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: 'rgba(139,92,246,0.1)', color: 'hsl(258,90%,66%)', border: '1px solid rgba(139,92,246,0.2)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.caseStudyUrl}
                className="flex items-center gap-1.5 text-sm font-semibold transition-all group/link"
                style={{ color: 'hsl(258,90%,66%)' }}>
                Read Case Study
                <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a href="https://github.com/tirthsiddhpura" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm glass transition-all hover:scale-105"
          style={{ color: 'hsl(258,90%,66%)', border: '1.5px solid rgba(139,92,246,0.3)' }}>
          <FaGithub size={16} /> View All on GitHub
        </a>
      </motion.div>
    </Section>
  );
}
