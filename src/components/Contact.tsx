import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showForm, setShowForm] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleCancel = () => {
    setShowForm(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowForm(true);
    }, 2000);
  };
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_41z6ggg",
        "template_38yzc5a",
        form.current,
        "6tZJ58Uzl4kKhzj2C",
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* ========== TOP RED CONTACT FORM ========== */}
      <div className="relative flex min-h-[70vh] items-center justify-center px-4 py-16">
        {/* Background Big CONTACT text */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <h1 className="select-none text-[22vw] sm:text-[18vw] lg:text-[15vw] font-black leading-none tracking-tighter text-white opacity-20">
            CONTACT
          </h1>
        </div>
        {/* ===== CENTERED FORM CARD ===== */}
        {showForm && (
          <div className="relative z-10 w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl bg-[#16a34a] px-8 py-10 shadow-2xl shadow-green-900/40 sm:px-12 sm:py-12">
              {/* Cancel Button */}
              <button
                onClick={handleCancel}
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 text-white transition hover:bg-black/40 hover:scale-110"
                aria-label="Close form"
              >
                <X size={18} strokeWidth={2.5} />
              </button>

              {/* Top row */}
              <div className="mb-10 flex flex-wrap items-center justify-between gap-4 pr-10">
                <p className="text-xs font-semibold tracking-[0.2em] text-white/90">
                  REACH ME
                </p>
                <a
                  href="https://www.linkedin.com/in/brinci-nvb-24a973260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  DM ON LINKEDIN
                </a>
              </div>
              {/* Form */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Left fields */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-white">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-white outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-white">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-white outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-white outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  {/* Right - Message */}
                  <div className="flex flex-col">
                    <label className="mb-1 block text-sm font-medium text-white">
                      Type your message here
                    </label>
                    <textarea
                      rows={6}
                      className="w-full flex-1 resize-none border-0 border-b border-white/40 bg-transparent py-2 text-white outline-none focus:border-white"
                    />
                  </div>
                </div>

                {/* Bottom of form */}
                <div className="mt-2 flex flex-col gap-6 pt-2 sm:flex-row sm:items-end sm:justify-between">
                  <label className="flex cursor-pointer items-start gap-3 text-sm text-white/90">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 accent-white"
                    />
                    <span>
                      I give permission to contact me at this email address.
                    </span>
                  </label>

                  <p className="max-w-xs text-right text-xs text-white/70">
                    Your message will be sent directly to my inbox. I typically
                    respond within 24-48 hours.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#e31c13]"
                  >
                    Send Message
                    <span>→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* ========== BOTTOM BLACK FOOTER AREA ========== */}
      <div className="relative bg-black px-6 py-16 sm:px-10 lg:px-16">
        {/* Top info row */}
        <div className="mb-16 grid grid-cols-1 gap-8 text-sm text-white/70 sm:grid-cols-3 ">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="font-medium text-white/90">
              Software Engineering & Web Dev
            </p>
            <p>React js Node js MongoDB</p>
            <p>Full Stack Applications</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.25,
            }}
          >
            <p className="font-medium text-white/90">MCA</p>
            <a
              href="#projects"
              className="mt-1 inline-block underline underline-offset-4 hover:text-white
          relative text-white/80 hover:text-white transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:h-[1px] after:w-full after:bg-white/70
               after:origin-left after:scale-x-100
               hover:after:bg-white"
            >
              View Work
            </a>
          </motion.div>
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <div className="flex items-center justify-end gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <p className="font-medium text-white/90">
                Available for opportunities
              </p>
            </div>
            <p>2026</p>
          </motion.div>
        </div>

        {/* Big Name */}
        <motion.h2
          className="mb-12 text-center text-[12vw] font-black leading-none tracking-tighter text-white sm:text-[10vw] lg:text-[9vw] cursor-default"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          whileHover={{
            scale: 1.02,
            letterSpacing: "-0.04em",
            transition: { duration: 0.4 },
          }}
        >
          BRINCI
        </motion.h2>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
          <a
            href="#contact"
            className="relative text-white/80 hover:text-white transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:h-[1px] after:w-full after:bg-white/70
               after:origin-left after:scale-x-100
               hover:after:bg-white"
          >
            Contact
          </a>
          <a
            href="mailto:brincinvb@gmail.com"
            className="relative text-white/80 hover:text-white transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:h-[1px] after:w-full after:bg-white/70
               after:origin-left after:scale-x-100
               hover:after:bg-white"
          >
            brincinvb@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
