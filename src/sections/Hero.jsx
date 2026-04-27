import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const stats = [
  { value: '15+', label: 'Projects Built' },
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Happy Clients' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex mb-6">
              <span className="badge"><Star size={12} /> Available for Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6"
            >
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-gradient">Tirth Siddhapura</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Full Stack Developer &amp; UI/UX Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base md:text-lg mb-10 leading-relaxed"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              I craft visually stunning, high-performance web applications with clean code 
              and exceptional user experiences — from pixel-perfect frontends to robust backends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a href="#projects"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 glow-primary"
                style={{ background: 'linear-gradient(135deg, hsl(258,90%,66%), #a855f7)' }}>
                View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#resume"
                className="glass flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105">
                View Resume <ArrowRight size={16} className="rotate-45" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a href="https://github.com/tirthsiddhpura" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full glass hover:scale-110 transition-all duration-200"
                style={{ color: 'hsl(var(--muted-foreground))' }} aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/tirth-siddhapura" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full glass hover:scale-110 transition-all duration-200"
                style={{ color: 'hsl(var(--muted-foreground))' }} aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <span className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>Connect with me</span>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: 'spring', bounce: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-[-16px] rounded-full border-2 border-dashed opacity-30 animate-spin"
              style={{ borderColor: 'hsl(258,90%,66%)', animationDuration: '20s' }} />
            <div className="absolute inset-[-8px] rounded-full pulse-glow opacity-60"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3))' }} />

            <div className="gradient-border float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-secondary">
                <img
                  src="https://i.pinimg.com/736x/a0/aa/f6/a0aaf65182497882702a698421edfdfc.jpg"
                  alt="Tirth Siddhapura"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
              className="absolute -left-16 top-8 glass rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-2xl font-black text-gradient">15+</div>
              <div className="text-xs font-medium" style={{ color: 'hsl(var(--muted-foreground))' }}>Projects</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
              className="absolute -right-14 bottom-12 glass rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-2xl font-black text-gradient">2+</div>
              <div className="text-xs font-medium" style={{ color: 'hsl(var(--muted-foreground))' }}>Yrs Exp.</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 glass-card px-6 py-6 md:px-10"
        >
          <div className="grid grid-cols-3 divide-x" style={{ borderColor: 'hsl(var(--border))' }}>
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-extrabold text-gradient">{stat.value}</div>
                <div className="text-sm mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
