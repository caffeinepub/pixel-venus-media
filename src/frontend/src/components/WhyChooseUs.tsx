import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const benefits = [
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
        <title>Affordable Pricing</title>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "Premium quality content at prices built for small businesses and local brands.",
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
        <title>Fast Delivery</title>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "Quick turnaround times so your content is live and working for you faster.",
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
        <title>Real Sales Focus</title>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Real Sales Focus",
    desc: "We don't just create views — we create conversions that grow your bottom line.",
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
        <title>Trend-Based Reels</title>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Trend-Based Reels",
    desc: "Always on-trend content that rides the latest waves for maximum organic reach.",
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
        <title>Local Audience Targeting</title>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Local Audience Targeting",
    desc: "Precision targeting to reach customers in your city, area, and community.",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span
      ref={ref}
      className="font-heading font-black"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#00C2FF",
        fontSize: "3rem",
        lineHeight: 1,
      }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      className="py-24 px-6"
      style={{
        background: "linear-gradient(180deg, #0B0B0B 0%, #0D1A22 100%)",
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
          <p className="section-label">WHY CHOOSE US</p>
          <h2
            className="font-heading font-bold text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Built for <span style={{ color: "#00C2FF" }}>Real Growth</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              data-ocid={`why.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass p-6 flex flex-col gap-3"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(0,194,255,0.1)",
                  border: "1px solid rgba(0,194,255,0.3)",
                }}
              >
                {b.icon}
              </div>
              <h3
                className="text-white font-bold text-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {b.title}
              </h3>
              <p className="text-[#B8C6CF] text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { target: 200, suffix: "+", label: "Clients Served" },
            { target: 500, suffix: "+", label: "Reels Created" },
            { target: 98, suffix: "%", label: "Client Satisfaction" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              data-ocid="why.card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="glass p-8 text-center"
            >
              <Counter target={stat.target} suffix={stat.suffix} />
              <p className="text-[#B8C6CF] mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
