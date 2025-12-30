import { useState } from "react";
import { X, Sparkles } from "lucide-react";

interface HotelGalleryProps {
  images: {
    id: number;
    title: string;
    url: string;
  }[];
}

export default function HotelGallery({ images }: HotelGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-40 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh-dark z-0 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 animate-slide-right">
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur" />
              <span className="relative block px-5 py-2 bg-slate-900 dark:bg-slate-800 border border-purple-500/50 rounded-full text-white text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                VISUAL SHOWCASE
              </span>
            </div>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-4 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            Explore the breathtaking beauty, luxury, and comfort of our resort
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => {
            const gradients = [
              "from-purple-500 to-pink-500",
              "from-cyan-500 to-blue-600",
              "from-emerald-500 to-teal-600",
              "from-orange-500 to-red-600",
              "from-indigo-500 to-purple-600",
              "from-rose-500 to-pink-600",
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={image.id}
                className="group relative h-72 md:h-80 rounded-3xl overflow-hidden cursor-pointer animate-slide-left hover-scale-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
                />

                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                  {/* Image */}
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 filter brightness-90"
                  />

                  {/* Multi-Layer Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-black text-xl md:text-2xl mb-2 text-shadow">
                      {image.title}
                    </p>
                    <p className="text-white/80 text-sm font-semibold">
                      Click to expand view
                    </p>
                  </div>

                  {/* Magnifying Glass Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-xl hover-shine">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 dark:bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full animate-slide-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:top-4 md:right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 rounded-full p-3 transition-all duration-300 transform hover:scale-110 z-10 text-white"
              aria-label="Close gallery"
            >
              <X size={28} className="text-white" />
            </button>

            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-2xl dark:shadow-purple-900/50">
              <img
                src={images.find((img) => img.id === selectedImage)?.url}
                alt="Gallery"
                className="w-full h-auto rounded-3xl"
              />

              {/* Image Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-2xl md:text-3xl">
                  {images.find((img) => img.id === selectedImage)?.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
