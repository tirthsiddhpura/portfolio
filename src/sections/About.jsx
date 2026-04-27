import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Code, Layout, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: <Code size={28} />,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable, and performant code following modern best practices and design patterns.',
    color: 'hsl(258,90%,66%)',
  },
  {
    icon: <Layout size={28} />,
    title: 'Modern UI/UX',
    desc: 'Designing intuitive, aesthetically stunning interfaces that users love to interact with.',
    color: '#ec4899',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Problem Solver',
    desc: 'Translating complex requirements into elegant, efficient solutions that exceed expectations.',
    color: '#f59e0b',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
            A Developer Passionate About{' '}
            <span className="text-gradient">Building Great Products</span>
          </h3>
          <div className="space-y-5 text-base md:text-lg leading-relaxed"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            <p>
              Hi! I'm <strong style={{ color: 'hsl(var(--foreground))' }}>Tirth Siddhapura</strong>, a Full Stack 
              Developer based in India with a passion for crafting exceptional digital experiences. I specialize in 
              building modern web applications using React, Node.js, and cutting-edge technologies.
            </p>
            <p>
              My journey into development started with curiosity — wanting to understand how things on the internet 
              actually work. That curiosity quickly evolved into a love for building things from scratch, writing 
              elegant code, and solving real-world problems through software.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or writing articles about my learnings to help the developer community.
            </p>
          </div>

          {/* Quick facts */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { label: 'Location', value: 'India 🇮🇳' },
              { label: 'Experience', value: '2+ Years' },
              { label: 'Specialty', value: 'Full Stack Dev' },
              { label: 'Availability', value: 'Open to Work ✅' },
            ].map(f => (
              <div key={f.label} className="glass-card p-4">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: 'hsl(258,90%,66%)' }}>{f.label}</p>
                <p className="font-semibold text-sm">{f.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={itemVariants}
              className="glass-card p-6 flex items-start gap-5"
            >
              <div className="p-3 rounded-xl flex-shrink-0" style={{ background: `${h.color}18`, color: h.color }}>
                {h.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">{h.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {h.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
