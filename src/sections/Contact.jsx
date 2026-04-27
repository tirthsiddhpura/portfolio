import Section from '../components/Section';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    // Replace with your Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Let's work together!</h3>
            <p className="text-muted-foreground">Fill out the form below and I'll get back to you as soon as possible.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-black/5 dark:bg-white/5 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-black/5 dark:bg-white/5 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="5" 
                required 
                className="w-full px-4 py-3 rounded-lg bg-black/5 dark:bg-white/5 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
            >
              {status === 'loading' ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {status === 'success' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center gap-2">
                <CheckCircle size={18} /> Message sent successfully!
              </motion.div>
            )}
            
            {status === 'error' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-500/10 text-red-500 rounded-lg flex items-center justify-center gap-2">
                <AlertCircle size={18} /> Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
