import { useState } from "react";
import {
  Mail,
  Phone,
  User,
  Calendar,
  Users,
  MessageSquare,
  Check,
  Sparkles,
} from "lucide-react";

interface HotelEnquiryProps {
  hotelName: string;
}

export default function HotelEnquiry({ hotelName }: HotelEnquiryProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="hotel-enquiry" className="relative py-20 md:py-40 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 gradient-mesh-dark z-0" />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl z-1 animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl z-1 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-slide-right">
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur" />
              <span className="relative block px-5 py-2 bg-slate-900 dark:bg-slate-800 border border-purple-500/50 rounded-full text-white text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                BOOK YOUR STAY
              </span>
            </div>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="block mb-2">Reserve</span>
            <span className="gradient-text-vibrant">{hotelName}</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Get exclusive room availability, personalized recommendations, and special rates. Our team is ready to craft your perfect stay.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-12 md:mb-16 animate-slide-right">
            <div className="p-6 md:p-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10 border-2 border-emerald-500/40 dark:border-emerald-500/50 rounded-2xl backdrop-blur-sm hover:border-emerald-500/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-emerald-500/20 rounded-lg">
                  <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-emerald-900 dark:text-emerald-200 text-lg mb-1">
                    Thank you! Your enquiry is confirmed
                  </h3>
                  <p className="text-emerald-800 dark:text-emerald-300">
                    Our team will contact you within 24 hours with availability, room options, and exclusive offers for your stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modern Form Card */}
        <div className="card-bold gradient-purple-blue p-0 overflow-hidden">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-white dark:bg-slate-900 p-8 md:p-12 m-1">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Grid Layout for Name and Email */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Name Field */}
                <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.1s" }}>
                  <label className="label-modern flex items-center gap-2">
                    <User className="w-4 h-4 text-purple-500" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="input-modern"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.15s" }}>
                  <label className="label-modern flex items-center gap-2">
                    <Mail className="w-4 h-4 text-pink-500" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="input-modern"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.2s" }}>
                <label className="label-modern flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-500" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="input-modern"
                />
              </div>

              {/* Dates and Guests Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Check-in */}
                <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.25s" }}>
                  <label className="label-modern flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>Check-in</span>
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="input-modern"
                  />
                </div>

                {/* Check-out */}
                <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.3s" }}>
                  <label className="label-modern flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-pink-500" />
                    <span>Check-out</span>
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="input-modern"
                  />
                </div>

                {/* Guests */}
                <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.35s" }}>
                  <label className="label-modern flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-500" />
                    <span>Guests</span>
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="input-modern"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-3 animate-slide-left" style={{ animationDelay: "0.4s" }}>
                <label className="label-modern flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-purple-500" />
                  <span>Special Requests</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Room preferences, special occasions, accessibility needs, etc..."
                  rows={5}
                  className="textarea-modern"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary-bold w-full text-base md:text-lg animate-slide-left"
                style={{ animationDelay: "0.45s" }}
              >
                <span>Confirm My Booking</span>
                <Sparkles className="w-5 h-5" />
              </button>

              {/* Info Text */}
              <p className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
                We respect your privacy. Your information will only be used to respond to your enquiry and provide the best experience.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
