import Link from "next/link";

const refurbishedLaptops = [
  {
    name: "Lenovo Thinkpad Series",
    description: "Legendary durability and keyboard. Perfect for coding, typing, and heavy office work. A favorite among professionals.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzUO-zaJp4snXLDwur8uE5rmU7drkzMbYCePfGFc12AAk1CRuMXYxFgi4OfmJiPt1mc44DClW4p3dJq3QOKybXV8nFTNqTTbguj1f8NiPrmN8b7RApheVghwhk7wWa_MFcE-U-aKRW_UDXr1OXnM_BxZsT6p28Uv3VYXGUvxigq3GZUzRrSkIkSKbuu76M39IhNZYFl4qdivPigux00MZ8rCSQVkUo827PlblqfbnXARRK3zqb99gJHd9eWHj_ZT5c7qB5JZ3MfKA",
    badge: "Business Class",
    badgeColor: "bg-primary",
    specs: ["Core i5/i7", "SSD Storage"]
  },
  {
    name: "Dell Latitude Series",
    description: "Reliable workhorse with excellent display quality and robust security features. Designed for the modern workplace.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5y94v8a01uhVN5hEvDUeLa91MfCfZajqRU7v29tHmgiZWSjWiIYe8Nu8ng6ZodV4Va81tyPCySHk5GfbfsfSpzlfjryZPKeDshu9a0OhS23Q07tARvJ8f7_l_h4FEsun7y73HIlQDoo0iETfvLwsqmW9ZVp6YDfVBEfNIhJKJvhbvx79IAPU7ZTkAfv5gMEwnLQ5MsyyMMeIhKa8yHLGTK1HbSgpr2gyqexaBa4GN43mt8I4nOHN51uWDijNivqS5OLXBCWGJ1IM",
    badge: "Pro Choice",
    badgeColor: "bg-blue-600",
    specs: ["HD Display", "Fast Boot"]
  },
  {
    name: "HP EliteBook Series",
    description: "Sleek aluminum chassis with high-end performance. Perfect for executives and users who value both style and power.",
    image: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&w=800&q=80",
    badge: "Premium Design",
    badgeColor: "bg-slate-900",
    specs: ["Slim Build", "Backlit KB"]
  }
];

export default function Refurbished() {
  return (
    <section
      className="py-16 sm:py-24 bg-white dark:bg-background-dark relative overflow-hidden"
      id="refurbished"
    >
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Premium Refurbished. <br />
            <span className="text-primary">Performance Guaranteed.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Get enterprise-grade performance at a fraction of the cost. Our certified refurbished laptops undergo a rigorous 20-point quality check.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {refurbishedLaptops.map((laptop, index) => (
            <div key={index} className="group bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-6 lg:p-8 transition-all hover:shadow-xl border border-slate-100 dark:border-white/5 flex flex-col">
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-white p-6 flex items-center justify-center">
                <img
                  alt={laptop.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  src={laptop.image}
                />
                <div className={`absolute top-4 right-4 ${laptop.badgeColor} text-white text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                  {laptop.badge}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {laptop.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {laptop.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {laptop.specs.map((spec, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white dark:bg-black/20 rounded-lg text-[0.75rem] font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">percent</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Up to 60% Off</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">vs New MRP</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Warranty</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Included</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">eco</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Eco-Friendly</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Reduce E-Waste</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Support</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Local Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}