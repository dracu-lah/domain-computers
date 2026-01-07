import Link from "next/link";

export default function Services() {
  return (
    <section
      className="py-24 bg-slate-50 dark:bg-slate-900/50 relative"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Solutions tailored for <br />
              your digital life.
            </h2>
          </div>
          <Link
            className="hidden md:inline-flex items-center text-slate-600 dark:text-slate-300 font-semibold hover:text-primary transition-colors"
            href="#contact"
          >
            View All Services{" "}
            <span className="material-symbols-outlined ml-2">
              arrow_right_alt
            </span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1: Computer Repair */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-[10rem] text-primary">
                build
              </span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined text-3xl">
                  build
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                Computer Repair
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Expert diagnosis and repair for desktops and laptops. Hardware
                replacement, virus removal, and OS installation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>{" "}
                  Chip-level Service
                </li>
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>{" "}
                  Data Recovery
                </li>
              </ul>
            </div>
          </div>
          {/* Service 2: Security Systems */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-[10rem] text-primary">
                security
              </span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 text-emerald-600 dark:text-emerald-400">
                <span className="material-symbols-outlined text-3xl">
                  security
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                Security Systems
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Secure your premises with advanced CCTV installations (Hikvision,
                CP Plus) and biometric systems.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>{" "}
                  Remote Monitoring
                </li>
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>{" "}
                  Smart Alerts
                </li>
              </ul>
            </div>
          </div>
          {/* Service 3: Networking */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-[10rem] text-primary">
                router
              </span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300 text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined text-3xl">
                  router
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                Networking
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Robust networking architecture. Structured cabling, router
                configuration, and server maintenance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>{" "}
                  Enterprise WiFi
                </li>
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>{" "}
                  Firewall Config
                </li>
              </ul>
            </div>
          </div>
          {/* Service 4: Vocational Training */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-[10rem] text-primary">
                school
              </span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-orange-50 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 text-orange-600 dark:text-orange-400">
                <span className="material-symbols-outlined text-3xl">
                  school
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                Vocational Training
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Industry-standard computer training institute. Learn Tally, GST, Hardware, Networking, and Programming.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>{" "}
                  Job-Oriented Courses
                </li>
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>{" "}
                  Practical Labs
                </li>
              </ul>
            </div>
          </div>
          {/* Service 5: Peripherals & Sales */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-[10rem] text-primary">
                shopping_cart
              </span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-pink-50 dark:bg-pink-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300 text-pink-600 dark:text-pink-400">
                <span className="material-symbols-outlined text-3xl">
                  shopping_cart
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                Sales & Peripherals
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Wide range of laptops, desktops, and accessories. Authorized dealer for major brands like HP, Dell, and Epson.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>{" "}
                  Genuine Parts
                </li>
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>{" "}
                  Warranty Support
                </li>
              </ul>
            </div>
          </div>
          {/* Service 6: Software Solutions */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-[10rem] text-primary">
                settings_suggest
              </span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 text-indigo-600 dark:text-indigo-400">
                <span className="material-symbols-outlined text-3xl">
                  settings_suggest
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                Software & AMC
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Complete software support including OS installation, antivirus, and Annual Maintenance Contracts (AMC) for business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>{" "}
                  On-site Support
                </li>
                <li className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>{" "}
                  Business Plans
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
