import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-white dark:bg-background-dark overflow-hidden pt-20">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[40rem] h-[40rem] bg-blue-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] text-slate-900 dark:text-white opacity-20 mask-image-gradient"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted IT Partner Since 2010
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
              Expert Computer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Solutions in Thrissur.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
              Your one-stop destination for premium laptop sales, chip-level service, and certified refurbished devices. Experience technology that empowers your work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="group flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-primary/20 transition-all transform hover:-translate-y-1"
                href="#contact"
              >
                Contact Us
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <a
                className="flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1"
                href="https://wa.me/919809079666"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6 mr-2 brightness-0 invert" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">
                  verified
                </span>
                Certified Service
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">
                  bolt
                </span>
                Fast Turnaround
              </div>
            </div>
          </div>
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              <img
                alt="Modern IT workspace setup"
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-panel p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg text-primary">
                    <span className="material-symbols-outlined">
                      laptop_chromebook
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-medium uppercase tracking-wider">
                      Stock Update
                    </p>
                    <p className="text-sm text-white font-bold">
                      New Refurbished Laptops Available
                    </p>
                  </div>
                </div>
                <Link
                  className="bg-white text-slate-900 w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  href="#refurbished"
                >
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            <div className="absolute -z-10 -top-10 -right-10 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')] text-slate-400 dark:text-slate-600"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')] text-primary dark:text-primary opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
