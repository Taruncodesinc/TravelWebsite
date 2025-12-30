import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Sparkles,
  ArrowRight,
  Mountain,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 gradient-mesh z-0" />

      {/* Decorative Animated Blobs */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl z-1 animate-blob" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl z-1 animate-blob" style={{ animationDelay: "2s" }} />

      {/* Main Content */}
      <div className="relative z-10 pt-20 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Premium Newsletter Section */}
          <div className="mb-20 md:mb-32">
            <div className="relative group">
              {/* Animated Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Newsletter Content */}
                  <div className="animate-slide-left">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/50">
                      <Sparkles className="w-4 h-4 text-purple-300" />
                      <span className="text-purple-300 font-semibold text-sm">Stay Updated</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                      Never Miss<br />a Special Offer
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      Subscribe to our newsletter and receive exclusive travel deals, luxury experiences, and mountain adventures delivered straight to your inbox.
                    </p>
                  </div>

                  {/* Newsletter Form */}
                  <div className="animate-slide-right">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="flex-1 px-5 py-4 md:px-6 md:py-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                      />
                      <button className="px-6 md:px-8 py-4 md:py-5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                        <span>Subscribe</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20">
            {/* Brand Section */}
            <div className="lg:col-span-1 animate-slide-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-75 blur" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mountain className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-lg text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Uttarakhand</h4>
                  <p className="text-purple-300 text-xs font-semibold">Luxury Retreats</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Curating unforgettable mountain experiences with world-class hospitality and breathtaking natural beauty.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-300 group">
                <Heart className="w-4 h-4 text-pink-500 group-hover:animate-pop" />
                <span>Made with passion for travel.</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-slide-left" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-black text-white mb-6 text-lg">Explore</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group text-base font-medium"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hotels"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group text-base font-medium"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    Our Hotels
                  </Link>
                </li>
                <li>
                  <a
                    href="/#attractions"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group text-base font-medium"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    Attractions
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group text-base font-medium"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="animate-slide-left" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-black text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group text-base font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group text-base font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group text-base font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group text-base font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-left" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-black text-white mb-6 text-lg">Get in Touch</h4>
              <div className="space-y-4">
                <a href="tel:+919876543210" className="flex items-start gap-3 group text-base font-medium hover:text-purple-300 transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1 p-2.5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-300">
                    <Phone size={18} className="text-purple-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-purple-300 transition-colors">+91 98765 43210</span>
                </a>
                <a href="mailto:hello@uttarakhandstays.com" className="flex items-start gap-3 group text-base font-medium hover:text-purple-300 transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1 p-2.5 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-lg group-hover:from-pink-500/40 group-hover:to-red-500/40 transition-all duration-300">
                    <Mail size={18} className="text-pink-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-pink-300 transition-colors break-all">hello@uttarakhandstays.com</span>
                </a>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 p-2.5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <MapPin size={18} className="text-cyan-400" />
                  </div>
                  <span className="text-gray-300 text-base font-medium">Uttarakhand, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-12 md:pt-16">
            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 md:gap-5 mb-10 md:mb-12">
              <span className="text-gray-400 text-sm font-semibold hidden sm:inline">Follow Us</span>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="#"
                  className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 text-gray-300 hover:text-purple-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-red-500/20 hover:from-pink-500/40 hover:to-red-500/40 text-gray-300 hover:text-pink-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 text-gray-300 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Copyright & Legal */}
            <div className="text-center py-6 md:py-8 border-t border-white/5 space-y-4">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                © {currentYear} <span className="gradient-text-vibrant font-black">Uttarakhand Tour & Travel</span>. Crafted to inspire wanderlust.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <a href="#" className="text-gray-500 hover:text-gray-300 text-xs md:text-sm font-medium transition-colors duration-300">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-xs md:text-sm font-medium transition-colors duration-300">
                  Terms of Service
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-xs md:text-sm font-medium transition-colors duration-300">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
