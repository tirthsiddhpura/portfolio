import { motion } from 'framer-motion';

export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-24 md:py-36 w-full relative ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 text-center"
          >
            <span className="badge mb-4 inline-block">{subtitle || title}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{title}</h2>
            <div className="divider" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
