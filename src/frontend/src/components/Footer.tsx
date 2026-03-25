const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Strategy", href: "#strategy" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "#0B0B0B",
        borderTop: "1px solid rgba(0,194,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="font-heading font-bold text-xl text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pixel Venus Media
              </span>
              <span
                className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse"
                style={{ boxShadow: "0 0 8px #00C2FF" }}
              />
            </div>
            <p className="text-[#B8C6CF] text-sm leading-relaxed max-w-xs">
              Grow Your Brand with Powerful Content. Premium digital media &
              content creation for brands that dare to grow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <p
              className="text-white font-bold text-sm uppercase tracking-widest mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Quick Links
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#B8C6CF] hover:text-[#00C2FF] text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            <p
              className="text-white font-bold text-sm uppercase tracking-widest mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact
            </p>
            <p className="text-[#B8C6CF] text-sm">📞 9209604008</p>
            <p className="text-[#B8C6CF] text-sm">💬 WhatsApp: 9209604008</p>
            <p className="text-[#B8C6CF] text-sm">📍 India</p>
            <p className="text-[#00C2FF] text-sm font-semibold mt-2">
              Built for brands that dare to grow.
            </p>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#B8C6CF] text-sm"
          style={{ borderTop: "1px solid rgba(0,194,255,0.08)" }}
        >
          <p>Pixel Venus Media © {year} — All Rights Reserved</p>
          <p>Website Designed by SS Designer</p>
        </div>
      </div>
    </footer>
  );
}
