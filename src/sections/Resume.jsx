import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const experience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    period: '2022 - Present',
    desc: 'Leading the development of high-scale web applications using React, Node.js, and AWS. Improved system performance by 40% through architectural optimizations.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Creative Digital Agency',
    location: 'Mumbai, India',
    period: '2020 - 2022',
    desc: 'Developed and maintained multiple client projects. Specialized in building responsive frontends with React and robust RESTful APIs with Express.',
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Hub',
    location: 'Ahmedabad, India',
    period: '2019 - 2020',
    desc: 'Assisted in the development of internal tools and dashboard components. Gained deep experience with JavaScript, HTML, and CSS best practices.',
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Gujarat Technological University',
    location: 'Gujarat, India',
    period: '2015 - 2019',
    desc: 'Focused on software engineering, data structures, and web technologies. Graduated with honors.',
  },
];

const TimelineItem = ({ item, isExp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: isExp ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-12 last:pb-0"
  >
    {/* Line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:hidden">
      <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
    </div>

    <div className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h3 className="text-xl font-bold text-gradient">
          {isExp ? item.title : item.degree}
        </h3>
        <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
          <Calendar size={12} /> {item.period}
        </div>
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          {isExp ? <Briefcase size={14} className="text-primary" /> : <GraduationCap size={14} className="text-primary" />}
          {isExp ? item.company : item.school}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin size={12} /> {item.location}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {item.desc}
      </p>
    </div>
  </motion.div>
);

export default function Resume() {
  return (
    <Section id="resume" title="Resume" subtitle="My Journey">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Briefcase size={24} />
            </div>
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>
          
          <div className="relative">
            {experience.map((exp, i) => (
              <TimelineItem key={i} item={exp} isExp={true} index={i} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          
          <div className="relative">
            {education.map((edu, i) => (
              <TimelineItem key={i} item={edu} isExp={false} index={i} />
            ))}
          </div>
        </div>

      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground mb-6">Want to see the full details?</p>
        <Link to="/cv" className="glow-primary inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold transition-all hover:scale-105">
          View & Print Full CV
        </Link>
      </motion.div>
    </Section>
  );
}
