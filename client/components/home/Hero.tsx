import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen md:h-screen flex items-center justify-center pt-20 md:pt-0 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 gradient-mesh z-0" />
      
      {/* Background Image with Creative Filter */}
      <div
        className="absolute inset-0 bg-cover bg-center z-1 mix-blend-multiply opacity-70"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop")',
          filter: "brightness(0.6) contrast(1.1) saturate(0.9)",
        }}
      />

      {/* Dynamic Animated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30 z-5" />
      <div className="absolute inset-0 pattern-animated-grid z-4" />

      {/* Animated Blob Elements - Large */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 z-3 animate-blob" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 z-3 animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-15 z-2 animate-blob" style={{ animationDelay: "4s" }} />

      {/* Floating Accent Orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl z-2 animate-float" />
      <div className="absolute bottom-40 right-32 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl z-2 animate-float" style={{ animationDelay: "1s" }} />

      {/* Content Container */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-0">
        {/* Premium Badge with Glow */}
        <div className="inline-block mb-6 md:mb-8 animate-slide-right">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity blur" />
            <span className="relative block px-4 md:px-6 py-2 md:py-3 bg-slate-900 border border-purple-500/50 rounded-full text-white text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 hover:border-purple-400">
              <Sparkles className="w-3 h-3" />
              Welcome to Ramanagar's Crown Jewel
            </span>
          </div>
        </div>

        {/* Main Heading - Bold and Modern */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight animate-slide-left"
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
        >
          <span className="block text-white mb-2">Redefine</span>
          <span className="block gradient-text-vibrant text-5xl md:text-7xl lg:text-8xl font-black">Luxury Living</span>
        </h1>

        {/* Subtitle - Enhanced and Engaging */}
        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-right" style={{ animationDelay: "0.2s" }}>
          Curated experiences in breathtaking mountain retreats. From world-class hospitality to exclusive adventures, every moment is designed to transcend expectations.
        </p>

        {/* CTA Buttons - Bold and Modern */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 animate-slide-right" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/hotels"
            className="btn-neon group relative flex items-center justify-center gap-2 text-base md:text-lg"
          >
            <span className="relative z-10">Explore Hotels</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </Link>
          <button
            onClick={() => {
              document.getElementById("attractions")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary-outline group flex items-center justify-center gap-2 text-base md:text-lg"
          >
            Discover Attractions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats Section - Modern Cards with Animations */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
          {[
            { value: "50+", label: "Luxury Rooms", delay: "0.1s" },
            { value: "4.8★", label: "Guest Rating", delay: "0.2s" },
            { value: "15+", label: "Attractions", delay: "0.3s" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="card-floating hover-scale-card"
              style={{ animationDelay: stat.delay }}
            >
              <div className="relative">
                <p className="text-2xl md:text-4xl lg:text-5xl font-black gradient-text-vibrant mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <span className="text-white text-sm font-semibold tracking-wider uppercase">Scroll</span>
          <div className="p-3 rounded-full border-2 border-purple-500/60 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40">
            <svg
              className="w-5 h-5 text-purple-400 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
