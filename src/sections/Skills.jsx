import Section from '../components/Section';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'hsl(258,90%,66%)',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'Backend',
    color: '#ec4899',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'Database & Tools',
    color: '#f59e0b',
    icon: '🛠️',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="My Skills" subtitle="Technical Expertise">

      {/* Category cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-card p-8"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${cat.color}18` }}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold">{cat.title}</h3>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {cat.skills.map((skill, sIdx) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${cat.color}15`, color: cat.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + sIdx * 0.1, ease: 'easeOut' }}
                      style={{
                        background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech pill cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest mb-6"
          style={{ color: 'hsl(var(--muted-foreground))' }}>
          Other Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['Figma', 'Next.js', 'Redux', 'Firebase', 'AWS', 'Linux', 'Vite', 'Prisma', 'Zustand', 'Framer Motion'].map((tech) => (
            <span key={tech}
              className="px-4 py-2 rounded-full text-sm font-medium glass transition-all hover:scale-105 cursor-default"
              style={{ color: 'hsl(var(--foreground))' }}>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
