import { Link } from "react-router-dom";
import { MapPin, Star, ArrowRight, Sparkles } from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "Ramanagar Heights Resort",
    location: "Ramanagar",
    description:
      "A luxurious resort offering breathtaking valley views, premium wellness facilities, and world-class dining. Perfect for romantic getaways and corporate retreats.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 245,
    badge: "Luxury",
    gradientBorder: "from-purple-500 to-pink-500",
    gradientBg: "from-purple-600 to-pink-600",
  },
  {
    id: 2,
    name: "Nature's Embrace Spa Resort",
    location: "Ramanagar",
    description:
      "Immerse yourself in nature with our eco-luxury retreat. Featured with ayurvedic treatments, yoga studios, and gourmet organic cuisine.",
    image:
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 318,
    badge: "Wellness",
    gradientBorder: "from-cyan-500 to-blue-600",
    gradientBg: "from-cyan-600 to-blue-700",
  },
];

export default function OurHotels() {
  return (
    <section className="relative py-20 md:py-40 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 gradient-mesh-dark z-0" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl z-1 opacity-60" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-tl from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl z-1 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-slide-right">
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur" />
              <span className="relative block px-5 py-2 bg-slate-900 dark:bg-slate-800 border border-cyan-500/50 rounded-full text-white text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                CURATED EXPERIENCES
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            <span className="block mb-2">Discover</span>
            <span className="gradient-text-vibrant text-4xl md:text-6xl lg:text-7xl">Premium Hotels</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Handpicked luxury accommodations featuring world-class amenities, breathtaking views, and unforgettable experiences in Ramanagar.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="group relative overflow-hidden rounded-3xl animate-slide-left hover-scale-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Vibrant Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hotel.gradientBorder} opacity-100 rounded-3xl`} />

              <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden m-1">
                {/* Hotel Image Container */}
                <div className="relative w-full h-80 overflow-hidden bg-gray-300 dark:bg-gray-700">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 filter brightness-100"
                  />

                  {/* Subtle Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

                  {/* Badge - Bold Design */}
                  <div className="absolute top-5 left-5 z-20">
                    <div className={`px-4 py-2 bg-gradient-to-r ${hotel.gradientBg} text-white text-xs font-black rounded-xl shadow-lg`}>
                      {hotel.badge}
                    </div>
                  </div>

                  {/* Rating Badge - Premium */}
                  <div className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-lg border border-white/30 dark:border-white/10 group-hover:shadow-xl group-hover:shadow-yellow-500/30 transition-all">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-base font-bold text-slate-900 dark:text-white">
                        {hotel.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hotel Info Section */}
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {hotel.name}
                  </h3>

                  {/* Location with Icon - Colorful */}
                  <div className={`flex items-center gap-2 bg-gradient-to-r ${hotel.gradientBg} bg-clip-text text-transparent mb-5 font-semibold text-sm`}>
                    <MapPin size={18} className="flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span className="text-slate-700 dark:text-gray-300">{hotel.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed line-clamp-3 text-base">
                    {hotel.description}
                  </p>

                  {/* Divider */}
                  <div className={`h-1 bg-gradient-to-r ${hotel.gradientBorder} mb-8 rounded-full opacity-60`} />

                  {/* Footer with Stats and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                        Verified Reviews
                      </p>
                      <p className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${hotel.gradientBorder}`}>
                        {hotel.reviews}+
                      </p>
                    </div>

                    <Link
                      to={`/hotels?id=${hotel.id}`}
                      className={`group/btn relative overflow-hidden px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r ${hotel.gradientBg} text-white rounded-xl font-bold text-sm md:text-base hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-2`}
                    >
                      <span className="relative z-10">Explore</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
