import { useState, useEffect } from 'react';
import { Mail, Lock, GraduationCap, BookOpen, CheckCircle2, Clock, Award, TerminalSquare, Cpu, Terminal, Trophy, Check } from 'lucide-react';
import profileImg from './assets/Image.png';

// Exact Organization Logo Imports
import iitRoparLogo from './assets/Indian_Institute_of_Technology_Ropar_logo.svg.webp';
import nitSrinagarLogo from './assets/National_Institute_of_Technology,_Srinagar_Logo.png';
import hnbGarhwalLogo from './assets/HNBG-new-logo.png';

// Client Profile Data
const clientProfile = {
  name: "HEY, I AM TEJAS RAJ",
  tagline: "Building products that create real impact",
  subtitle: "AI / ML Research • Deep Learning • Vision Systems",
  bio: "I focus on solving complex computer vision and deep learning problems from theoretical architecture to deployable models. Currently pursuing a Ph.D. in CSE at IIT Ropar, researching multimodal information extraction. Passionate about machine learning, healthcare analytics, and practical AI impact.",
  email: "tejasraj2802@gmail.com",
  phone: "9653773914",
  links: [
    { label: "/LinkedIn", url: "https://linkedin.com" },
    { label: "/Github", url: "https://github.com" },
    { label: "/Scholar", url: "#publications" },
    { label: "/Resume", url: "#about" }
  ],
  educationRoadmap: [
    { 
      degree: "Ph.D. in CSE (Pursuing)", 
      inst: "IIT Ropar", 
      period: "Aug 2025 – Present", 
      note: "Research Focus: Multimodal Information Extraction",
      logo: iitRoparLogo
    },
    { 
      degree: "M.Tech in AI & ML", 
      inst: "NIT Srinagar", 
      period: "Aug 2023 – June 2025", 
      note: "CGPA: 8.59 / 10.0",
      logo: nitSrinagarLogo
    },
    { 
      degree: "B.Tech in CSE", 
      inst: "HNB Garhwal University", 
      period: "Aug 2019 – June 2023", 
      note: "CGPA: 7.33 / 10.0",
      logo: hnbGarhwalLogo
    }
  ],
  publications: [
    { 
      num: "I",
      authors: "T. Raj, P. Belwal, S. Singh, S. Chauhan",
      title: "An Optimized CNN Model for Accurate and Fast Apple Leaf Disease Classification",
      venue: "3rd International Conference on Computer, Electronics, Electrical Engineering, and Their Applications (IC2E3-2025)",
      status: "Accepted"
    },
    { 
      num: "II",
      authors: "T. Raj, S. Singh, P. Belwal, H. Pateriya",
      title: "Machine Learning and Deep Learning Approaches for Plant Disease Detection: A Systematic Review",
      venue: "Under Peer Review",
      status: "Communicated"
    },
    { 
      num: "III",
      authors: "T. Raj, P. Belwal, S. Singh",
      title: "A Lightweight and Efficient CNN Approach for Multi-Disease Classification in Rice Plants",
      venue: "Under Peer Review",
      status: "Communicated"
    }
  ],
  detailedProjects: [
    { 
      title: "Rice Plant Disease Detection with Lightweight CNN",
      focus: "Deep Learning, Image Classification", 
      points: [
        "Developed an efficient lightweight CNN for classifying four rice plant diseases: bacterial blight, brown spot, tungro, and blast.",
        "Implemented image preprocessing techniques (normalization, resizing) using Python libraries.",
        "Achieved high accuracy with reduced complexity, demonstrating robust cross-dataset performance."
      ]
    },
    { 
      title: "Chronic Kidney Disease Classification", 
      focus: "Machine Learning, Healthcare Analytics",
      points: [
        "Developed a classification model for predicting chronic kidney disease using KNN, Decision Tree, and Random Forest.",
        "Applied preprocessing (missing value imputation, EDA) to improve model accuracy.",
        "Achieved 98.3% accuracy with Random Forest as the top-performing model."
      ]
    },
    { 
      title: "Indian Agriculture Data Analysis with Power BI", 
      focus: "Data Visualization, Business Intelligence",
      points: [
        "Developed interactive dashboards in Power BI for visualizing crop production and yield variations.",
        "Used district- and year-wise data from the ICRISAT dataset to identify seasonal patterns."
      ]
    }
  ],
  achievement: {
    title: "Qualified GATE 2025",
    paper: "Data Science and Artificial Intelligence (DA)",
    organization: "National Level Examination (IISc / IITs)",
    desc: "Demonstrated advanced technical proficiency in algorithms, linear algebra, calculus, machine learning architectures, and data science methodologies."
  }
};

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollPercent, setScrollPercent] = useState(0);

  // Navigation Items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievement', label: 'Achievements' },
    { id: 'contact', label: 'Connect' },
  ];

  // Scroll Progress Percentage Calculator
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const totalScrollable = documentHeight - windowHeight;
      if (totalScrollable > 0) {
        const percentage = Math.round((scrollTop / totalScrollable) * 100);
        setScrollPercent(Math.min(100, Math.max(0, percentage)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Robust Scroll Position Tracker for Top Menu
  useEffect(() => {
    const handleActiveSectionChange = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleActiveSectionChange, { passive: true });
    handleActiveSectionChange();

    return () => window.removeEventListener('scroll', handleActiveSectionChange);
  }, []);

  // Smooth Scroll Click Handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#E2E8F0] font-sans relative overflow-x-hidden selection:bg-[#3B82F6] selection:text-white">
      
      {/* Background Layers */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.10] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B82F6 1px, transparent 1px),
            linear-gradient(to bottom, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#1E3A8A]/25 rounded-full blur-[190px] pointer-events-none -z-10" />
      <div className="fixed top-[45%] -left-40 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 -right-40 w-[700px] h-[700px] bg-[#1D4ED8]/15 rounded-full blur-[200px] pointer-events-none -z-10" />
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.12] z-0"
        style={{
          backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Floating Capsule Navigation Bar */}
      <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <nav className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#0F172A]/90 backdrop-blur-xl shadow-2xl text-xs sm:text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full transition-all duration-300 font-medium ${
                  isActive 
                    ? 'bg-[#3B82F6] text-white font-bold shadow-md shadow-[#3B82F6]/30 scale-105' 
                    : 'text-slate-300 hover:text-[#3B82F6]'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <button 
            onClick={() => setIsAdminOpen(true)}
            className="flex items-center gap-1 hover:text-[#3B82F6] transition text-slate-400 pl-3 ml-1 border-l border-slate-800 text-xs sm:text-sm"
          >
            <Lock size={12} /> Admin
          </button>
        </nav>
      </header>

      {/* Top Right Scroll Percentage Indicator */}
      <div className="fixed top-6 right-8 text-xl font-bold tracking-widest text-[#3B82F6] hidden md:block z-40 font-mono">
        {scrollPercent}%
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-0 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-between relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-end relative mt-2">
          <div className="md:col-span-5 flex justify-center md:justify-start items-end z-10 relative">
            <img 
              src={profileImg} 
              alt={clientProfile.name}
              className="h-[400px] sm:h-[480px] object-contain drop-shadow-2xl"
            />
          </div>
          <div className="md:col-span-7 space-y-6 pb-12 z-10 relative">
            <div className="relative">
              <p className="text-base sm:text-lg font-medium text-slate-300 tracking-wide mb-1">
                {clientProfile.tagline}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#60A5FA] uppercase leading-none">
                {clientProfile.name}
              </h1>
              <div className="hidden md:block absolute -left-52 top-10 z-20 pointer-events-none">
                <svg className="w-48 h-28 text-[#3B82F6]" viewBox="0 0 180 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 170 15 Q 90 20 20 65" />
                  <path d="M 38 48 L 16 66 L 38 78" />
                </svg>
              </div>
            </div>
            <div className="inline-block px-6 py-2 rounded-full border border-[#3B82F6]/40 bg-[#0F172A]/90 text-[#60A5FA] font-semibold text-base sm:text-lg tracking-wide shadow-lg">
              {clientProfile.subtitle}
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-xl">
              {clientProfile.bio}
            </p>
          </div>
        </div>
        <div className="py-6 flex justify-between items-center text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 bg-[#090D16]/80 backdrop-blur-md">
          <a href={`mailto:${clientProfile.email}`} className="flex items-center gap-2 hover:text-[#3B82F6] transition">
            <Mail size={14} className="text-[#3B82F6]" /> {clientProfile.email}
          </a>
          <div className="flex gap-6 font-medium">
            {clientProfile.links.map((link, idx) => (
              <a key={idx} href={link.url} className="hover:text-[#3B82F6] underline decoration-[#3B82F6]/40 underline-offset-4 transition">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Academic History Dotted Roadmap Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-widest">Academic Milestones</span>
          <h2 className="text-3xl font-extrabold text-white mt-1 flex items-center justify-center md:justify-start gap-3">
            <GraduationCap className="text-[#3B82F6]" /> Academic Roadmap
          </h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 border-t-2 border-dashed border-[#3B82F6]/30 z-0" />
          <div className="md:hidden absolute top-0 left-8 w-0.5 h-full border-l-2 border-dashed border-[#3B82F6]/30 z-0" />
          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            {clientProfile.educationRoadmap.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start group">
                <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border border-slate-800 group-hover:border-[#3B82F6] flex items-center justify-center shadow-lg transition duration-300 mb-6">
                  <img src={item.logo} alt={item.inst} className="w-10 h-10 object-contain rounded bg-white/95 p-1" />
                </div>
                <div className="p-6 rounded-2xl bg-[#0F172A]/90 border border-slate-800/80 group-hover:border-[#3B82F6]/40 transition duration-300 backdrop-blur-md w-full">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] border border-[#3B82F6]/30">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3">{item.degree}</h3>
                  <p className="text-slate-300 text-sm font-semibold mt-1">{item.inst}</p>
                  <p className="text-slate-500 text-xs mt-3 pt-3 border-t border-slate-800/80">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Research Publications Section */}
      <section id="publications" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80 relative z-10">
        <div className="mb-14">
          <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-widest">Scholarly Works</span>
          <h2 className="text-3xl font-extrabold text-white mt-1 flex items-center gap-3">
            <BookOpen className="text-[#3B82F6]" /> List of Publications
          </h2>
        </div>
        <div className="space-y-6">
          {clientProfile.publications.map((pub, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-[#0F172A]/90 border border-slate-800 hover:border-[#3B82F6]/40 transition duration-300 backdrop-blur-xl flex flex-col md:flex-row gap-6 justify-between items-start md:items-center group">
              <div className="flex items-start gap-5 max-w-4xl">
                <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#3B82F6]/30 flex items-center justify-center text-[#60A5FA] font-black text-lg flex-shrink-0 group-hover:bg-[#3B82F6] group-hover:text-white transition duration-300">
                  {pub.num}
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-mono text-slate-400 font-semibold tracking-wide">{pub.authors}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#60A5FA] transition leading-snug">“{pub.title}”</h3>
                  <p className="text-xs sm:text-sm text-slate-400 italic">{pub.venue}</p>
                </div>
              </div>
              <div className="flex-shrink-0 self-start md:self-center">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold border inline-flex items-center gap-2 ${pub.status === 'Accepted' ? 'bg-[#3B82F6]/15 text-[#60A5FA] border-[#3B82F6]/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'}`}>
                  {pub.status === 'Accepted' ? <CheckCircle2 size={13} className="text-[#60A5FA]" /> : <Clock size={13} className="text-amber-400" />}
                  Status: {pub.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upgraded Academic Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80 relative z-10">
        <div className="mb-14">
          <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-widest">Applied Learning</span>
          <h2 className="text-3xl font-extrabold text-white mt-1 flex items-center gap-3">
            <TerminalSquare className="text-[#3B82F6]" /> Academic Projects
          </h2>
        </div>
        <div className="space-y-10">
          {clientProfile.detailedProjects.map((proj, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0F172A]/80 border border-slate-800/80 backdrop-blur-md relative group hover:border-[#3B82F6]/30 transition duration-300">
              <div className="absolute top-8 bottom-8 left-0 w-1 bg-[#3B82F6]/80 rounded-r" />
              <div className="pl-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#60A5FA] transition">{proj.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] border border-[#3B82F6]/30 flex-shrink-0 self-start sm:self-center">
                    {proj.focus}
                  </span>
                </div>
                <ul className="space-y-3 pl-4 list-outside text-slate-300 text-sm md:text-base leading-relaxed">
                  {proj.points.map((point, pIdx) => (
                    <li key={pIdx} className="relative before:content-['▹'] before:absolute before:-left-5 before:text-[#3B82F6]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80 relative z-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-widest">Stack & Environments</span>
            <h2 className="text-3xl font-extrabold text-white mt-1 flex items-center gap-3">
              <Cpu className="text-[#3B82F6]" /> Technical Skills
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-[#0F172A] px-3.5 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span>Python 3.11 • CUDA Enabled</span>
          </div>
        </div>

        {/* Grid of Custom Code Terminal Windows */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Terminal 1 */}
          <div className="rounded-3xl bg-[#090F1D]/95 border border-[#1E3A8A]/60 p-6 font-mono text-xs shadow-2xl relative overflow-hidden group hover:border-[#3B82F6] transition duration-300 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-400 text-xs font-bold flex items-center gap-1.5">
                <Terminal size={13} className="text-[#60A5FA]" /> &gt;_ core_pipeline.py
              </span>
            </div>

            <div className="space-y-2 text-slate-300 leading-relaxed">
              <p className="text-slate-500"># Programming Languages: Python</p>
              <p className="text-slate-500"># Libraries & Frameworks: Pandas, NumPy, Matplotlib, Keras</p>
              <br />
              <p><span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd</p>
              <p><span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np</p>
              <p><span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt</p>
              <p><span className="text-purple-400">import</span> keras</p>
              <br />
              <p><span className="text-blue-400">class</span> <span className="text-yellow-300">VisionNetwork</span>(keras.Model):</p>
              <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">__init__</span>(self):</p>
              <p className="pl-8 text-slate-400">super().__init__()</p>
              <p className="pl-8 text-slate-400">self.conv = keras.layers.Conv2D(<span className="text-amber-300">64</span>, <span className="text-amber-300">3</span>)</p>
              <br />
              <p className="text-slate-500"># Evaluation Metric</p>
              <p><span className="text-[#60A5FA]">acc</span> = model.evaluate(x_test, y_test)</p>
              <p className="text-[#60A5FA] font-bold pt-2 text-sm">&gt;&gt; Accuracy: 98.3% [OK]</p>
            </div>
          </div>

          {/* Terminal 2 */}
          <div className="rounded-3xl bg-[#090F1D]/95 border border-[#1E3A8A]/60 p-6 font-mono text-xs shadow-2xl relative overflow-hidden group hover:border-[#3B82F6] transition duration-300 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-400 text-xs font-bold flex items-center gap-1.5">
                <Terminal size={13} className="text-[#60A5FA]" /> &gt;_ database.sql
              </span>
            </div>

            <div className="space-y-2 text-slate-300 leading-relaxed">
              <p className="text-slate-500">-- Database Management: MySQL</p>
              <br />
              <p><span className="text-purple-400">CREATE TABLE</span> <span className="text-yellow-300">ResearchDatasets</span> (</p>
              <p className="pl-4"><span className="text-blue-400">id</span> INT <span className="text-purple-400">PRIMARY KEY</span>,</p>
              <p className="pl-4"><span className="text-blue-400">dataset_name</span> VARCHAR(<span className="text-amber-300">255</span>),</p>
              <p className="pl-4"><span className="text-blue-400">accuracy_score</span> DECIMAL(<span className="text-amber-300">5, 2</span>)</p>
              <p>);</p>
              <br />
              <p><span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> <span className="text-yellow-300">ResearchDatasets</span></p>
              <p><span className="text-purple-400">WHERE</span> engine = <span className="text-emerald-400">'MySQL'</span>;</p>
              <br />
              <p className="text-[#60A5FA] font-bold pt-2 text-sm">&gt;&gt; Database Connected: MySQL [127.0.0.1]</p>
            </div>
          </div>

          {/* Terminal 3 */}
          <div className="rounded-3xl bg-[#090F1D]/95 border border-[#1E3A8A]/60 p-6 font-mono text-xs shadow-2xl relative overflow-hidden group hover:border-[#3B82F6] transition duration-300 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-400 text-xs font-bold flex items-center gap-1.5">
                <Terminal size={13} className="text-[#60A5FA]" /> &gt;_ analytics.pbi
              </span>
            </div>

            <div className="space-y-2 text-slate-300 leading-relaxed">
              <p className="text-slate-500"># Tools & Visualization: Power BI, MS Excel, MS PowerPoint</p>
              <br />
              <p><span className="text-blue-400">visualization_tools</span> = [</p>
              <p className="pl-4"><span className="text-emerald-400">"Power BI"</span>,      <span className="text-slate-500"># Interactive Dashboards</span></p>
              <p className="pl-4"><span className="text-emerald-400">"MS Excel"</span>,      <span className="text-slate-500"># Advanced Analytics</span></p>
              <p className="pl-4"><span className="text-emerald-400">"MS PowerPoint"</span>  <span className="text-slate-500"># Research Docs</span></p>
              <p>]</p>
              <br />
              <p><span className="text-purple-400">for</span> tool <span className="text-purple-400">in</span> visualization_tools:</p>
              <p className="pl-4">render_dashboard_reports(tool)</p>
              <br />
              <p className="text-[#60A5FA] font-bold pt-2 text-sm">&gt;&gt; Reports Generated: Power BI [Live Sync]</p>
            </div>
          </div>

          {/* Terminal 4 */}
          <div className="rounded-3xl bg-[#090F1D]/95 border border-[#1E3A8A]/60 p-6 font-mono text-xs shadow-2xl relative overflow-hidden group hover:border-[#3B82F6] transition duration-300 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-400 text-xs font-bold flex items-center gap-1.5">
                <Terminal size={13} className="text-[#60A5FA]" /> &gt;_ env_setup.sh
              </span>
            </div>

            <div className="space-y-2 text-slate-300 leading-relaxed">
              <p className="text-slate-500"># Platforms & IDEs: Google Colab, Visual Studio Code, Jupyter Notebook</p>
              <br />
              <p><span className="text-purple-400">export</span> PLATFORMS_AND_IDES=(</p>
              <p className="pl-4"><span className="text-emerald-400">"Google Colab"</span>,        <span className="text-slate-500"># GPU/TPU Cloud</span></p>
              <p className="pl-4"><span className="text-emerald-400">"Visual Studio Code"</span>,  <span className="text-slate-500"># IDE Environment</span></p>
              <p className="pl-4"><span className="text-emerald-400">"Jupyter Notebook"</span>    <span className="text-slate-500"># Prototyping</span></p>
              <p>)</p>
              <br />
              <p><span className="text-purple-400">echo</span> <span className="text-emerald-400">"IDEs & Platforms Ready"</span></p>
              <br />
              <p className="text-[#60A5FA] font-bold pt-2 text-sm">&gt;&gt; Ready: Google Colab & VS Code Initialized</p>
            </div>
          </div>

        </div>
      </section>

      {/* Key Achievement Section */}
      <section id="achievement" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80 relative z-10">
        <div className="mb-14">
          <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-widest">Competitive Milestones</span>
          <h2 className="text-3xl font-extrabold text-white mt-1 flex items-center gap-3">
            <Award className="text-[#3B82F6]" /> Key Achievement
          </h2>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F172A]/90 border border-[#1E3A8A] hover:border-[#3B82F6] transition duration-500 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="flex items-start gap-6 max-w-3xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1E293B] border-2 border-[#3B82F6]/40 flex items-center justify-center text-[#60A5FA] flex-shrink-0 shadow-lg shadow-[#3B82F6]/10 group-hover:scale-105 transition duration-300">
                <Trophy size={34} />
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#3B82F6] text-white text-xs font-black tracking-wider uppercase">
                    National Level
                  </span>
                  <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                    <Check size={14} className="text-[#60A5FA]" /> Verified Credential
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  {clientProfile.achievement.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  {clientProfile.achievement.desc}
                </p>
              </div>
            </div>

            <div className="flex lg:flex-col gap-3 flex-shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-800/80 lg:pl-8">
              <div className="p-4 rounded-2xl bg-[#090D16]/80 border border-slate-800 min-w-[180px]">
                <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Qualifying Paper</span>
                <p className="text-sm font-bold text-[#60A5FA] mt-0.5">{clientProfile.achievement.paper}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#090D16]/80 border border-slate-800 min-w-[180px]">
                <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Examining Body</span>
                <p className="text-sm font-bold text-white mt-0.5">IISc / IIT Joint Committee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Direct Line / Footer */}
      <section id="contact" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-800/80 mt-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <a href={`mailto:${clientProfile.email}`} className="flex items-center gap-2 hover:text-[#3B82F6] transition">
            <Mail size={14} className="text-[#3B82F6]" /> {clientProfile.email}
          </a>
          <span>IIT Ropar • CSE Dept</span>
          <span>Ph.D. Scholar Portfolio © 2026</span>
        </div>
      </section>

      {/* Admin Panel Modal */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-[#3B82F6]/30 rounded-2xl p-6 max-w-md w-full space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock size={16} className="text-[#3B82F6]" /> Admin CMS
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Connect to MongoDB endpoint to manage publications, projects, and contact queries directly.
            </p>
            <button 
              onClick={() => setIsAdminOpen(false)}
              className="w-full py-2 bg-[#3B82F6] text-white font-bold rounded-xl text-xs hover:bg-[#2563EB] transition"
            >
              Close Portal
            </button>
          </div>
        </div>
      )}

    </div>
  );
}