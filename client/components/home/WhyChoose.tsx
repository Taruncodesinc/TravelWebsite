import { Mountain, Compass, Wind, Home, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Mountain,
    title: "Surrounded by Nature",
    description:
      "Immerse yourself in the pristine beauty of mountains, valleys, and forests. Experience the tranquility of untouched natural landscapes.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-600 to-teal-700",
  },
  {
    icon: Compass,
    title: "Close to Famous Temples & Treks",
    description:
      "Stay near sacred temples and challenging trekking routes. Easy access to spiritual and adventure destinations.",
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-600 to-red-700",
  },
  {
    icon: Wind,
    title: "Peaceful Environment",
    description:
      "Escape the hustle and bustle of city life. Find serenity and rejuvenation in a calm, undisturbed setting.",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-600 to-blue-700",
  },
  {
    icon: Home,
    title: "Comfortable & Clean Stay",
    description:
      "Premium amenities with meticulous cleanliness. Every room is designed for your utmost comfort and relaxation.",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-600 to-pink-700",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 md:py-40 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 gradient-mesh-dark z-0" />

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl z-1" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl z-1 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-slide-right">
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur" />
              <span className="relative block px-5 py-2 bg-slate-900 dark:bg-slate-800 border border-purple-500/50 rounded-full text-white text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                OUR COMMITMENT
              </span>
            </div>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="block mb-2">Why Choose</span>
            <span className="gradient-text-vibrant">Our Stays</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the best luxury accommodations in Ramanagar. Discover what makes our stays the perfect choice for your unforgettable mountain getaway
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl animate-slide-left hover-scale-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-100 rounded-2xl`} />

                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-7 md:p-8 m-1 h-full flex flex-col">
                  {/* Icon Container with Gradient Background */}
                  <div className={`flex-shrink-0 mb-6 inline-flex`}>
                    <div className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${benefit.bgGradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {benefit.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                    {benefit.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`mt-5 pt-5 border-t border-slate-200 dark:border-slate-700`} />
                  <div className={`h-1 bg-gradient-to-r ${benefit.gradient} rounded-full mt-4 opacity-60 group-hover:opacity-100 transition-all`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
