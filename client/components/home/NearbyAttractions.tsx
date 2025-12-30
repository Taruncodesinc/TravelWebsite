import { MapPin, ArrowRight, Sparkles, Mountain } from "lucide-react";

const attractions = [
  {
    id: 1,
    name: "Auli Skiing Resort",
    distance: "2 km away",
    description:
      "Premier skiing and snowboarding destination with world-class facilities and breathtaking alpine vistas.",
    image:
      "https://images.unsplash.com/photo-1551632786-de41ec16a85a?w=600&h=400&fit=crop",
    color: "from-orange-500 to-red-600",
    icon: Mountain,
  },
  {
    id: 2,
    name: "Chopta Meadows",
    distance: "15 km away",
    description: "Serene high-altitude meadows perfect for trekking, nature walks, and immersive landscape experiences.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    color: "from-emerald-500 to-teal-600",
    icon: Mountain,
  },
  {
    id: 3,
    name: "Tungnath Temple",
    distance: "8 km away",
    description: "Highest Shiva temple in India, offering spiritual transcendence amidst majestic mountain peaks.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=400&fit=crop",
    color: "from-purple-500 to-pink-600",
    icon: Mountain,
  },
  {
    id: 4,
    name: "Deoria Tal Lake",
    distance: "12 km away",
    description:
      "Crystal-clear alpine lake surrounded by dense forests, perfect for reflection and serene contemplation.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    color: "from-blue-500 to-cyan-600",
    icon: Mountain,
  },
  {
    id: 5,
    name: "Kedarnath Sanctuary",
    distance: "25 km away",
    description: "Sacred pilgrimage destination nestled amidst snow-capped peaks and pristine natural beauty.",
    image:
      "https://images.unsplash.com/photo-1521637776475-2b1a83b3c9b6?w=600&h=400&fit=crop",
    color: "from-indigo-500 to-purple-600",
    icon: Mountain,
  },
  {
    id: 6,
    name: "Panch Prayag Trek",
    distance: "20 km away",
    description: "Challenging trek through sacred confluences offering unparalleled adventure and spiritual awakening.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    color: "from-rose-500 to-pink-600",
    icon: Mountain,
  },
];

export default function NearbyAttractions() {
  return (
    <section id="attractions" className="relative py-32 md:py-48 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 gradient-mesh z-0" />

      {/* Background Image with Creative Filter */}
      <div
        className="absolute inset-0 bg-cover bg-center z-1 mix-blend-multiply opacity-50"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop")',
          filter: "brightness(0.5) contrast(1.1) saturate(0.8)",
        }}
      />

      {/* Dynamic Animated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-800/40 to-slate-900/80 z-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30 z-5" />

      {/* Animated Blob Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 z-3 animate-blob" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 z-3 animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-15 z-2 animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20 md:mb-32 animate-slide-left">
          <div className="inline-block mb-6 md:mb-8 animate-slide-right">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity blur" />
              <span className="relative block px-5 py-2 md:px-6 md:py-3 bg-slate-900 border border-cyan-500/50 rounded-full text-white text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 hover:border-cyan-400">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                EXPLORE NEARBY WONDERS
              </span>
            </div>
          </div>

          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight animate-slide-left text-white"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
          >
            <span className="block mb-2">Discover</span>
            <span className="gradient-text-vibrant">Extraordinary</span>
            <span className="block text-white">Adventures</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-right" style={{ animationDelay: "0.2s" }}>
            Immerse yourself in the region's most captivating destinations. From sacred temples to pristine meadows, every attraction tells a story of mountain magic and natural splendor.
          </p>
        </div>

        {/* Attractions Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {attractions.map((attraction, index) => {
            const IconComponent = attraction.icon;
            return (
              <div
                key={attraction.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer animate-slide-right hover-scale-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Vibrant Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${attraction.color} opacity-100 rounded-3xl`} />

                <div className="relative bg-slate-900 rounded-3xl overflow-hidden m-1 flex flex-col h-full">
                  {/* Image Container with Premium Effects */}
                  <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                    />

                    {/* Sophisticated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-slate-900/60 group-hover:from-black/40 transition-all duration-500" />

                    {/* Distance Badge - Premium Style */}
                    <div className="absolute top-5 left-5 z-20">
                      <div className={`px-4 py-2 bg-gradient-to-r ${attraction.color} text-white text-xs font-black rounded-xl shadow-lg backdrop-blur-sm`}>
                        {attraction.distance}
                      </div>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-5 right-5 z-20">
                      <div className="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-7 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-300 to-blue-300 transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {attraction.name}
                    </h3>

                    {/* Location with Icon */}
                    <div className="flex items-center gap-2 text-gray-300 mb-5 text-sm font-semibold">
                      <MapPin size={16} className={`text-transparent bg-clip-text bg-gradient-to-r ${attraction.color}`} />
                      <span>{attraction.distance}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed line-clamp-3 mb-6 md:mb-8 flex-1 text-sm md:text-base">
                      {attraction.description}
                    </p>

                    {/* Premium Divider */}
                    <div className={`h-0.5 bg-gradient-to-r ${attraction.color} mb-6 opacity-50 rounded-full`} />

                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 px-5 md:py-4 md:px-6 rounded-xl bg-gradient-to-r ${attraction.color} text-white font-bold text-sm md:text-base hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group/btn`}
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
