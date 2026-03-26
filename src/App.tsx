import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  User, 
  Mail, 
  Terminal, 
  Cpu, 
  Server,
  Cloud,
  Code2,
  Award,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[25rem] h-[25rem] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      {/* Navbar Placeholder */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3">
          <div className="text-xl font-bold italic gradient-text tracking-tighter">Noel Regis.</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
          </div>
          <a href="mailto:noel.regis04@gmail.com" className="btn-primary py-2 px-4 text-sm">
            Contact <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Full-Stack & AI Engineer
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 font-bold tracking-tight">
              Crafting <span className="gradient-text italic">Digital</span> <br /> 
              Experiences with <br />
              Intelligence.
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">
              BTech Student. Passionate about Full-Stack development, 
              AI/ML, and Fintech. Building robust, scalable, and intelligent web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                View Projects <ArrowRight size={18} />
              </button>
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" className="p-3 glass-card hover:bg-primary/20">
                  <Globe size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" className="p-3 glass-card hover:bg-primary/20">
                  <User size={20} />
                </a>
                <a href="mailto:noel.regis04@gmail.com" className="p-3 glass-card hover:bg-primary/20">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="relative z-10 glass-card p-4 aspect-square max-w-sm mx-auto overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-white/5">
                <div className="relative">
                  <Cpu size={120} className="text-primary animate-pulse" />
                  <div className="absolute inset-0 blur-2xl bg-primary/30 -z-10" />
                </div>
              </div>
              <div className="absolute top-8 right-8 animate-bounce-slow">
                 <Terminal size={40} className="text-accent/50" />
              </div>
              <div className="absolute bottom-12 left-10 animate-bounce-slow delay-150">
                 <Code2 size={50} className="text-primary/40" />
              </div>
            </div>
            {/* Visual elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional <span className="gradient-text">Journey</span></h2>
            <p className="text-muted-foreground">Practical experience building the future at top companies.</p>
          </div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/0 before:via-primary/50 before:to-primary/0">
            
            {/* Experience Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Code2 size={18} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                    <div className="flex items-center justify-between mb-2">
                        <time className="font-bold text-primary font-mono text-sm uppercase tracking-wider">Dec 2025 – Feb 2026</time>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Internship</span>
                    </div>
                    <h3 className="text-xl font-bold">Full-Stack Engineer Intern</h3>
                    <p className="text-white/80 font-medium mb-4">AnkFin Incorporation • New York, US</p>
                    <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                        <li>• Developed a React 18 Personal CFO integrating Stripe, Unit, and Plaid.</li>
                        <li>• Engineered AI-driven analytics and Tesseract OCR for automated processing.</li>
                        <li>• Implemented Redux state management and JWT-secured APIs.</li>
                    </ul>
                </div>
            </div>

            {/* Experience Item 2 (New) */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/50 bg-background text-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <User size={18} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                    <div className="flex items-center justify-between mb-2">
                        <time className="font-bold text-accent font-mono text-sm uppercase tracking-wider">July 2025 – Dec 2025</time>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Fellowship</span>
                    </div>
                    <h3 className="text-xl font-bold">Investment Banking Fellow</h3>
                    <p className="text-white/80 font-medium mb-4">Marquee Equity • Delhi, India</p>
                    <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                        <li>• Assisted in capital raising for startups through market research.</li>
                        <li>• Prepared investor pitch decks and supported due diligence.</li>
                        <li>• Financial modeling for client mandates and strategic positioning.</li>
                    </ul>
                </div>
            </div>

            {/* Experience Item 3 (ZeTheta) */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Cpu size={18} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                    <div className="flex items-center justify-between mb-2">
                        <time className="font-bold text-primary font-mono text-sm uppercase tracking-wider">May 2025 – July 2025</time>
                    </div>
                    <h3 className="text-xl font-bold">AI Engineer Intern</h3>
                    <p className="text-white/80 font-medium mb-4">ZeTheta Algorithms • Mumbai, India</p>
                    <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                        <li>• Led the design of dynamic, role-based dashboards and live interview features.</li>
                        <li>• Enhanced user experience and real-time data flow across the platform.</li>
                        <li>• Promoted to team lead for outstanding performance.</li>
                    </ul>
                </div>
            </div>

            {/* Additiona items would go here */}
            <div className="text-center mt-12 hidden md:block">
               <span className="text-muted-foreground text-sm italic">And more at RDCC & Cybtree...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
            <p className="text-muted-foreground">Engineering solutions for complex problems.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* VoteHub */}
            <motion.div whileHover={{ y: -5 }} className="glass-card group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/30 to-background flex items-center justify-center relative">
                    <div className="text-6xl font-black text-white/5 uppercase tracking-tighter">VoteHub</div>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Terminal size={60} className="text-primary/40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">VoteHub</h3>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 glass-card hover:bg-primary/20"><Globe size={18}/></a>
                            <a href="#" className="p-2 bg-primary/20 text-primary rounded-lg font-bold text-xs flex items-center gap-1">LIVE</a>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        Full-stack web app for creating and participating in live polls with real-time results, 
                        scalability, and secure voting mechanism.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Node.js', 'Express', 'React', 'PostgreSQL', 'Socket.io'].map(t => (
                            <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-wider">{t}</span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Novel AI */}
            <motion.div whileHover={{ y: -5 }} className="glass-card group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-accent/30 to-background flex items-center justify-center relative">
                    <div className="text-6xl font-black text-white/5 uppercase tracking-tighter">Novel AI</div>
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Cpu size={60} className="text-accent/40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">Novel AI</h3>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 glass-card hover:bg-accent/20"><Globe size={18}/></a>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        AI detection and plagiarism checker leveraging advanced models and Winston API to 
                        verify content originality with high precision.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Express', 'OpenAI', 'SCSS', 'Winston API'].map(t => (
                            <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-wider">{t}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Bento Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center md:text-left">Milestones & <br /><span className="gradient-text">Achievements</span></h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 glass-card p-8 flex flex-col justify-between group">
                <div>
                   <Award size={32} className="text-primary mb-4" />
                   <h3 className="text-3xl font-bold mb-2">600+ LeetCode</h3>
                   <p className="text-muted-foreground">Solved complex algorithmic problems across various categories.</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm">
                    Verified on LeetCode <ArrowRight size={14} />
                </div>
            </div>
            
            <div className="glass-card p-8 group">
                <div className="text-accent mb-4"><Award size={32}/></div>
                <h3 className="text-xl font-bold mb-1">5-Star</h3>
                <p className="text-xs text-muted-foreground">HackerRank (Java & SQL)</p>
            </div>
            <div className="glass-card p-6 border-l-4 border-l-accent">
                  <div className="flex items-center gap-3 mb-2 font-bold"><Server size={20} className="text-accent"/> Backend</div>
                  <p className="text-xs text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB, Redis, Prisma</p>
                </div>

            <div className="glass-card p-8 group">
                <div className="text-primary mb-4"><Cloud size={32}/></div>
                <h3 className="text-xl font-bold mb-1">Vakilsearch</h3>
                <p className="text-xs text-muted-foreground">Selected for funding among 100 startups.</p>
            </div>

            <div className="md:col-span-2 glass-card p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-transparent">
                <h3 className="text-5xl font-black mb-2 italic tracking-tighter">60% ROI</h3>
                <p className="text-muted-foreground">Achieved in 20 days trading Indian options.</p>
            </div>

            <div className="md:col-span-2 glass-card p-8 flex items-center gap-6">
                <div className="p-4 bg-accent/20 rounded-2xl"><BookOpen size={24} className="text-accent"/></div>
                <div>
                    <h3 className="font-bold">BTech CSE</h3>
                    <p className="text-sm text-muted-foreground">GPA - 8.2 • Batch of 2027</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Achievements Snapshot */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold gradient-text">600+</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">LeetCode Solved</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-accent">5-Star</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">HackerRank</span>
                </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
                Built with React, Tailwind & Framer Motion. © 2026 Noel Regis
            </div>

            <div className="flex items-center gap-4">
               <a href="#" className="hover:text-primary transition-colors"><User size={20}/></a>
               <a href="#" className="hover:text-primary transition-colors"><Globe size={20}/></a>
               <a href="#" className="hover:text-primary transition-colors"><Mail size={20}/></a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
