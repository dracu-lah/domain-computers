"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Refurbished Laptops",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, service, message } = formData;
    const text = `*Inquiry from Website*\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
    const whatsappLink = `https://wa.me/919809079666?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section
      className="py-16 sm:py-24 bg-white dark:bg-background-dark relative"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-slate-900 dark:bg-slate-800 rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Let's Discuss Your IT Needs
              </h2>
              <p className="text-slate-300 mb-8 sm:mb-10 text-base sm:text-lg">
                Whether it's a bulk laptop order, a complex networking setup, or
                a simple repair inquiry, we're here to help.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white">
                      call
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">
                      Call for Immediate Support
                    </p>
                    <a
                      className="text-lg sm:text-xl font-bold text-white hover:text-primary transition-colors"
                      href="tel:9809079666"
                    >
                      9809 07 9666
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white">
                      mail
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">
                      Email Your Query
                    </p>
                    <a
                      className="text-lg sm:text-xl font-bold text-white hover:text-primary transition-colors break-all"
                      href="mailto:info@domaincomputers.in"
                    >
                      info@domaincomputers.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Visit Us</p>
                    <p className="text-white font-medium text-base sm:text-lg">
                      Thrissur &amp; Malappuram Districts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 sm:p-10 lg:p-16 border-t lg:border-t-0 lg:border-l border-white/10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-300 mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      id="name"
                      placeholder="John Doe"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-300 mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      id="phone"
                      placeholder="+91"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-300 mb-2"
                    htmlFor="service"
                  >
                    Interested In
                  </label>
                  <select
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option className="bg-slate-800 text-white">
                      Refurbished Laptops
                    </option>
                    <option className="bg-slate-800 text-white">
                      Computer Repair
                    </option>
                    <option className="bg-slate-800 text-white">
                      CCTV / Security
                    </option>
                    <option className="bg-slate-800 text-white">
                      Networking
                    </option>
                    <option className="bg-slate-800 text-white">
                      Other Inquiry
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-300 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  className="w-full bg-primary hover:bg-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}