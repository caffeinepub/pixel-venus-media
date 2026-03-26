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
            {/* Instagram */}
            <a
              href="https://www.instagram.com/Pixel_venus_media_01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 group"
              style={{ textDecoration: "none" }}
            >
              <svg
                role="img"
                aria-label="Instagram"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
                <defs>
                  <linearGradient
                    id="igGrad"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  fill="url(#igGrad)"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.5"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="white" />
              </svg>
              <span className="text-sm text-[#B8C6CF] group-hover:text-[#E1306C] transition-colors">
                @Pixel_venus_media_01
              </span>
            </a>
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
