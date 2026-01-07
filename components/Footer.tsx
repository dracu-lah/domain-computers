import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">
                wifi
              </span>
              <span className="font-display font-bold text-slate-900 dark:text-white text-xl">
                DOMAIN COMPUTERS
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
              Your trusted technology partner in Thrissur. Delivering excellence
              in IT sales, service, and solutions since 2010.
            </p>
            <div className="flex gap-4">
              <Link
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all group"
                href="#"
              >
                <img src="/facebook.svg" alt="Facebook" className="w-5 h-5 fill-current group-hover:invert group-hover:brightness-0 transition-all" />
              </Link>
              <Link
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all group"
                href="#"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-5 h-5 fill-current group-hover:invert group-hover:brightness-0 transition-all" />
              </Link>
              <Link
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-all group"
                href="#"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 fill-current group-hover:invert group-hover:brightness-0 transition-all" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Laptop Sales
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Chip Level Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Networking
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2023 Domain Computers. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> for technology
          </p>
        </div>
      </div>
    </footer>
  );
}
