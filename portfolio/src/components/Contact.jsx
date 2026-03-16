// components/Contact.jsx
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Phone } from "lucide-react";
import { OWNER } from "../constants";

const WEB3FORMS_KEY = "e10bf72f-3ee4-43ac-8b52-c176bdfb4b27";

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form,    setForm]    = useState({ name: "", email: "", subject: "", message: "" });
  const [status,  setStatus]  = useState("idle"); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleBlur   = (e) => setTouched({ ...touched, [e.target.name]: true });

  const isValid =
    form.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.message.trim().length > 9;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("loading");

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        name:       form.name.trim(),
        email:      form.email.trim(),
        subject:    form.subject.trim() || "New message from portfolio",
        message:    form.message.trim(),
        from_name:  "Portfolio Contact Form",
      };

      const res  = await fetch("https://api.web3forms.com/submit", {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTouched({});
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Let's <span className="gradient-text">Work</span> Together
          </h2>
          <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm">
            Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Mail,   label: "Email",    value: OWNER.email    },
              { icon: Phone,  label: "Phone",    value: OWNER.phone    },
              { icon: MapPin, label: "Location", value: OWNER.location },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4
                           hover:border-purple-500/20 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-600/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-[#555] text-xs mb-0.5">{label}</p>
                  <p className="text-[#ccc] text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div className="glass rounded-2xl p-5 border border-green-500/15">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wide">Available</span>
              </div>
              <p className="text-[#888] text-sm">
                Open to freelance projects, internships, and full-time front-end roles. Let's build something great.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-2xl p-7 border border-white/5 space-y-4"
            >
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#666] font-medium mb-1.5 ml-1">Your Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`input-field ${
                      touched.name && form.name.trim().length < 2
                        ? "border-red-500/50 focus:border-red-500"
                        : ""
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#666] font-medium mb-1.5 ml-1">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`input-field ${
                      touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
                        ? "border-red-500/50 focus:border-red-500"
                        : ""
                    }`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs text-[#666] font-medium mb-1.5 ml-1">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry…"
                  className="input-field"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-[#666] font-medium mb-1.5 ml-1">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  placeholder="Tell me about your project…"
                  className={`input-field resize-none ${
                    touched.message && form.message.trim().length < 10
                      ? "border-red-500/50 focus:border-red-500"
                      : ""
                  }`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading" || !isValid}
                whileHover={isValid ? { scale: 1.02 } : {}}
                whileTap={isValid ? { scale: 0.98 } : {}}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold
                            transition-all duration-300 ${
                              isValid
                                ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 cursor-pointer"
                                : "bg-white/5 text-[#555] cursor-not-allowed"
                            }`}
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-green-400 justify-center"
                >
                  <CheckCircle size={15} /> Message sent! I'll be in touch soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400 justify-center"
                >
                  <AlertCircle size={15} /> Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}