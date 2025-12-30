import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, MapPin, Sparkles, ArrowRight } from "lucide-react";

export default function Hotels() {
  const hotels = [
    {
      id: 1,
      name: "Wild Vista Marchula",
      location: "Marchula, Uttarakhand",
      tagline: "Alpine Elegance Meets Wilderness",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&h=700&fit=crop",
      rating: 4.9,
      reviews: 328,
      gradient: "from-purple-600 to-pink-600",
      gradientLight: "from-purple-500 to-pink-500",
      description: `Experience the pinnacle of luxury at Wild Vista Marchula, perched on Uttarakhand's most breathtaking alpine ridge. This exclusive resort seamlessly blends contemporary sophistication with untamed natural beauty, offering an immersive mountain sanctuary for discerning travelers.

Our 45 meticulously curated suites feature floor-to-ceiling windows framing panoramic Himalayan vistas, heated outdoor terraces, and state-of-the-art amenities that redefine mountain luxury. Each room is a masterpiece of design, marrying minimalist aesthetics with warm, organic textures.

Indulge in Michelin-inspired cuisine at our signature restaurant, rejuvenate at our award-winning spa, or embark on guided alpine adventures through pristine wilderness. At Wild Vista Marchula, every moment transcends the ordinary.`,
      amenities: [
        "Infinity Pool with Mountain Views",
        "Michelin-Inspired Fine Dining",
        "Premium Spa & Wellness Center",
        "Private Mountain Concierge",
        "24/7 Room Service",
        "Heated Indoor Pool",
        "Adventure Sports Equipment",
        "Complimentary WiFi & Tech Support",
      ],
      highlights: [
        { feature: "Suites", value: "45" },
        { feature: "Altitude", value: "3,200m" },
        { feature: "Rating", value: "4.9★" },
      ],
      gallery: [
        {
          id: 1,
          title: "Panoramic Suite with Terrace",
          url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
        },
        {
          id: 2,
          title: "Grand Lobby & Reception",
          url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        },
        {
          id: 3,
          title: "Alpine Dining Hall",
          url: "https://images.unsplash.com/photo-1517248135467-4d71bcdd2d59?w=800&h=600&fit=crop",
        },
        {
          id: 4,
          title: "Infinity Pool Complex",
          url: "https://images.unsplash.com/photo-1551632786-de41ec16a85a?w=800&h=600&fit=crop",
        },
        {
          id: 5,
          title: "Premium Spa Sanctuary",
          url: "https://images.unsplash.com/photo-1607293703142-531ff882e4a0?w=800&h=600&fit=crop",
        },
        {
          id: 6,
          title: "Sunset Terrace Lounge",
          url: "https://images.unsplash.com/photo-1552928221-70da33ecbf54?w=800&h=600&fit=crop",
        },
      ],
    },
    {
      id: 2,
      name: "Wild Vista Dhikuli",
      location: "Dhikuli, Uttarakhand",
      tagline: "Serenity in the Heart of Nature",
      image:
        "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=1400&h=700&fit=crop",
      rating: 4.8,
      reviews: 287,
      gradient: "from-emerald-600 to-teal-600",
      gradientLight: "from-emerald-500 to-teal-500",
      description: `Discover tranquility at Wild Vista Dhikuli, a sanctuary nestled in verdant valleys where nature's symphony plays endlessly. This sophisticated eco-luxury retreat harmonizes environmental consciousness with uncompromising comfort, creating an oasis for mindful travelers seeking authentic mountain experiences.

Our 40 elegantly appointed rooms blend sustainable design with contemporary luxury, featuring natural materials, organic furnishings, and panoramic forest views. Each space is thoughtfully designed as a personal retreat for restoration and renewal.

Indulge in wellness therapies rooted in Ayurvedic traditions, savor farm-to-table gastronomy, or explore pristine nature trails with expert naturalists. Wild Vista Dhikuli is where the soul finds its sanctuary.`,
      amenities: [
        "Ayurvedic Spa & Wellness Retreat",
        "Farm-to-Table Restaurant",
        "Yoga & Meditation Pavilion",
        "Nature Trail Network",
        "Organic Garden Tours",
        "Forest Bathing Experiences",
        "Sustainable Eco-Practices",
        "24/7 Personalized Concierge",
      ],
      highlights: [
        { feature: "Rooms", value: "40" },
        { feature: "Eco-Rating", value: "Gold" },
        { feature: "Rating", value: "4.8★" },
      ],
      gallery: [
        {
          id: 1,
          title: "Forest View Deluxe Room",
          url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
        },
        {
          id: 2,
          title: "Meditation Pavilion",
          url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        },
        {
          id: 3,
          title: "Organic Farm Restaurant",
          url: "https://images.unsplash.com/photo-1517248135467-4d71bcdd2d59?w=800&h=600&fit=crop",
        },
        {
          id: 4,
          title: "Wellness Spa Center",
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        },
        {
          id: 5,
          title: "Forest Trail",
          url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        },
        {
          id: 6,
          title: "Outdoor Wellness Area",
          url: "https://images.unsplash.com/photo-1552928221-70da33ecbf54?w=800&h=600&fit=crop",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <Header />

      {/* Page Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 gradient-mesh z-0" />

        {/* Animated Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 z-3 animate-blob" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 z-3 animate-blob"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10 text-center">
          <div className="inline-block mb-6 md:mb-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity blur" />
              <span className="relative block px-5 py-2 md:px-6 md:py-3 bg-slate-900 border border-purple-500/50 rounded-full text-white text-xs md:text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                LUXURY MOUNTAIN RETREATS
              </span>
            </div>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight text-white"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
          >
            Two Extraordinary<br />
            <span className="gradient-text-vibrant">Mountain Sanctuaries</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our premium collection of alpine luxury resorts, each offering unique experiences and unparalleled views of Uttarakhand's majestic peaks.
          </p>
        </div>
      </section>

      {/* Hotels Sections */}
      {hotels.map((hotel, index) => (
        <section
          key={hotel.id}
          className={`relative py-24 md:py-40 overflow-hidden ${
            index === 0
              ? "bg-gradient-to-br from-white via-purple-50 to-white dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900"
              : "bg-gradient-to-br from-white via-emerald-50 to-white dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900"
          }`}
        >
          {/* Background Decorations */}
          <div className="absolute inset-0 gradient-mesh-dark z-0" />
          <div
            className={`absolute -top-40 right-0 w-96 h-96 bg-gradient-to-br ${hotel.gradientLight}/20 rounded-full blur-3xl z-1 animate-blob`}
          />
          <div
            className={`absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-tr ${hotel.gradientLight}/15 rounded-full blur-3xl z-1 animate-blob`}
            style={{ animationDelay: "2s" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
            {/* Hotel Header */}
            <div className="mb-16 md:mb-24 animate-slide-left">
              <div className="inline-block mb-6">
                <div
                  className="px-4 py-2 font-black text-sm md:text-base bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${hotel.gradient})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ★ PROPERTY {hotel.id}
                </div>
              </div>

              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 text-slate-900 dark:text-white leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {hotel.name}
              </h2>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center gap-2">
                  <MapPin
                    className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${hotel.gradient}`}
                  />
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg">
                    {hotel.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100/50 dark:bg-yellow-900/20 rounded-full">
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-bold text-yellow-700 dark:text-yellow-300">
                    {hotel.rating} ({hotel.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl italic mb-8">
                "{hotel.tagline}"
              </p>
            </div>

            {/* Hotel Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-24">
              {/* Image Section */}
              <div className="relative group animate-slide-left" style={{ animationDelay: "0.1s" }}>
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${hotel.gradient} rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-lg`} />
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="relative w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                />
              </div>

              {/* Description Section */}
              <div className="animate-slide-right" style={{ animationDelay: "0.1s" }}>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 md:mb-10">
                  {hotel.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                  {hotel.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-4 md:p-6 bg-white dark:bg-slate-800/50 rounded-2xl border-2 transition-all duration-300 text-center hover:shadow-lg"
                      style={{
                        borderColor: `rgba(168, 85, 247, 0.3)`,
                      }}
                    >
                      <p
                        className="text-2xl md:text-3xl font-black mb-1 bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${hotel.gradient})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {highlight.value}
                      </p>
                      <p className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {highlight.feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="mb-8 md:mb-10">
                  <h3 className="font-black text-lg md:text-xl text-slate-900 dark:text-white mb-4 md:mb-6">
                    Premium Amenities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    {hotel.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 md:p-4 bg-white dark:bg-slate-800/50 rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        <div className={`flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r ${hotel.gradient}`} />
                        <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl bg-gradient-to-r ${hotel.gradient} text-white font-black text-base md:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group`}>
                  <span>Explore {hotel.name.split(" ")[2]}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-16 md:mb-24">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-12 md:mb-16">
                Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {hotel.gallery.map((image, idx) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer hover-scale-card animate-slide-right"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-56 md:h-64 object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white font-bold p-4 md:p-6 text-sm md:text-base">
                        {image.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          {index === 0 && (
            <div className="mt-24 md:mt-32 border-t-2 border-gradient-to-r from-slate-200 dark:from-slate-700 via-slate-300 dark:via-slate-600 to-slate-200 dark:to-slate-700" />
          )}
        </section>
      ))}

      {/* Final CTA */}
      <section className="relative py-24 md:py-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh z-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 z-1 animate-blob" />

        <div className="relative max-w-4xl mx-auto px-4 md:px-8 z-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight">
            Ready to Experience<br />
            <span className="gradient-text-vibrant">Mountain Luxury?</span>
          </h2>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Choose your sanctuary and book your perfect getaway today. Our luxury travel specialists are ready to craft an unforgettable experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a
              href="/#contact"
              className="px-8 md:px-10 py-4 md:py-5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-black hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/"
              className="px-8 md:px-10 py-4 md:py-5 rounded-xl border-2 border-white/50 text-white font-black hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
