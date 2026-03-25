import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const WA_LINK =
  "https://wa.me/919209604008?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20Pixel%20Venus%20Media";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, I'm ${form.name}.\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.open(`https://wa.me/919209604008?text=${text}`, "_blank");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">GET IN TOUCH</p>
          <h2
            className="font-heading font-bold text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s <span style={{ color: "#00C2FF" }}>Grow Together</span>
          </h2>
          <p className="text-[#B8C6CF] mt-4 max-w-xl mx-auto">
            Ready to transform your brand? Let&apos;s create something
            incredible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass p-8"
            data-ocid="contact.panel"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h3
                className="text-white font-bold text-xl mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Send a Message
              </h3>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[#B8C6CF] text-sm mb-2"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  data-ocid="contact.input"
                  className="input-glass"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-[#B8C6CF] text-sm mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  data-ocid="contact.input"
                  type="tel"
                  className="input-glass"
                  placeholder="+91 9209604008"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[#B8C6CF] text-sm mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  data-ocid="contact.textarea"
                  className="input-glass resize-none"
                  rows={4}
                  placeholder="Tell us about your brand and what you want to achieve..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                data-ocid="contact.submit_button"
                className="btn-cyan py-3 text-base font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Send via WhatsApp →
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <a
              href="tel:9209604008"
              data-ocid="contact.button"
              className="glass p-6 flex items-center gap-4 group transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(0,194,255,0.15)",
                  border: "1px solid rgba(0,194,255,0.4)",
                  boxShadow: "0 0 15px rgba(0,194,255,0.15)",
                }}
              >
                <Phone size={24} color="#00C2FF" />
              </div>
              <div>
                <p className="text-[#B8C6CF] text-xs uppercase tracking-widest mb-1">
                  Call Us
                </p>
                <p
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  9209604008
                </p>
                <p className="text-[#B8C6CF] text-sm">Mon–Sat, 9AM–8PM IST</p>
              </div>
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.button"
              className="glass p-6 flex items-center gap-4 group transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(37,211,102,0.15)",
                  border: "1px solid rgba(37,211,102,0.4)",
                  boxShadow: "0 0 15px rgba(37,211,102,0.15)",
                }}
              >
                <MessageCircle size={24} color="#25D366" />
              </div>
              <div>
                <p className="text-[#B8C6CF] text-xs uppercase tracking-widest mb-1">
                  WhatsApp
                </p>
                <p
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  9209604008
                </p>
                <p className="text-[#B8C6CF] text-sm">Quick reply guaranteed</p>
              </div>
            </a>

            <div className="glass p-6 flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(0,194,255,0.1)",
                  border: "1px solid rgba(0,194,255,0.3)",
                }}
              >
                <MapPin size={24} color="#00C2FF" />
              </div>
              <div>
                <p className="text-[#B8C6CF] text-xs uppercase tracking-widest mb-1">
                  Based In
                </p>
                <p
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  India
                </p>
                <p className="text-[#B8C6CF] text-sm">
                  Serving clients nationwide
                </p>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,194,255,0.1), rgba(0,128,255,0.1))",
                border: "1px solid rgba(0,194,255,0.2)",
              }}
            >
              <p className="text-[#B8C6CF] text-sm mb-3">
                Ready to start right now?
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.primary_button"
                className="btn-cyan inline-block px-8 py-3 text-sm font-bold rounded-full"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
