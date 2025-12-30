import { MapPin, Star, Sparkles } from "lucide-react";

interface HotelHeroProps {
  name: string;
  location: string;
  tagline: string;
  image: string;
  rating: number;
}

export default function HotelHero({
  name,
  location,
  tagline,
  image,
  rating,
}: HotelHeroProps) {
  return (
    <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center pt-20 md:pt-0 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 gradient-mesh z-0" />

      {/* Background Image with Creative Filter */}
      <div
        className="absolute inset-0 bg-cover bg-center z-1 mix-blend-multiply opacity-75"
        style={{
          backgroundImage: `url("${image}")`,
          filter: "brightness(0.6) contrast(1.1) saturate(0.95)",
        }}
      />

      {/* Dynamic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30 z-5" />
      <div className="absolute inset-0 pattern-animated-grid z-4" />

      {/* Animated Blob Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 z-2 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 z-2 animate-blob" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 md:px-6">
        {/* Premium Rating Badge */}
        <div className="inline-block mb-6 md:mb-8 animate-slide-right">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-40 group-hover:opacity-100 transition-opacity blur" />
            <div className="relative px-5 py-3 bg-slate-900 border-2 border-yellow-500/60 rounded-full flex items-center gap-2 text-white font-bold">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg">{rating}</span>
              <span className="text-sm">Exceptional</span>
            </div>
          </div>
        </div>

        {/* Hotel Name - Bold and Modern */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight animate-slide-left"
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
        >
          {name}
        </h1>

        {/* Location with Icon */}
        <div className="flex items-center justify-center gap-2 text-gray-200 mb-6 md:mb-8 animate-slide-right" style={{ animationDelay: "0.2s" }}>
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
            <MapPin size={20} className="text-white" />
          </div>
          <span className="text-lg md:text-xl font-semibold">{location}</span>
        </div>

        {/* Tagline - Enhanced */}
        <p className="text-lg md:text-2xl text-gray-100 italic font-light leading-relaxed max-w-2xl mx-auto animate-slide-left" style={{ animationDelay: "0.4s" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">"{tagline}"</span>
        </p>
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl z-2 animate-float" />
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl z-2 animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
}
