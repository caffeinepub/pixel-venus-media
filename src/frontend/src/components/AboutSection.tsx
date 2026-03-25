import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(180deg, #0B0B0B 0%, #0F1820 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">ABOUT US</p>
          <h2
            className="font-heading font-bold text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            We Are <span style={{ color: "#00C2FF" }}>Pixel Venus Media</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="text-[#B8C6CF] leading-relaxed mb-5"
              style={{ fontSize: "1.05rem" }}
            >
              Pixel Venus Media is a premium digital marketing & content
              creation agency founded on the belief that every brand — no matter
              how small — deserves world-class content. We work with small
              businesses, local shops, startups, and brands to help them grow
              fast through powerful, trend-driven content.
            </p>
            <p
              className="text-[#B8C6CF] leading-relaxed mb-5"
              style={{ fontSize: "1.05rem" }}
            >
              Our philosophy is simple:{" "}
              <span style={{ color: "#00C2FF", fontWeight: 600 }}>
                content-driven marketing that generates real sales, not just
                views.
              </span>{" "}
              Every reel, every shoot, every strategy is crafted to connect with
              your local audience and turn them into loyal customers.
            </p>
            <p
              className="text-[#B8C6CF] leading-relaxed mb-8"
              style={{ fontSize: "1.05rem" }}
            >
              We introduced the{" "}
              <span style={{ color: "#00C2FF", fontWeight: 700 }}>
                PVM Special Strategy
              </span>{" "}
              — a unique 3-pillar framework combining short-form reels, deep
              engagement tactics, and hyper-local audience targeting to deliver
              measurable brand growth within weeks.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Wedding Shoots",
                "Birthday Events",
                "Product Reels",
                "Brand Marketing",
                "Local Targeting",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(0,194,255,0.08)",
                    border: "1px solid rgba(0,194,255,0.25)",
                    color: "#00C2FF",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass p-8 flex flex-col items-center text-center"
          >
            {/* Founder Photo */}
            <div
              className="w-36 h-36 rounded-full mb-5 overflow-hidden"
              style={{
                boxShadow:
                  "0 0 30px rgba(0,194,255,0.5), 0 0 0 3px rgba(0,194,255,0.3)",
              }}
            >
              <img
                src="/assets/founder.jpg"
                alt="Tanmay Papdiwal - Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className="text-white font-heading font-bold text-xl mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Tanmay Papdiwal
            </h3>
            <p className="text-[#00C2FF] text-sm font-medium mb-5 tracking-wide uppercase">
              Founder & Creative Director
            </p>
            <blockquote className="text-[#B8C6CF] italic leading-relaxed text-base">
              "I started Pixel Venus Media with one mission — to give every
              local business the power of premium content. Your story deserves
              to be seen, and we make sure the right people see it."
            </blockquote>

            <div className="mt-6 pt-6 border-t border-[rgba(0,194,255,0.15)] w-full grid grid-cols-3 gap-4">
              {[
                { value: "200+", label: "Clients" },
                { value: "500+", label: "Reels" },
                { value: "3+", label: "Years" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-[#00C2FF] font-bold text-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[#B8C6CF] text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
