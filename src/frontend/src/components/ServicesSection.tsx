import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C2FF"
        strokeWidth={1.8}
        strokeLinecap="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>Digital Marketing</title>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3 2-2 3 4" />
      </svg>
    ),
    title: "Digital Marketing",
    desc: "Data-driven campaigns that boost your brand visibility and drive real revenue growth.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C2FF"
        strokeWidth={1.8}
        strokeLinecap="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>Content Creation</title>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <circle cx="12" cy="13" r="2" />
        <path d="M9.5 13H7M17 13h-2.5" />
      </svg>
    ),
    title: "Content Creation",
    desc: "Scroll-stopping reels, videos, and posts crafted to capture attention and convert.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C2FF"
        strokeWidth={1.8}
        strokeLinecap="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>Wedding Shoots</title>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Wedding Shoots",
    desc: "Cinematic wedding reels that preserve your most precious moments with artistic elegance.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C2FF"
        strokeWidth={1.8}
        strokeLinecap="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>Birthday Shoots</title>
        <path d="M12 2a5 5 0 100 10A5 5 0 0012 2z" />
        <path d="M12 12v10M8 16l4-4 4 4" />
        <circle cx="12" cy="21" r="1" fill="#00C2FF" />
      </svg>
    ),
    title: "Birthday Shoots",
    desc: "Vibrant birthday content that captures the joy and creates memories worth sharing.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C2FF"
        strokeWidth={1.8}
        strokeLinecap="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>Personal Party Shoots</title>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Personal Party Shoots",
    desc: "High-energy party coverage that makes every celebration look like a blockbuster event.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C2FF"
        strokeWidth={1.8}
        strokeLinecap="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>Car Delivery Shoots</title>
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h5l2 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Car Delivery Shoots",
    desc: "Premium car delivery reels that make every handover a shareable, viral moment.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C2FF"
        strokeWidth={1.8}
        strokeLinecap="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>Bike Delivery Shoots</title>
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3M9 17l2-5 5 2 1-4" />
        <circle cx="17" cy="17" r="4" />
      </svg>
    ),
    title: "Bike Delivery Shoots",
    desc: "Dynamic bike delivery content that showcases speed, style, and brand personality.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C2FF"
        strokeWidth={1.8}
        strokeLinecap="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>Phone Unboxing Reels</title>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Phone Unboxing Reels",
    desc: "Crisp, trending unboxing videos that drive product curiosity and skyrocket engagement.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">WHAT WE DO</p>
          <h2
            className="font-heading font-bold text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Our <span style={{ color: "#00C2FF" }}>Services</span>
          </h2>
          <p className="text-[#B8C6CF] mt-4 max-w-xl mx-auto">
            Everything your brand needs to dominate in the digital space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              data-ocid={`services.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.04 }}
              className="glass p-6 flex flex-col gap-4 cursor-default transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(0,194,255,0.1)",
                  border: "1px solid rgba(0,194,255,0.3)",
                  boxShadow: "0 0 15px rgba(0,194,255,0.1)",
                }}
              >
                {svc.icon}
              </div>
              <h3
                className="text-white font-bold text-base"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {svc.title}
              </h3>
              <p className="text-[#B8C6CF] text-sm leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
