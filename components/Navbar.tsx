import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300 text-2xl">
                wifi
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-slate-900 dark:text-white text-xl tracking-tight leading-none">
                DOMAIN
              </span>
              <span className="font-display font-bold text-primary text-[0.65rem] tracking-[0.2em] uppercase leading-none mt-1">
                Computers
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-white/5"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-white/5"
              href="#refurbished"
            >
              Refurbished
            </Link>
            <Link
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-white/5"
              href="#brands"
            >
              Partners
            </Link>
            <Link
              className="ml-4 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 active:scale-95"
              href="#contact"
            >
              Contact Support
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-slate-900 dark:text-white hover:text-primary focus:outline-none p-2 bg-slate-100 dark:bg-white/10 rounded-lg">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
