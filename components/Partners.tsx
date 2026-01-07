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
            <img
              alt="Dell"
              className="h-7 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/dell.com"
            />
            <img
              alt="HP"
              className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/hp.com"
            />
            <img
              alt="Acer"
              className="h-7 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/acer.com"
            />
            <img
              alt="Hikvision"
              className="h-6 md:h-9 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/hikvision.com"
            />
            <img
              alt="CP Plus"
              className="h-6 md:h-9 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://www.cpplusworld.com/assets/images/logo.png"
            />
            <img
              alt="eSSL"
              className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://www.esslsecurity.com/assets/images/logo.png"
            />
          </div>
          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
            <img
              alt="Intel"
              className="h-8 md:h-11 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/intel.com"
            />
            <img
              alt="AMD"
              className="h-6 md:h-9 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/amd.com"
            />
            <img
              alt="Asus"
              className="h-6 md:h-9 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/asus.com"
            />
            <img
              alt="Gigabyte"
              className="h-5 md:h-8 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/gigabyte.com"
            />
            <img
              alt="Canon"
              className="h-7 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/canon.com"
            />
            <img
              alt="Epson"
              className="h-8 md:h-11 w-auto object-contain hover:scale-110 transition-transform duration-300"
              src="https://logo.clearbit.com/epson.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
