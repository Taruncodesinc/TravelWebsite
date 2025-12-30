import { useState } from "react";
import { Mail, Phone, User, MessageSquare, Check, Sparkles, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 bg-gradient-to-br from-white via-purple-50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 gradient-mesh-dark z-0" />

      {/* Decorative Animated Blobs */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl z-1 animate-blob" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl z-1 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20 md:mb-32 animate-slide-left">
          <div className="inline-block mb-6 md:mb-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity blur" />
              <span className="relative block px-5 py-2 md:px-6 md:py-3 bg-white dark:bg-slate-900 border border-purple-500/50 rounded-full text-slate-900 dark:text-white text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 hover:border-purple-400">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                LET'S CREATE MAGIC
              </span>
            </div>
          </div>

          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight animate-slide-left text-slate-900 dark:text-white"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
          >
            <span className="block mb-2">Plan Your</span>
            <span className="gradient-text-vibrant">Perfect Escape</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-right" style={{ animationDelay: "0.2s" }}>
            Have questions? Ready to book your dream vacation? Connect with our luxury travel specialists. We're here to craft an unforgettable experience tailored just for you.
          </p>
        </div>

        {/* Success Message - Premium Style */}
        {submitted && (
          <div className="mb-12 md:mb-16 animate-slide-right">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-90" />
              <div className="relative bg-white/10 dark:bg-slate-900/50 p-8 md:p-10 backdrop-blur-xl border border-white/20 dark:border-white/10">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 p-4 bg-emerald-500/30 rounded-2xl">
                    <Check className="w-7 h-7 text-emerald-300 animate-pop" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-white text-xl md:text-2xl mb-2">
                      Message Received! 🎉
                    </h3>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                      Thank you for reaching out. Our luxury travel experts will contact you within 24 hours to craft your perfect getaway experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Premium Form Card */}
        <div className="relative group">
          {/* Animated Gradient Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

          <div className="relative bg-white dark:bg-slate-900/80 dark:backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-7 md:space-y-10">
                {/* Grid Layout for Name & Email */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Name Field */}
                  <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.1s" }}>
                    <label className="flex items-center gap-2.5 text-sm md:text-base font-semibold text-slate-900 dark:text-white mb-3 md:mb-4">
                      <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span>Full Name</span>
                      <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Your full name"
                      className={`w-full px-5 py-4 md:px-6 md:py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none ${
                        focusedField === "name"
                          ? "border-purple-500 shadow-lg shadow-purple-500/30 dark:shadow-purple-500/20"
                          : "border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700"
                      }`}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.15s" }}>
                    <label className="flex items-center gap-2.5 text-sm md:text-base font-semibold text-slate-900 dark:text-white mb-3 md:mb-4">
                      <div className="p-2.5 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <span>Email Address</span>
                      <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="your.email@example.com"
                      className={`w-full px-5 py-4 md:px-6 md:py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none ${
                        focusedField === "email"
                          ? "border-pink-500 shadow-lg shadow-pink-500/30 dark:shadow-pink-500/20"
                          : "border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-700"
                      }`}
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.2s" }}>
                  <label className="flex items-center gap-2.5 text-sm md:text-base font-semibold text-slate-900 dark:text-white mb-3 md:mb-4">
                    <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span>Phone Number</span>
                    <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="+91 (98765) 43210"
                    className={`w-full px-5 py-4 md:px-6 md:py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none ${
                      focusedField === "phone"
                        ? "border-cyan-500 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/20"
                        : "border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700"
                    }`}
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.25s" }}>
                  <label className="flex items-center gap-2.5 text-sm md:text-base font-semibold text-slate-900 dark:text-white mb-3 md:mb-4">
                    <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <span>Your Message</span>
                    <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="Tell us about your travel dreams, preferences, special requests, and what makes your ideal escape..."
                    rows={6}
                    className={`w-full px-5 py-4 md:px-6 md:py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none resize-none ${
                      focusedField === "message"
                        ? "border-purple-500 shadow-lg shadow-purple-500/30 dark:shadow-purple-500/20"
                        : "border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700"
                    }`}
                  />
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 md:py-5 px-6 md:px-8 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-black text-base md:text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 active:scale-95 transform overflow-hidden group/btn animate-slide-left flex items-center justify-center gap-2"
                  style={{ animationDelay: "0.3s" }}
                >
                  <span>Send Enquiry</span>
                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Privacy Notice */}
                <p className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed px-2">
                  We respect your privacy and will only use your information to respond to your enquiry. Expect a response within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
