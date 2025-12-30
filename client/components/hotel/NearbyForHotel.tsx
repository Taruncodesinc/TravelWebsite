import { MapPin, Clock, Sparkles } from "lucide-react";

interface Attraction {
  id: number;
  name: string;
  distance: string;
  time: string;
  description: string;
  image: string;
}

interface NearbyForHotelProps {
  attractions: Attraction[];
}

const colors = [
  "from-purple-500 to-pink-500",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-indigo-500 to-purple-600",
  "from-rose-500 to-pink-600",
];

export default function NearbyForHotel({ attractions }: NearbyForHotelProps) {
  return (
    <section className="relative py-20 md:py-40 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 gradient-mesh-dark z-0 opacity-40" />

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-20 w-80 h-80 bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl z-1" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl z-1 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 animate-slide-right">
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur" />
              <span className="relative block px-5 py-2 bg-slate-900 dark:bg-slate-800 border border-cyan-500/50 rounded-full text-white text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                EXPLORE & ADVENTURE
              </span>
            </div>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-4 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Nearby Attractions
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium">
            Discover amazing places and experiences within easy reach from our resort
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {attractions.map((attraction, index) => {
            const gradient = colors[index % colors.length];

            return (
              <div
                key={attraction.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer animate-slide-left hover-scale-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
                />

                <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
                  {/* Image Container */}
                  <div className="relative w-full h-56 bg-gray-300 dark:bg-gray-700 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-150 transition-transform duration-700 filter brightness-90"
                    />

                    {/* Multi-layer Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className={`px-3 py-1.5 bg-gradient-to-r ${gradient} text-white text-xs font-black rounded-lg shadow-lg`}>
                        Must Visit
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-7">
                    <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-all">
                      {attraction.name}
                    </h3>

                    {/* Info Items with Icons */}
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <div className={`p-1.5 bg-gradient-to-br ${gradient} rounded-lg`}>
                          <MapPin size={16} className="text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {attraction.distance}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <div className="p-1.5 bg-gray-300 dark:bg-gray-600 rounded-lg">
                          <Clock size={16} className="text-gray-700 dark:text-gray-300" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {attraction.time}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mb-5">
                      {attraction.description}
                    </p>

                    {/* CTA Link */}
                    <button
                      className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${gradient} text-white font-bold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2`}
                    >
                      <span>Explore</span>
                      <span className="text-lg">→</span>
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
