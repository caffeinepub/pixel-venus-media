import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    num: "01",
    title: "Short-form Reels",
    desc: "Trending, platform-native short videos that maximize reach and keep viewers engaged from the first frame.",
  },
  {
    num: "02",
    title: "Engagement Tactics",
    desc: "Comment hooks, retention loops, strategic CTAs, and emotional triggers that drive shares and saves.",
  },
  {
    num: "03",
    title: "Local Targeting",
    desc: "Hyper-local audience strategies that reach exactly the right people in your city and area.",
  },
];

const steps = [
  "Brand Audit & Deep Discovery",
  "Custom Content Strategy & Calendar",
  "Professional Shoot & Production",
  "Platform Optimization & Publishing",
  "Analytics Review & Growth Iteration",
];

const bars = [
  { label: "Jan", height: 35 },
  { label: "Feb", height: 48 },
  { label: "Mar", height: 62 },
  { label: "Apr", height: 78 },
  { label: "May", height: 95 },
];

function BarChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="flex items-end gap-3 h-32 mt-6">
      {bars.map((bar, i) => (
        <div
          key={bar.label}
          className="flex flex-col items-center gap-1 flex-1"
        >
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: `${bar.height}%` } : { height: 0 }}
            transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
            className="w-full rounded-t-md relative"
            style={{
              background: "linear-gradient(to top, #0080FF, #00C2FF)",
              boxShadow: "0 0 12px rgba(0,194,255,0.4)",
              minHeight: 4,
            }}
          >
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-bold"
              style={{
                color: "#00C2FF",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {bar.height}%
            </div>
          </motion.div>
          <span className="text-[#B8C6CF] text-xs">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function StrategySection() {
  return (
    <section
      id="strategy"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(180deg, #0B0B0B 0%, #0F1820 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">OUR FRAMEWORK</p>
          <h2
            className="font-heading font-bold text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            PVM <span style={{ color: "#00C2FF" }}>Special Strategy</span>
          </h2>
          <p className="text-[#B8C6CF] mt-4 max-w-xl mx-auto">
            Our proven 3-pillar framework for rapid brand growth — tested,
            refined, and delivering results.
          </p>
        </motion.div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              data-ocid={`strategy.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8"
            >
              <div
                className="text-4xl font-black mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "rgba(0,194,255,0.2)",
                  lineHeight: 1,
                }}
              >
                {p.num}
              </div>
              <h3
                className="text-white font-bold text-xl mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-[#B8C6CF] text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart + Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass p-8"
          >
            <h3
              className="text-white font-bold text-lg mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Brand Growth Over Time
            </h3>
            <p className="text-[#B8C6CF] text-sm mb-4">
              Average client brand reach growth after PVM Strategy
              implementation
            </p>
            <BarChart />
          </motion.div>

          {/* Step Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass p-8"
          >
            <h3
              className="text-white font-bold text-lg mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Step-by-Step Process
            </h3>
            <div className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #00C2FF, #0080FF)",
                      boxShadow: "0 0 12px rgba(0,194,255,0.4)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#fff",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-[#B8C6CF] text-sm">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
