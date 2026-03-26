import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const portfolioItems = [
  {
    category: "Wedding",
    title: "Rohan & Priya's Dream Wedding",
    image: "/assets/generated/portfolio-wedding1.dim_260x380.jpg",
  },
  {
    category: "Birthday",
    title: "Aanya's Grand 18th Birthday",
    image: "/assets/generated/portfolio-birthday1.dim_260x380.jpg",
  },
  {
    category: "Product",
    title: "iPhone 15 Pro Unboxing Reel",
    image: "/assets/generated/portfolio-product1.dim_260x380.jpg",
  },
  {
    category: "Delivery",
    title: "BMW M4 Delivery Shoot",
    image: "/assets/generated/portfolio-delivery1.dim_260x380.jpg",
  },
  {
    category: "Wedding",
    title: "Arjun & Meera's Beach Wedding",
    image: "/assets/generated/portfolio-wedding2.dim_260x380.jpg",
  },
  {
    category: "Birthday",
    title: "Raj's 25th Birthday Bash",
    image: "/assets/generated/portfolio-birthday2.dim_260x380.jpg",
  },
  {
    category: "Delivery",
    title: "Royal Enfield Bullet Delivery",
    image: "/assets/generated/portfolio-delivery2.dim_260x380.jpg",
  },
  {
    category: "Product",
    title: "Samsung Galaxy S25 Unboxing",
    image: "/assets/generated/portfolio-product2.dim_260x380.jpg",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!sliderRef.current) return;
    const scrollAmt = 320;
    sliderRef.current.scrollBy({
      left: dir === "next" ? scrollAmt : -scrollAmt,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="portfolio"
      className="py-24 px-6"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label">OUR WORK</p>
          <h2
            className="font-heading font-bold text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Portfolio <span style={{ color: "#00C2FF" }}>Showcase</span>
          </h2>
          <p className="text-[#B8C6CF] mt-4 max-w-xl mx-auto">
            Real content, real results — a glimpse of what we create for brands
            like yours.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto pb-4"
            style={
              {
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              } as React.CSSProperties
            }
          >
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                data-ocid={`portfolio.item.${i + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex-shrink-0 relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  width: 260,
                  height: 380,
                  border:
                    active === i
                      ? "2px solid #00C2FF"
                      : "1px solid rgba(0,194,255,0.15)",
                  boxShadow:
                    active === i
                      ? "0 0 30px rgba(0,194,255,0.3)"
                      : "0 4px 20px rgba(0,0,0,0.4)",
                  transition: "all 0.3s",
                }}
                onClick={() => setActive(i)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.1) 100%)",
                  }}
                />

                {/* Neon border glow on active */}
                {active === i && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: "inset 0 0 20px rgba(0,194,255,0.2)" }}
                  />
                )}

                {/* Category & Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    className="text-xs font-bold uppercase tracking-widest mb-1 block"
                    style={{ color: "#00C2FF" }}
                  >
                    {item.category}
                  </span>
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            type="button"
            data-ocid="portfolio.pagination_prev"
            onClick={() => scroll("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full items-center justify-center transition-all hidden md:flex"
            style={{
              background: "rgba(20,30,36,0.9)",
              border: "1px solid rgba(0,194,255,0.3)",
            }}
          >
            <ChevronLeft size={18} color="#00C2FF" />
          </button>
          <button
            type="button"
            data-ocid="portfolio.pagination_next"
            onClick={() => scroll("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full items-center justify-center transition-all hidden md:flex"
            style={{
              background: "rgba(20,30,36,0.9)",
              border: "1px solid rgba(0,194,255,0.3)",
            }}
          >
            <ChevronRight size={18} color="#00C2FF" />
          </button>
        </div>
      </div>
    </section>
  );
}
