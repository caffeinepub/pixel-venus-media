import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Strategy", href: "#strategy" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setOpen(false);

  return (
    <header
      data-ocid="nav.panel"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,11,11,0.95)" : "rgba(11,11,11,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,194,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          data-ocid="nav.link"
          className="flex items-center gap-3 group"
        >
          <img
            src="/assets/logo.jpg"
            alt="Pixel Venus Media Logo"
            className="h-10 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 6px rgba(0,194,255,0.4))" }}
          />
          <span
            className="font-heading font-bold text-lg text-white tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Pixel Venus Media
          </span>
          <span
            className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse"
            style={{ boxShadow: "0 0 8px #00C2FF" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-sm font-medium text-[#B8C6CF] hover:text-[#00C2FF] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-ocid="nav.primary_button"
            className="px-5 py-2 rounded-full text-sm font-bold text-[#00C2FF] transition-all duration-200"
            style={{
              border: "1px solid rgba(0,194,255,0.5)",
              boxShadow: "0 0 15px rgba(0,194,255,0.15)",
            }}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          data-ocid="nav.toggle"
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: "rgba(11,11,11,0.98)",
            borderTop: "1px solid rgba(0,194,255,0.1)",
          }}
        >
          {navLinks.map((link) => (
            // biome-ignore lint/a11y/useValidAnchor: href navigation plus close-menu side effect
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="block py-3 text-[#B8C6CF] hover:text-[#00C2FF] font-medium border-b border-[rgba(0,194,255,0.08)] transition-colors"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
          {/* biome-ignore lint/a11y/useValidAnchor: href navigation plus close-menu side effect */}
          <a
            href="#contact"
            data-ocid="nav.primary_button"
            className="mt-4 block text-center btn-cyan px-6 py-3 text-sm font-bold rounded-full"
            onClick={closeMobileMenu}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
