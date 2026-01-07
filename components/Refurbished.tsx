import Link from "next/link";

export default function Refurbished() {
  return (
    <section
      className="py-16 sm:py-24 bg-white dark:bg-background-dark relative overflow-hidden"
      id="refurbished"
    >
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-video lg:aspect-auto">
                <img
                  alt="High quality refurbished laptop"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY6EKeazy1gEua7NNOnUHbxeCZN5ZOcxxmSKtoMDRQ-r-YiKSOm1sfeT6JCTe5HfMNVcAu3YBulYKT40N32uWNLY06Woubkr2hnUCCDDO9nPrBoUxh070tJNO1SLsNZN5gLvHJ5uYpgFeVv90s5jpvWMQtEeQR82cWtUltUjkZNT-5QEl9ZBoJef2nYMmQxJrk_BM3HLMm0tpqZ9xGZGxA2zskHaZLStJw0R7DBaKZUjIeODoRuc0cP1uOSbBOz_XXoT6asSroMa4"
                />
              </div>
            </div>
            <div className="mt-8 bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400">
                    eco
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                    Sustainable Choice
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Refurbished tech reduces e-waste and carbon footprint. Smart
                    for your wallet, better for the planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-10 mt-12 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Premium Refurbished. <br />
              <span className="text-primary">Performance Guaranteed.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Why pay full price? Get enterprise-grade performance at a fraction
              of the cost. Our certified refurbished laptops undergo a rigorous
              20-point quality check to ensure they meet our high standards.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">percent</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Up to 60% Savings
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Significant cost advantage over new devices.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Warranty Included
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Peace of mind with our service guarantee.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">update</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Business Ready
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Models designed for corporate longevity.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    support_agent
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Local Support
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Direct support from our Thrissur team.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Featured Models
              </h3>
              {/* Featured Model 1: Lenovo */}
              <div className="group flex flex-col sm:flex-row bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-lg transition-all">
                <div className="sm:w-48 h-48 sm:h-auto bg-white p-4 flex items-center justify-center flex-shrink-0 relative">
                  <img
                    alt="Lenovo Thinkpad"
                    className="max-h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzUO-zaJp4snXLDwur8uE5rmU7drkzMbYCePfGFc12AAk1CRuMXYxFgi4OfmJiPt1mc44DClW4p3dJq3QOKybXV8nFTNqTTbguj1f8NiPrmN8b7RApheVghwhk7wWa_MFcE-U-aKRW_UDXr1OXnM_BxZsT6p28Uv3VYXGUvxigq3GZUzRrSkIkSKbuu76M39IhNZYFl4qdivPigux00MZ8rCSQVkUo827PlblqfbnXARRK3zqb99gJHd9eWHj_ZT5c7qB5JZ3MfKA"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wide">
                        Business Class
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        Lenovo Thinkpad Series
                      </h4>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">
                      keyboard_arrow_right
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    Legendary durability and keyboard. Perfect for coding,
                    typing, and heavy office work.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Core i5/i7
                    </span>
                    <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-xs text-slate-600 dark:text-slate-400 font-medium">
                      SSD
                    </span>
                    <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-xs text-slate-600 dark:text-slate-400 font-medium">
                      8GB+ RAM
                    </span>
                  </div>
                </div>
              </div>
              {/* Featured Model 2: Dell */}
              <div className="group flex flex-col sm:flex-row bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-lg transition-all">
                <div className="sm:w-48 h-48 sm:h-auto bg-white p-4 flex items-center justify-center flex-shrink-0 relative">
                  <img
                    alt="Dell Latitude"
                    className="max-h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5y94v8a01uhVN5hEvDUeLa91MfCfZajqRU7v29tHmgiZWSjWiIYe8Nu8ng6ZodV4Va81tyPCySHk5GfbfsfSpzlfjryZPKeDshu9a0OhS23Q07tARvJ8f7_l_h4FEsun7y73HIlQDoo0iETfvLwsqmW9ZVp6YDfVBEfNIhJKJvhbvx79IAPU7ZTkAfv5gMEwnLQ5MsyyMMeIhKa8yHLGTK1HbSgpr2gyqexaBa4GN43mt8I4nOHN51uWDijNivqS5OLXBCWGJ1IM"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wide">
                        Professional Choice
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        Dell Latitude Series
                      </h4>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">
                      keyboard_arrow_right
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    Reliable workhorse with excellent display quality and robust
                    security features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-xs text-slate-600 dark:text-slate-400 font-medium">
                      HD Display
                    </span>
                    <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Fast Boot
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}