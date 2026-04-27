import Section from '../components/Section';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Building Premium UIs with Tailwind CSS & Framer Motion',
    excerpt: 'Learn how to combine Tailwind utility classes with Framer Motion animations to craft stunning, interactive interfaces that feel truly premium.',
    date: 'Oct 24, 2023',
    readTime: '5 min read',
    category: 'Frontend',
    categoryColor: 'hsl(258,90%,66%)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    title: 'The Future of Full-Stack Development in 2024',
    excerpt: 'Exploring server components, edge functions, and the new React ecosystem — what it all means for developers building modern web applications.',
    date: 'Sep 12, 2023',
    readTime: '8 min read',
    category: 'Trends',
    categoryColor: '#ec4899',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    title: 'Mastering TypeScript: From Basics to Advanced Patterns',
    excerpt: 'A deep dive into TypeScript generics, utility types, and design patterns that will level up your codebase and make it bulletproof.',
    date: 'Aug 5, 2023',
    readTime: '10 min read',
    category: 'TypeScript',
    categoryColor: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=700&q=80',
  },
];

export default function Blog() {
  return (
    <Section id="blog" title="Latest Articles" subtitle="From My Blog">

      {/* Featured post */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card overflow-hidden mb-10 group cursor-pointer"
      >
        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-full overflow-hidden">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: `${posts[0].categoryColor}18`, color: posts[0].categoryColor }}>
                {posts[0].category}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(139,92,246,0.1)', color: 'hsl(258,90%,66%)' }}>
                Featured
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug group-hover:text-gradient transition-all">
              {posts[0].title}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
              {posts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                <span className="flex items-center gap-1"><Calendar size={12} />{posts[0].date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{posts[0].readTime}</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                style={{ color: 'hsl(258,90%,66%)' }}>
                Read <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Secondary posts */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.slice(1).map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-card overflow-hidden group cursor-pointer flex flex-col"
          >
            <div className="h-48 overflow-hidden rounded-t-[1.25rem] relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: post.categoryColor, color: '#fff' }}>
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 text-xs mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-gradient transition-all flex-grow">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
                {post.excerpt}
              </p>
              <span className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all mt-auto"
                style={{ color: 'hsl(258,90%,66%)' }}>
                Read Article <ArrowRight size={14} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a href="#"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm glass transition-all hover:scale-105"
          style={{ color: 'hsl(258,90%,66%)', border: '1.5px solid rgba(139,92,246,0.3)' }}>
          View All Articles <ArrowRight size={16} />
        </a>
      </motion.div>
    </Section>
  );
}
