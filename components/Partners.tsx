const topRowBrands = [
  {
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
  },
  {
    name: "Acer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg",
  },
  {
    name: "Hikvision",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Hikvision_logo.svg/960px-Hikvision_logo.svg.png?20191005025845",
  },
  {
    name: "CP Plus",
    logo: "https://www.cpplusworld.com/prodassets/corporatelogo/CP_PLUS.webp",
  },
  {
    name: "eSSL",
    logo: "https://www.esslsecurity.com/themes/html5theme/assets/images/esslogo.png",
  },
];

const bottomRowBrands = [
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg",
  },
  {
    name: "AMD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg",
  },
  {
    name: "Asus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
  },
  {
    name: "Gigabyte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Gigabyte_Technology_logo_20080107.svg",
  },
  {
    name: "Canon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Canon_logo.svg",
  },
  {
    name: "Epson",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Epson_logo.svg",
  },
];

export default function Partners() {
  return (
    <div
      className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800"
      id="brands"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase text-primary tracking-widest mb-12">
          Trusted Brands
        </p>
        <div className="space-y-12">
          {/* Top Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
            {topRowBrands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-3 rounded-xl shadow-sm hover:scale-110 transition-transform duration-300"
              >
                <img
                  alt={brand.name}
                  className="h-6 md:h-8 w-auto object-contain"
                  src={brand.logo}
                />
              </div>
            ))}
          </div>
          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10">
            {bottomRowBrands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-3 rounded-xl shadow-sm hover:scale-110 transition-transform duration-300"
              >
                <img
                  alt={brand.name}
                  className="h-6 md:h-8 w-auto object-contain"
                  src={brand.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

