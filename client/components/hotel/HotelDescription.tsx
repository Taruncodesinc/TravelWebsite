import { Wifi, Coffee, Utensils, Signal, Tv, Wind, Sparkles } from "lucide-react";

interface HotelDescriptionProps {
  description: string;
  amenities: string[];
}

const amenityIcons: Record<string, any> = {
  "Free WiFi": Wifi,
  "Complimentary Breakfast": Coffee,
  "Multi-cuisine Restaurant": Utensils,
  "High-speed Internet": Signal,
  "Smart TV in Rooms": Tv,
  "Air Conditioning": Wind,
};

const amenityColors = [
  "from-purple-500 to-pink-500",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-indigo-500 to-purple-600",
  "from-rose-500 to-pink-600",
];

export default function HotelDescription({
  description,
  amenities,
}: HotelDescriptionProps) {
  return (
    <section className="relative py-20 md:py-40 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 gradient-mesh-dark z-0 opacity-40" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
          {/* Description */}
          <div className="md:col-span-2 animate-slide-left">
            <h2
              className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="block mb-2">About</span>
              <span className="gradient-text-vibrant">This Hotel</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line font-medium">
              {description}
            </p>
          </div>

          {/* Quick Facts Card - Modern */}
          <div className="group animate-slide-right">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity blur" />
              <div className="relative p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Quick Facts
                  </h3>
                </div>

                <ul className="space-y-4 text-base">
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0 animate-pop" />
                    <span>Check-in: <span className="font-bold text-slate-900 dark:text-white">2:00 PM</span></span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 animate-pop" style={{ animationDelay: "0.1s" }} />
                    <span>Check-out: <span className="font-bold text-slate-900 dark:text-white">12:00 PM</span></span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex-shrink-0 animate-pop" style={{ animationDelay: "0.2s" }} />
                    <span className="font-semibold">50+ luxury rooms</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex-shrink-0 animate-pop" style={{ animationDelay: "0.3s" }} />
                    <span>Operating since <span className="font-bold text-slate-900 dark:text-white">2015</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gradient mb-20 md:mb-32" />

        {/* Amenities Section */}
        <div className="animate-slide-left">
          <h2
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 md:mb-14 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="block mb-2">Premium</span>
            <span className="gradient-text-vibrant">Amenities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenityIcons[amenity] || Wifi;
              const gradient = amenityColors[index % amenityColors.length];

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl animate-slide-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                  />

                  <div className="relative p-7 md:p-8 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-base md:text-lg text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-all">
                        {amenity}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
