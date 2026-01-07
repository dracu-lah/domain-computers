const services = [
  {
    title: "Computer Repair",
    description:
      "Expert diagnosis and repair for desktops and laptops. Hardware replacement, virus removal, and OS installation.",
    icon: "build",
    features: ["Chip-level Service", "Data Recovery"],
    color: {
      bg: "bg-blue-50 dark:bg-blue-500/10",
      hover: "group-hover:bg-blue-500",
      text: "text-blue-600 dark:text-blue-400",
      dot: "bg-blue-500",
    },
  },
  {
    title: "Security Systems",
    description:
      "Secure your premises with advanced CCTV installations (Hikvision, CP Plus) and biometric systems.",
    icon: "security",
    features: ["Remote Monitoring", "Smart Alerts"],
    color: {
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
      hover: "group-hover:bg-emerald-500",
      text: "text-emerald-600 dark:text-emerald-400",
      dot: "bg-emerald-500",
    },
  },
  {
    title: "Networking",
    description:
      "Robust networking architecture. Structured cabling, router configuration, and server maintenance.",
    icon: "router",
    features: ["Enterprise WiFi", "Firewall Config"],
    color: {
      bg: "bg-purple-50 dark:bg-purple-500/10",
      hover: "group-hover:bg-purple-500",
      text: "text-purple-600 dark:text-purple-400",
      dot: "bg-purple-500",
    },
  },
  {
    title: "Vocational Training",
    description:
      "Industry-standard computer training institute. Learn Tally, GST, Hardware, Networking, and Programming.",
    icon: "school",
    features: ["Job-Oriented Courses", "Practical Labs"],
    color: {
      bg: "bg-orange-50 dark:bg-orange-500/10",
      hover: "group-hover:bg-orange-500",
      text: "text-orange-600 dark:text-orange-400",
      dot: "bg-orange-500",
    },
  },
  {
    title: "Sales & Peripherals",
    description:
      "Wide range of laptops, desktops, and accessories. Authorized dealer for major brands like HP, Dell, and Epson.",
    icon: "shopping_cart",
    features: ["Genuine Parts", "Warranty Support"],
    color: {
      bg: "bg-pink-50 dark:bg-pink-500/10",
      hover: "group-hover:bg-pink-500",
      text: "text-pink-600 dark:text-pink-400",
      dot: "bg-pink-500",
    },
  },
  {
    title: "Software & AMC",
    description:
      "Complete software support including OS installation, antivirus, and Annual Maintenance Contracts (AMC) for business.",
    icon: "settings_suggest",
    features: ["On-site Support", "Business Plans"],
    color: {
      bg: "bg-indigo-50 dark:bg-indigo-500/10",
      hover: "group-hover:bg-indigo-500",
      text: "text-indigo-600 dark:text-indigo-400",
      dot: "bg-indigo-500",
    },
  },
];

export default function Services() {
  return (
    <section
      className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden"
      id="services"
    >
      <div className="absolute -bottom-40 -right-40 opacity-10 pointer-events-none transform -rotate-12 z-0">
        <span className="material-symbols-outlined text-[40rem] lg:text-[50rem] text-slate-400 dark:text-slate-600">
          settings_suggest
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-white/5 overflow-hidden"
            >
              <div className="absolute -bottom-12 -right-12 opacity-[0.05] group-hover:opacity-10 transition-opacity transform -rotate-12 group-hover:scale-110 group-hover:rotate-0 duration-700 pointer-events-none">
                <span className="material-symbols-outlined text-[15rem] text-primary">
                  {service.icon}
                </span>
              </div>
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 ${service.color.bg} rounded-2xl flex items-center justify-center mb-8 ${service.color.hover} group-hover:text-white transition-colors duration-300 ${service.color.text}`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-slate-500 dark:text-slate-400"
                    >
                      <span
                        className={`w-1.5 h-1.5 ${service.color.dot} rounded-full mr-2`}
                      ></span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
