import React, { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Mail,
  Terminal,
  Cpu,
  Cloud,
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
  Loader2,
  ExternalLink,
  Database,
  Zap
} from 'lucide-react';

const Github = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-3.78c.15-.38.65-1.79-.15-3.72 0 0-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0c-2.7-1.78-3.9-1.4-3.9-1.4a5.2 5.2 0 0 0-.15 3.72A5.2 5.2 0 0 0 3 11.24c0 5.22 3 6.42 6 6.76-.7.63-1 1.5-1 2.44V22" />
    <path d="M8 20c-3 1-4-1-5-2" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const LeetCode = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.105 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.665 2.665 0 0 1 .458-1.041 2.697 2.697 0 0 1 .596-.522l3.854-4.126 5.406-5.788c.5-.536.471-1.37-.066-1.87A1.376 1.376 0 0 0 13.483 0zm5.174 11.603a1.379 1.379 0 0 0-1.375 1.381c0 .762.613 1.38 1.375 1.38 3.053 0 5.527 2.484 5.527 5.545 0 .762.613 1.38 1.375 1.38s1.375-.618 1.375-1.38c0-4.582-3.704-8.306-8.277-8.306z" />
  </svg>
);


const PROJECTS = [
  {
    title: "VoteHub",
    role: "Core Developer",
    description: "Architected a real-time, high-concurrency polling ecosystem. Leveraged WebSockets for instant data replication and PostgreSQL for transactional integrity during peak voting loads.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Tailwind"],
    github: "https://github.com/noelregis718/Vote-Hub",
    demo: "#",
    icon: <Terminal size={32} />
  },
  {
    title: "Your Personal CFO",
    role: "Lead Engineer",
    description: "Built a sophisticated financial orchestration hub (Smart Tracking) integrating Stripe, Unit, and Plaid. Orchestrated complex money-movement workflows and real-time ledger synchronization.",
    tech: ["React 18", "Node.js", "Stripe API", "Unit Banking", "Plaid"],
    github: "https://github.com/noelregis718/Smart-Tracking",
    demo: "#",
    icon: <Database size={32} />
  },
  {
    title: "Website Scrapper",
    role: "Automation Architect",
    description: "Developed a high-throughput automated data extraction engine. Engineered robust anti-detection mechanisms and parallel processing pipelines for enterprise-scale scraping operations.",
    tech: ["Node.js", "Puppeteer", "AI Analytics", "Redis", "Docker"],
    github: "https://github.com/noelregis718/Website-Scrapper",
    demo: "#",
    icon: <Zap size={32} />
  },
  {
    title: "Social Media Alchemist",
    role: "AI Engineer",
    description: "Engineered an AI-driven social orchestration platform. Leveraged LLMs for automated high-fidelity content generation and Selenium for cross-platform publishing automation.",
    tech: ["Python", "OpenAI API", "Selenium", "Flask", "PostgreSQL"],
    github: "https://github.com/noelregis718/Social-Media-Alchemist",
    demo: "#",
    icon: <Cpu size={32} />
  }
];

const TECH_STACK = [
  "js", "ts", "html", "css", "react", "tailwind", "bootstrap", "sass", "angular",
  "nodejs", "express", "python", "fastapi", "graphql", "aws", "docker",
  "kubernetes", "postgres", "mongodb", "redis", "mysql", "firebase",
  "supabase", "prisma", "java", "c", "cpp", "vscode", "github", "linux", "vercel", "postman"
];

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => (
  <motion.div
    className="shrink-0 w-[450px] md:w-[600px] aspect-[4/3] md:aspect-video glass-card overflow-hidden group relative flex flex-col"
  >
    <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 select-none pointer-events-none">
      0{index + 1}
    </div>

    <div className="p-8 md:p-12 flex flex-col h-full justify-between relative z-10">
      <div>
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 border border-white/20 group-hover:scale-110 transition-transform duration-500">
          {project.icon}
        </div>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter uppercase">{project.title}</h3>
        <p className="text-[#FF5C00] font-bold text-lg mb-6 tracking-wide uppercase">{project.role}</p>
        <p className="text-white text-lg leading-relaxed max-w-md">
          {project.description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-mono text-white/70 uppercase tracking-widest">{t}</span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-[#FF5C00] hover:text-white transition-all transform active:scale-95"
          >
            <Github size={18} /> Source Code
          </a>
          <a
            href={project.demo}
            className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProcessStep = ({ number, title, children }: { number: number, title: string, children: React.ReactNode }) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.8,
      delay: (number - 1) * 0.2,
      type: "spring",
      stiffness: 50,
      damping: 12
    }}
    className="flex-1 flex flex-col items-center group min-w-[160px]"
  >
    <div className="w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center text-black/40 font-medium z-10">
      {number}
    </div>
    <div className="w-px h-8 bg-black/10 -mt-px -mb-px" />

    <div className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl p-3 md:p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm relative group">
      <div className="w-full aspect-[4/3] rounded-lg bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px] relative overflow-hidden flex items-center justify-center border border-black/5 mb-3 group-hover:bg-[#FF5C00]/5 transition-colors duration-500 p-2">
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
      <h3 className="font-semibold text-center text-[13px] md:text-sm tracking-tight text-black flex items-center gap-1.5 justify-center leading-tight h-8 w-full whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="text-black/50">{number}.</span> {title}
      </h3>
    </div>
  </motion.div>
);

const App: React.FC = () => {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvzvgewe', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[25rem] h-[25rem] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      {/* Navbar Placeholder */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="fixed top-0 w-full z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-card !border-black/20 !rounded-sm px-6 py-3">
          <div className="text-xl font-bold text-primary tracking-tighter">Noel Regis</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
          </div>
          <a href="mailto:noelregis718@gmail.com" className="btn-primary !bg-black py-2 px-4 text-sm hover:!bg-black/80">
            Contact <ArrowRight size={16} />
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-48 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
          >

            <h1 className="text-5xl md:text-7xl mb-6 font-bold tracking-tight leading-tight">
              <span className="whitespace-nowrap">Architecting <span className="text-[#FF5C00]">Modern</span></span> <br />
              Web Solutions.
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed relative z-10">
              Specializing in <span className="text-foreground font-bold">Full-Stack Engineering</span> and <span className="text-foreground font-bold">AI Systems</span>.
              I architect high-performance platforms integrating <span className="text-primary font-bold">Fintech APIs</span>,
              <span className="text-primary font-bold">Advanced RAG Pipelines</span>, and <span className="text-primary font-bold">Cloud-Native</span> solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary !bg-black hover:!bg-black/80">
                View Projects <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", damping: 12, stiffness: 60 }}
            className="relative translate-x-[96px]"
          >

            <div className="relative z-10 aspect-square max-w-sm mx-auto overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/3.jpeg"
                alt="Noel Regis"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Visual elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative bg-[#FF5C00] z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">Professional <span className="">Journey</span></h2>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white">

            {/* Experience Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group items-start"
            >
              <div className="hidden md:block absolute top-[85px] left-1/2 -translate-y-1/2 w-12 h-0.5 bg-white md:group-odd:translate-x-0 md:group-even:-translate-x-full"></div>
              <div className="md:hidden absolute top-[85px] left-5 w-6 h-0.5 bg-white"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                <div className="flex items-center justify-between mb-2">
                  <time className="font-bold text-white font-sans text-base tracking-widest">Dec 2025 – Feb 2026</time>
                </div>
                <h3 className="text-3xl font-bold text-white leading-relaxed">Full-Stack Engineer Intern</h3>
                <p className="text-white font-normal mb-4 text-lg leading-relaxed">AnkFin Incorporation • New York, US</p>
                <ul className="text-white space-y-4 text-lg leading-relaxed font-normal list-none">
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Engineered a high-performance React 18 Personal CFO from scratch, seamlessly integrating <strong>Stripe</strong> for payments, <strong>Unit</strong> for banking orchestration, and <strong>Plaid</strong> for real-time financial data synchronization.</span></li>
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Developed sophisticated AI-driven financial analytics, leveraging <strong>Tesseract OCR</strong> for automated processing of complex financial documents and receipt-driven data extraction.</span></li>
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Architected a global state management architecture using <strong>Redux Toolkit</strong> and implemented a secure ecosystem with <strong>JWT-based</strong> authentication and protected API routes.</span></li>
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Designed and optimized backend services to handle asynchronous financial transactions and cross-provider data integrity.</span></li>
                </ul>
              </div>
            </motion.div>

            {/* Experience Item 2 (New) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group items-start"
            >
              <div className="hidden md:block absolute top-[85px] left-1/2 -translate-y-1/2 w-12 h-0.5 bg-white md:group-odd:translate-x-0 md:group-even:-translate-x-full"></div>
              <div className="md:hidden absolute top-[85px] left-5 w-6 h-0.5 bg-white"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                <div className="flex items-center justify-between mb-2">
                  <time className="font-bold text-white font-sans text-sm tracking-widest">July 2025 – Dec 2025</time>
                </div>
                <h3 className="text-3xl font-bold text-white leading-relaxed">Investment Banking Fellow</h3>
                <p className="text-white font-normal mb-4 text-lg leading-relaxed">Marquee Equity • Delhi, India</p>
                <ul className="text-white space-y-4 text-lg leading-relaxed font-normal list-none">
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Spearheaded market research and deep-dive competitor analysis to support capital raising initiatives for high-growth tech startups and early-stage ventures.</span></li>
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Crafted high-fidelity investor pitch decks and sophisticated financial models to support strategic fundraising mandates and due diligence processes.</span></li>
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Analyzed complex financial data sets to identify strategic positioning opportunities and investor alignment for diverse client mandates.</span></li>
                </ul>
              </div>
            </motion.div>

            {/* Experience Item 3 (ZeTheta) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group items-start"
            >
              <div className="hidden md:block absolute top-[85px] left-1/2 -translate-y-1/2 w-12 h-0.5 bg-white md:group-odd:translate-x-0 md:group-even:-translate-x-full"></div>
              <div className="md:hidden absolute top-[85px] left-5 w-6 h-0.5 bg-white"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                <div className="flex items-center justify-between mb-2">
                  <time className="font-bold text-white font-sans text-sm tracking-widest">May 2025 – July 2025</time>
                </div>
                <h3 className="text-3xl font-bold text-white leading-relaxed">AI Engineer Intern</h3>
                <p className="text-white font-normal mb-4 text-lg leading-relaxed">ZeTheta Algorithms • Mumbai, India</p>
                <ul className="text-white space-y-4 text-lg leading-relaxed font-normal list-none">
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Led the design and development of dynamic, role-based dashboards, achieving high visual impact and optimized data visualization for interview performance metrics.</span></li>
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Developed mission-critical live interview simulation features, optimizing real-time data flow using WebSockets and React-based state management.</span></li>
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Enhanced overall platform experience and latency through strategic performance profiling and UI/UX architectural refinements.</span></li>
                </ul>
              </div>
            </motion.div>


            {/* Experience Item 5 (Cybtree) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group items-start"
            >
              <div className="hidden md:block absolute top-[85px] left-1/2 -translate-y-1/2 w-12 h-0.5 bg-white md:group-odd:translate-x-0 md:group-even:-translate-x-full"></div>
              <div className="md:hidden absolute top-[85px] left-5 w-6 h-0.5 bg-white"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                <div className="flex items-center justify-between mb-2">
                  <time className="font-bold text-white font-sans text-sm tracking-widest">March 2025 – April 2025</time>
                </div>
                <h3 className="text-3xl font-bold text-white leading-relaxed">AI Engineer Intern</h3>
                <p className="text-white font-normal mb-4 text-lg leading-relaxed">Cybtree • Noida, India</p>
                <ul className="text-white space-y-4 text-lg leading-relaxed font-normal list-none">
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Architected and developed a sophisticated automated attack surface monitoring tool, integrating AI-based risk analysis for proactive vulnerability detection and threat mapping.</span></li>
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Implemented high-performance network scanning and logging modules to provide real-time security insights and risk scoring for enterprise environments.</span></li>
                  <li className="flex gap-4 items-start"><span className="shrink-0">•</span><span>Designed an automated reporting engine that simplifies complex security findings into actionable intelligence for developers and stakeholders.</span></li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={containerRef} id="projects" className="relative h-[400vh] mb-0">
        <div className="sticky top-24 w-full flex flex-col overflow-hidden bg-white/[0.01] pt-18 pb-18">
          <div className="px-6 mb-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">Featured <span className="text-[#FF5C00]">Projects</span></h2>
            </div>
          </div>

          <motion.div
            style={{ x }}
            className="flex gap-12 px-6 md:px-[calc((100vw-80rem)/2)] items-start"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee Section */}
      <section className="py-16 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight -ml-2">
            My Arsenal. <span className="text-white/60">The Best Tools.</span>
          </h2>
        </div>

        <div className="relative border-y border-white/10 py-8 md:py-12 flex overflow-x-hidden group hover-pause bg-black/40 shadow-2xl">
          {/* Gradient masks for seamless infinite scrolling effect on the edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-20 px-6 md:px-10 w-max">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <img
                key={`${tech}-${i}`}
                src={`https://skillicons.dev/icons?i=${tech}`}
                alt={`${tech} icon`}
                className="w-14 h-14 md:w-20 md:h-20 hover:scale-125 hover:-translate-y-2 transition-transform duration-300 drop-shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How I build and think section */}
      <section className="py-24 px-6 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              My Strategic <span className="text-[#FF5C00]">Workflow Technique</span>
            </h2>
            <p className="text-black/60 font-medium max-w-none mx-auto text-sm md:text-base">
              A strategic roadmap for building scalable systems.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 lg:gap-6 justify-between w-full">
            <ProcessStep number={1} title="Analyze & Architect">
              <div className="bg-white border border-black/10 rounded p-2 shadow-sm flex flex-col gap-1.5 w-[85%]">
                <div className="h-5 w-full border border-black/10 rounded-sm px-1.5 flex items-center bg-black/5 text-[9px] text-black/50 font-mono">Client Interface</div>
                <div className="h-5 w-full border border-black/10 rounded-sm px-1.5 flex items-center bg-black/5 text-[9px] text-black/50 font-mono">Core API Service</div>
                <div className="h-5 w-full border border-black/10 rounded-sm px-1.5 flex items-center bg-black/5 text-[9px] text-black/50 font-mono">PostgreSQL Edge</div>
              </div>
            </ProcessStep>

            <ProcessStep number={2} title="Train & Integrate AI">
              <div className="bg-white border border-black/10 rounded p-2 shadow-sm w-[90%] flex flex-col gap-2">
                <div className="w-full flex items-center gap-1">
                  <Database size={10} className="text-[#FF5C00]" />
                  <div className="h-1.5 bg-black/10 rounded w-1/2" />
                </div>
                <div className="relative border border-[#FF5C00]/30 bg-[#FF5C00]/5 rounded py-1.5 px-2 flex items-center gap-1 w-full shadow-sm">
                  <Zap size={10} className="text-[#FF5C00] animate-pulse" />
                  <span className="text-[8px] font-bold text-[#FF5C00]">Vectorizing...</span>
                </div>
              </div>
            </ProcessStep>

            <ProcessStep number={3} title="Develop Full-Stack">
              <div className="bg-white border border-black/10 rounded shadow-sm w-[90%] overflow-hidden flex flex-col">
                <div className="bg-black/5 border-b border-black/10 px-2 py-1 flex items-center gap-1">
                  <Terminal size={10} className="text-black/40" />
                  <span className="text-[8px] font-mono font-medium text-black/60">main.tsx</span>
                </div>
                <div className="p-2 flex flex-col gap-1.5">
                  <div className="w-3/4 h-1.5 bg-[#FF5C00]/40 rounded" />
                  <div className="w-full h-1.5 bg-black/10 rounded" />
                  <div className="w-5/6 h-1.5 bg-black/10 rounded" />
                  <div className="w-1/2 h-1.5 bg-black/10 rounded" />
                </div>
              </div>
            </ProcessStep>

            <ProcessStep number={4} title="Polish & Optimize">
              <div className="bg-white border border-black/10 rounded shadow-sm w-[90%] p-2 flex flex-col gap-2 justify-center h-full">
                <div className="flex items-center justify-between border border-black/5 rounded-sm p-1.5">
                  <span className="text-[8px] font-medium text-black/60">Performance</span>
                  <div className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center text-green-600">
                    <span className="text-[7px] font-bold">99</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border border-black/5 rounded-sm p-1.5">
                  <span className="text-[8px] font-medium text-black/60">Best Practices</span>
                  <div className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center text-green-600">
                    <span className="text-[7px] font-bold">100</span>
                  </div>
                </div>
              </div>
            </ProcessStep>

            <ProcessStep number={5} title="Deploy & Monitor">
              <div className="bg-white border border-black/10 rounded shadow-sm w-[90%] p-2 flex flex-col items-center justify-center h-[90%]">
                <div className="w-full flex justify-between items-center mb-3">
                  <Cloud size={12} className="text-black/60" />
                  <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-200">
                    <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[7px] font-bold text-green-700 uppercase">Live</span>
                  </div>
                </div>
                <div className="w-full space-y-1">
                  <div className="w-full flex justify-between text-[8px] text-black/60 font-mono">
                    <span>Uptime</span> <span>99.99%</span>
                  </div>
                  <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-green-500" />
                  </div>
                </div>
              </div>
            </ProcessStep>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 relative bg-[#265b5b] overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#ffffff_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Heading & Info */}
            <div className="flex flex-col justify-center text-left py-12 md:pr-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-[1.05]">
                  Let's <br />
                  build <span className="italic underline decoration-white/30">results</span>.
                </h2>
                <p className="text-white text-xl mb-16 max-w-md font-medium leading-relaxed opacity-80">
                  I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
                </p>
              </motion.div>

              <div className="space-y-12">
                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-6 text-white group"
                  >
                    <Mail size={32} className="text-white/80 group-hover:text-white transition-colors shrink-0" />
                    <a href="mailto:noelregis718@gmail.com" className="text-2xl md:text-3xl font-bold tracking-tight hover:text-white/80 transition-colors">noelregis718@gmail.com</a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-6 text-white group"
                  >
                    <Phone size={32} className="text-white/80 group-hover:text-white transition-colors shrink-0" />
                    <a href="tel:7319546900" className="text-2xl md:text-3xl font-bold tracking-tight hover:text-white/80 transition-colors">7319546900</a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center gap-6 text-white group"
                  >
                    <MapPin size={32} className="text-white/80 group-hover:text-white transition-colors shrink-0" />
                    <a
                      href="https://www.google.com/maps/place/Asansol,+West+Bengal,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl md:text-3xl font-bold tracking-tight hover:text-white/80 transition-colors cursor-pointer"
                    >
                      Asansol, West Bengal, India
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Card: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col min-h-[500px]"
            >
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle2 size={40} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-black tracking-tight">Message Sent!</h3>
                    <p className="text-black/60 max-w-xs leading-relaxed">
                      Thank you for reaching out, Noel. Your message has been received and you'll hear back within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="text-primary font-bold hover:underline py-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col"
                  >
                    <h3 className="text-3xl font-bold mb-8 text-black tracking-tighter">Get in Touch</h3>

                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="name" className="text-sm font-semibold text-black/60">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="Noel Regis"
                          className="w-full px-5 py-4 bg-secondary border border-black/5 rounded-md text-black placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        />
                      </div>

                      <div className="flex flex-col gap-3">
                        <label htmlFor="email" className="text-sm font-semibold text-black/60">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          placeholder="noel@example.com"
                          className="w-full px-5 py-4 bg-secondary border border-black/5 rounded-md text-black placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        />
                      </div>

                      <div className="flex flex-col gap-3">
                        <label htmlFor="message" className="text-sm font-semibold text-black/60">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          placeholder="Tell me about your project..."
                          className="w-full px-5 py-4 bg-secondary border border-black/5 rounded-md text-black placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none font-medium"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-4 bg-black text-white rounded-sm font-bold text-center flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4 shadow-lg shadow-black/10 disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            Sending... <Loader2 size={20} className="animate-spin" />
                          </>
                        ) : (
                          <>
                            Send Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      {formStatus === 'error' && (
                        <p className="text-red-500 text-xs font-bold text-center mt-2">
                          Something went wrong. Please try again or email me directly.
                        </p>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-lg md:text-xl font-bold tracking-tight text-white/80 cursor-default text-center md:text-left">
            Noel Regis © {new Date().getFullYear()}. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-white/80">
            <a href="https://github.com/noelregis718" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2"><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/noel-regis-aa07081b1/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors p-2"><Linkedin size={28} /></a>
            <a href="https://leetcode.com/u/noelregis18/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA116] transition-colors p-2"><LeetCode size={28} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
