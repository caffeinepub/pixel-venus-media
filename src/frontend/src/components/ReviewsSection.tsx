import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    designation: "CEO, TechNova Pvt Ltd",
    initials: "RS",
    color: "from-purple-500 to-cyan-500",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    text: "Pixel Venus Media completely transformed our brand identity. Their creative team delivered beyond our expectations with stunning visuals and strategy.",
  },
  {
    name: "Priya Mehta",
    designation: "Marketing Head, StyleCraft",
    initials: "PM",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.5)]",
    text: "Our social media engagement tripled within 2 months of working with PVM. Absolutely world-class service and team.",
  },
  {
    name: "Arjun Kapoor",
    designation: "Founder, GreenLeaf Organics",
    initials: "AK",
    color: "from-purple-600 to-pink-500",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    text: "The reels and content they produce are cinematic quality. We get compliments on our brand daily. Highly recommended!",
  },
  {
    name: "Sneha Patil",
    designation: "Director, UrbanEdge Interiors",
    initials: "SP",
    color: "from-cyan-400 to-purple-500",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.5)]",
    text: "PVM's digital strategy helped us reach a whole new audience. Professional, creative, and always on time.",
  },
  {
    name: "Vikram Singh",
    designation: "Owner, FitZone Gym",
    initials: "VS",
    color: "from-pink-500 to-purple-600",
    glow: "shadow-[0_0_20px_rgba(236,72,153,0.5)]",
    text: "From logo to Instagram — they handled everything flawlessly. Our gym bookings increased 40% after their campaign.",
  },
  {
    name: "Ananya Desai",
    designation: "Co-founder, BloomBakery",
    initials: "AD",
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    text: "Working with Pixel Venus Media felt like having an in-house creative team. They truly understand branding and storytelling.",
  },
];

const starStyle = { filter: "drop-shadow(0 0 4px rgba(250,204,21,0.6))" };

function FiveStars() {
  return (
    <div className="flex gap-1 mb-4">
      <Star
        size={16}
        className="fill-yellow-400 text-yellow-400"
        style={starStyle}
      />
      <Star
        size={16}
        className="fill-yellow-400 text-yellow-400"
        style={starStyle}
      />
      <Star
        size={16}
        className="fill-yellow-400 text-yellow-400"
        style={starStyle}
      />
      <Star
        size={16}
        className="fill-yellow-400 text-yellow-400"
        style={starStyle}
      />
      <Star
        size={16}
        className="fill-yellow-400 text-yellow-400"
        style={starStyle}
      />
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative py-24 px-4"
      style={{ background: "#0B0B0B" }}
      data-ocid="reviews.section"
    >
      {/* Background glow blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clients Say
            </span>
          </h2>
          {/* Neon accent underline */}
          <div className="flex justify-center">
            <div
              className="h-1 w-32 rounded-full"
              style={{
                background: "linear-gradient(90deg, #a855f7, #06b6d4)",
                boxShadow:
                  "0 0 12px rgba(168,85,247,0.8), 0 0 24px rgba(6,182,212,0.5)",
              }}
            />
          </div>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
            Real results, real relationships. Here&apos;s what our clients have
            to say about working with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="reviews.list"
        >
          {reviews.map((review, i) => (
            <div
              key={review.name}
              data-ocid={`reviews.item.${i + 1}`}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(168,85,247,0.2)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              {/* Hover glow border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.1))",
                  border: "1px solid rgba(168,85,247,0.5)",
                }}
              />

              <FiveStars />

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Client info */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} ${review.glow} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {review.name}
                  </p>
                  <p className="text-gray-500 text-xs">{review.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
