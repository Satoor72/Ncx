import { useState } from 'react';
import { Home, PanelsTopLeft, UserRound, Send, X, Sparkles, Code2, Cpu, Globe, Smartphone, Apple, Monitor, Instagram, MessageCircle, Users, BookOpen, Lightbulb, Gamepad2, ArrowUpRight, Info } from 'lucide-react';
import appsHeroImg from './assets/apps-hero.webp';
import italianoAppImg from './assets/italiano-app.webp';
import guideImage from './assets/guide.png';
import brandInformationImage from './assets/ncx-brand-information.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState('home');
  const [selectedApp, setSelectedApp] = useState<null | { name: string; desc: string; icon: string }>(null);
  const [showSocials, setShowSocials] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showBrandInfo, setShowBrandInfo] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, view: 'home' },
    { name: 'About', icon: UserRound, view: 'about' },
    { name: 'Projects', icon: PanelsTopLeft, view: 'projects' },
    { name: 'Contact', icon: Send, view: 'contact' },
  ];

  const guideDescriptions: Record<string, string> = {
    home: 'Start at the NCX home page',
    about: 'Learn about the ideas behind NCX',
    projects: 'Browse apps, projects, and downloads',
    contact: 'Find ways to connect with NCX',
  };

  const apps = [
    {
      name: 'Impara Italiano',
      desc: 'An immersive and interactive Italian language learning application designed to help you master vocabulary, grammar, and conversation with ease.',
      icon: italianoAppImg
    }
  ];

  const handleNavClick = (view: string) => {
    setActiveView(view);
    setIsMenuOpen(false);
    setSelectedApp(null);
    setShowSocials(false);
  };

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return (
          <div className="flex h-full w-full flex-col items-start justify-start gap-3 overflow-y-auto px-3 pb-5 pt-24 text-left sm:px-6 sm:pb-6 lg:px-10">
            <button
              onClick={() => setShowGuideModal(true)}
              aria-label="Open website guide"
              title="Site Guide"
              className="group mt-auto inline-flex shrink-0 items-center gap-2 rounded-full border border-yellow-300/70 bg-yellow-400 px-3.5 py-2 font-inter text-[10px] font-bold uppercase tracking-[0.16em] text-[#1b0d08] shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-4 sm:py-2.5 sm:text-[11px]"
            >
              <BookOpen className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.2} />
              <span>Site Guide</span>
            </button>
            <section className="w-full max-w-2xl shrink-0 rounded-2xl border border-amber-200/10 bg-[#260b0d]/85 p-5 text-left shadow-xl shadow-black/20 backdrop-blur-sm sm:p-7 animate-fade-in">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-600/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-orange-400 sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" /> Innovation Starts Here
              </div>
              <h1 className="font-inter text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Build, Create, Innovate.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                A creative space where technology, gaming, and innovation come together. Discover projects, explore tools, and experience something new.
              </p>

              <div className="mt-6 flex flex-wrap justify-start gap-3">
                <button
                  onClick={() => handleNavClick('about')}
                  className="rounded-lg border border-yellow-400 px-4 py-3 text-xs font-bold uppercase tracking-wider text-yellow-300 transition-colors hover:bg-yellow-400 hover:text-black sm:px-5 sm:text-sm"
                >
                  Learn More
                </button>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-yellow-300 sm:px-5 sm:text-sm"
                >
                  <ArrowUpRight className="h-4 w-4" /> Explore Projects
                </button>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-5 border-t border-white/15 pt-5 sm:grid-cols-3 sm:gap-3">
                <div className="flex flex-col items-center gap-1 text-center">
                  <Lightbulb className="mb-1 h-5 w-5 text-yellow-400" />
                  <h2 className="text-sm font-semibold text-white">Innovation</h2>
                  <p className="text-xs text-white/65">New ideas</p>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <Gamepad2 className="mb-1 h-5 w-5 text-yellow-400" />
                  <h2 className="text-sm font-semibold text-white">Gaming</h2>
                  <p className="text-xs text-white/65">Gaming projects</p>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <Code2 className="mb-1 h-5 w-5 text-yellow-400" />
                  <h2 className="text-sm font-semibold text-white">Development</h2>
                  <p className="text-xs text-white/65">Creative software</p>
                </div>
              </div>
            </section>
          </div>
        );
      case 'projects':
        return (
          <div className="flex h-full w-full items-start justify-start px-6 sm:px-12 lg:px-20 text-left overflow-y-auto py-24">
            {!selectedApp ? (
              <div className="max-w-3xl animate-fade-in space-y-8">
                <div className="inline-flex items-center gap-2 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs uppercase tracking-widest text-yellow-300">
                  <Code2 className="h-3.5 w-3.5" /> Selected Works
                </div>
                <h2 className="font-podium text-4xl sm:text-5xl uppercase tracking-tight text-white">Explore Applications</h2>

                <button
                  onClick={() => setSelectedApp(apps[0])}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-black/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-yellow-400/80 hover:shadow-2xl hover:shadow-yellow-400/20 max-w-sm"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-xl">
                    <img
                      src={appsHeroImg}
                      alt="Apps"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between px-2">
                    <span className="font-podium text-2xl tracking-wider text-yellow-300">Apps</span>
                    <span className="text-xs uppercase tracking-widest text-white/60 group-hover:text-yellow-400 transition-colors">Explore &rarr;</span>
                  </div>
                </button>
              </div>
            ) : (
              <div className="max-w-3xl animate-fade-in space-y-6 pb-12">
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <img src={selectedApp.icon} alt={selectedApp.name} className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl border border-yellow-400/30 shadow-2xl" />
                  <div className="space-y-4">
                    <h3 className="font-podium text-4xl sm:text-5xl uppercase tracking-tight text-yellow-300">{selectedApp.name}</h3>
                    <p className="font-inter text-base sm:text-lg leading-relaxed text-yellow-100/90">{selectedApp.desc}</p>

                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-widest text-yellow-400/80 font-semibold mb-3">Download Available For:</p>
                      <div className="flex flex-wrap gap-4">
                        <a href="https://github.com/Satoor72/italiano-app/releases/download/v1.1.1/IT-Ncx-1.1.1.apk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 text-yellow-300 hover:bg-yellow-400 hover:text-black transition rounded-xl font-medium text-sm">
                          <Smartphone className="h-5 w-5" /> Android
                        </a>
                        <a href="https://satoor72.github.io/italiano-app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 text-yellow-300 hover:bg-yellow-400 hover:text-black transition rounded-xl font-medium text-sm">
                          <Apple className="h-5 w-5" /> iOS
                        </a>
                        <a href="https://github.com/Satoor72/italiano-app/releases/download/v1.1.1/IT-Ncx-Setup-1.1.1.exe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 text-yellow-300 hover:bg-yellow-400 hover:text-black transition rounded-xl font-medium text-sm">
                          <Monitor className="h-5 w-5" /> PC
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case 'about':
        return (
          <div className="flex h-full w-full items-center justify-start px-6 sm:px-12 lg:px-20 text-left overflow-y-auto py-24">
            <div className="max-w-5xl animate-fade-in space-y-8">
              <div className="inline-flex items-center gap-2 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs uppercase tracking-widest text-yellow-300">
                <Cpu className="h-3.5 w-3.5" /> Studio Philosophy
              </div>
              <div className="max-w-xl space-y-6">
                <p className="font-inter text-base sm:text-lg leading-relaxed text-yellow-300">
                  NCX is a personal digital portfolio built to showcase creativity, technical skills, and innovative ideas.
                  <br /><br />
                  From small experiments to fully developed projects, every creation represents a new challenge and an opportunity to build something meaningful.
                  <br /><br />
                  Always creating. Always evolving.
                </p>

                <div className="pt-6 border-t border-yellow-400/20 space-y-2">
                  <div className="font-podium text-2xl font-bold tracking-wider text-yellow-400">NCX</div>
                  <p className="font-inter text-sm tracking-widest uppercase text-white/90">Innovation Beyond Limits.</p>
                  <p className="font-inter text-xs text-white/60 tracking-wider">Independent Technology Brand • Est. 2026</p>
                </div>
              </div>

              <button
                onClick={() => setShowBrandInfo(true)}
                className="group flex w-full max-w-md items-center gap-4 rounded-2xl border border-yellow-400/25 bg-black/50 p-4 text-left shadow-xl shadow-black/20 transition duration-300 hover:border-yellow-300/70 hover:bg-yellow-300/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 sm:p-5"
                aria-label="Open NCX brand information"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-yellow-300/30 bg-yellow-300/10 text-yellow-300 transition group-hover:bg-yellow-300 group-hover:text-black">
                  <Info className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-inter text-sm font-bold uppercase tracking-[0.15em] text-yellow-200">Information</span>
                  <span className="mt-1 block font-inter text-xs text-white/55">View NCX brand information</span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-white/45 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-yellow-200" />
              </button>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="flex h-full w-full items-center justify-start px-6 sm:px-12 lg:px-20 text-left overflow-y-auto py-24">
            <div className="max-w-xl animate-fade-in space-y-6">
              <div className="inline-flex items-center gap-2 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs uppercase tracking-widest text-yellow-300">
                <Globe className="h-3.5 w-3.5" /> Get in Touch
              </div>
              <h2 className="font-podium text-4xl sm:text-5xl uppercase tracking-tight text-white">Have an Idea? Let's Connect.</h2>
              <p className="font-inter text-base sm:text-lg leading-relaxed text-yellow-300">
                Interested in collaborating, discussing a project, or simply getting in touch?
                <br /><br />
                Feel free to reach out.
              </p>

              {!showSocials ? (
                <button
                  onClick={() => setShowSocials(true)}
                  className="mt-4 border-2 border-yellow-400 text-yellow-300 px-8 py-4 uppercase tracking-widest font-bold hover:bg-yellow-400 hover:text-black transition duration-300"
                >
                  [ Contact Me ]
                </button>
              ) : (
                <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in">
                  <a href="https://www.instagram.com/vncxcnv/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-yellow-400/50 bg-black/40 px-5 py-3 rounded-lg hover:border-yellow-400 transition duration-300">
                    <Instagram className="h-6 w-6 text-yellow-400" />
                    <span className="font-podium text-white uppercase tracking-widest text-sm">Instagram</span>
                  </a>
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-yellow-400/50 bg-black/40 px-5 py-3 rounded-lg hover:border-yellow-400 transition duration-300">
                    <MessageCircle className="h-6 w-6 text-yellow-400" />
                    <span className="font-podium text-white uppercase tracking-widest text-sm">WhatsApp</span>
                  </a>
                  <a href="https://discord.com/invite/fWBKNqrVCU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-yellow-400/50 bg-black/40 px-5 py-3 rounded-lg hover:border-yellow-400 transition duration-300">
                    <Users className="h-6 w-6 text-yellow-400" />
                    <span className="font-podium text-white uppercase tracking-widest text-sm">Discord</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-shell relative w-screen overflow-hidden bg-black font-inter">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
          type="video/mp4"
        />
      </video>

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/60" />

      {/* Navbar */}
      <nav className="absolute top-0 z-40 flex w-full items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
        <div className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
          Ncx
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-black/35 p-2 shadow-xl shadow-black/20 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.view)}
              aria-current={activeView === item.view ? 'page' : undefined}
              className={`group flex min-w-[94px] flex-col items-center gap-1.5 rounded-xl px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                activeView === item.view
                  ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                  : 'text-white/65 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.8} />
              {item.name}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm transition-all duration-500 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex w-full items-center justify-between px-6 py-5 sm:px-10">
          <div className="font-podium text-2xl font-bold uppercase tracking-wider text-white">Ncx</div>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-8 w-8 text-white" />
          </button>
        </div>

        <div className="flex flex-grow flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.view)}
              className={`flex min-w-56 items-center gap-4 rounded-2xl border px-6 py-4 font-podium text-2xl uppercase tracking-wider transition-all duration-300 ${
                activeView === item.view
                  ? 'border-yellow-400/50 bg-yellow-400/10 text-yellow-300 shadow-lg shadow-yellow-400/10'
                  : 'border-white/10 bg-white/[0.03] text-white hover:border-white/25 hover:bg-white/[0.08]'
              }`}
            >
              <item.icon className="h-6 w-6" strokeWidth={1.8} />
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Guide Modal */}
      {showBrandInfo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-3 py-5 backdrop-blur-md sm:px-6"
          onClick={() => setShowBrandInfo(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="NCX brand information image"
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-yellow-300/25 bg-[#100b08] p-2 shadow-2xl shadow-black/60 sm:p-3"
          >
            <button
              onClick={() => setShowBrandInfo(false)}
              aria-label="Close information image"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/75 text-white transition hover:border-yellow-300/50 hover:text-yellow-300"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={brandInformationImage}
              alt="NCX brand information dashboard"
              className="h-auto max-h-[88dvh] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}

      {/* Guide Modal */}
      {showGuideModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#080505]/80 px-4 py-6 backdrop-blur-md"
          onClick={() => setShowGuideModal(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="guide-title"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-full w-full max-w-xl overflow-y-auto rounded-2xl border border-yellow-300/25 bg-gradient-to-br from-[#260b0d] via-[#14090a] to-black p-5 text-left shadow-2xl shadow-black/60 animate-scale-in sm:p-7"
          >
            <button
              onClick={() => setShowGuideModal(false)}
              aria-label="Close guide"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:border-yellow-300/40 hover:bg-yellow-300/10 hover:text-yellow-300"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mb-5 flex items-center gap-3 pr-10">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-300/25 bg-yellow-300/10 text-yellow-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300/70">NCX • Quick Guide</p>
                <h3 id="guide-title" className="mt-1 font-inter text-xl font-bold tracking-tight text-white sm:text-2xl">Navigate NCX</h3>
              </div>
            </div>
            <div className="mb-5 overflow-hidden rounded-xl border border-yellow-300/20 bg-black/40 p-2" aria-label="NCX Guide artwork">
              <img
                src={guideImage}
                alt="NCX Guide"
                className="mx-auto max-h-44 w-full object-contain sm:max-h-56"
              />
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => { setShowGuideModal(false); handleNavClick(item.view); }}
                  className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-left transition duration-200 hover:border-yellow-300/40 hover:bg-yellow-300/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-300/10 text-yellow-300 transition group-hover:bg-yellow-300 group-hover:text-black">
                    <item.icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                  </span>
                  <span>
                    <span className="block font-inter text-xs font-bold uppercase tracking-[0.12em] text-white">{item.name}</span>
                    <span className="mt-1 block font-inter text-[11px] leading-snug text-white/55">{guideDescriptions[item.view]}</span>
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowGuideModal(false)}
              className="mt-4 w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-white/65 transition hover:border-yellow-300/30 hover:text-yellow-200"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="absolute inset-0 z-30 h-full w-full">
        <div key={`${activeView}-${selectedApp?.name ?? 'list'}`} className="h-full w-full animate-view-enter">
          {renderView()}
        </div>
      </main>
    </div>
  );
}
