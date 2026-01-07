import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-white dark:bg-background-dark overflow-hidden pt-20">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[40rem] h-[40rem] bg-blue-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] text-slate-900 dark:text-white opacity-20 mask-image-gradient"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <span className="text-[10vw] lg:text-[12vw] font-display font-black text-slate-200/50 dark:text-slate-800/50 uppercase tracking-tighter leading-none whitespace-nowrap select-none">
          DOMAIN COMPUTERS
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12 pb-20 lg:pt-24 lg:pb-32 z-10">
        <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted IT Partner Since 2010
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight max-w-4xl">
              Expert Computer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Solutions in Thrissur.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Your one-stop destination for premium laptop sales, chip-level service, and certified refurbished devices. Experience technology that empowers your work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
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
            <div className="mt-12 flex items-center justify-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-500">
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
      </div>
    </div>
  );
}
