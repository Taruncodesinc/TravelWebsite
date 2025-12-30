import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme === "dark" || (savedTheme === null && prefersDark);

    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If not on home page, navigate to home with anchor
    if (location.pathname !== "/") {
      // Use navigate with hash to trigger proper routing
      window.location.href = `/#${id}`;
    } else {
      // If already on home page, scroll to element
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  };

  const navLinks = [
    { label: "Home", href: "/", isAnchor: false },
    { label: "Hotels", href: "/hotels", isAnchor: false },
    { label: "Attractions", href: "attractions", isAnchor: true },
    { label: "Contact", href: "contact", isAnchor: true },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white dark:bg-slate-900 dark:backdrop-blur-xl shadow-lg dark:shadow-2xl dark:shadow-black/30 border-b border-slate-200/50 dark:border-slate-700/50"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
        {/* Logo - Modern Design */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur" />
            <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          <span
            className={`hidden sm:inline font-black text-lg transition-all duration-300 ${
              isSticky
                ? "text-slate-900 dark:text-white"
                : "text-white group-hover:text-purple-300"
            }`}
            style={{
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            Uttarakhand
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`font-semibold text-sm transition-all duration-300 relative group cursor-pointer ${
                  isSticky
                    ? "text-slate-800 hover:text-purple-600 dark:text-white dark:hover:text-purple-300"
                    : "text-white hover:text-purple-200"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`font-semibold text-sm transition-all duration-300 relative group ${
                  isSticky
                    ? "text-slate-800 hover:text-purple-600 dark:text-white dark:hover:text-purple-300"
                    : "text-white hover:text-purple-200"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ),
          )}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg transition-all duration-300 group ${
              isSticky
                ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            ) : (
              <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            )}
          </button>

          {/* CTA Button - Bold */}
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="btn-primary-bold text-sm md:text-base"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              isSticky
                ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
                : "bg-white/10 text-white"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2.5 rounded-lg transition-all ${
              isSticky
                ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
                : "bg-white/10 text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gradient-to-b from-purple-600 to-pink-600 text-white py-6 px-4 animate-slide-down">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="font-bold text-base hover:text-purple-100 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-bold text-base hover:text-purple-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }
              }}
              className="mt-4 px-4 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
