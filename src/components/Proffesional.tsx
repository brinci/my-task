import { motion } from "framer-motion";
const Proffessional = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#f8f9fc] text-slate-900">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.4]"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-10 inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-lg text-slate-600 shadow-sm"
            >
              Core Competencies
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mb-4 text-4xl md:text-5xl font-black text-gray-800 uppercase"
            >
              Proffessional soft skills
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="mx-auto mb-16 max-w-2xl text-base text-slate-500 sm:text-lg"
            >
              Essential traits that make me an effective engineer, coordinator,
              <br className="hidden sm:block" />
              and communicator.
            </motion.p>

            {/* Skills Cards */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {/* Communication */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="group rounded-2xl bg-white p-8 shadow-sm border border-slate-100 text-left 
                          transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-xl hover:border-violet-200"
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 
                          transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-100"
                >
                  <svg
                    className="h-7 w-7 text-violet-400 group-hover:text-violet-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-wide text-slate-900">
                  COMMUNICATION
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-500">
                  Public Speaking, Anchoring, and Team Collaboration in both
                  technical and non-technical settings.
                </p>
              </motion.div>

              {/* Leadership / Coordination */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="group rounded-2xl bg-white p-8 shadow-sm border border-slate-100 text-left 
                          transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-xl hover:border-amber-200"
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 
                          transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-100"
                >
                  <svg
                    className="h-7 w-7 text-amber-400 group-hover:text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-wide text-slate-900">
                  LEADERSHIP
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-500">
                  Team Coordination, event hosting, and managing task completion
                  with team synergy.
                </p>
              </motion.div>

              {/* Adaptability */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="group rounded-2xl bg-white p-8 shadow-sm border border-slate-100 text-left 
                          transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-xl hover:border-yellow-200"
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-50 
                          transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-100"
                >
                  <svg
                    className="h-7 w-7 text-yellow-400 group-hover:text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.4 7.2L22 9.3l-5.8 4.6 2.2 7.1L12 16.9l-6.4 4.1 2.2-7.1L2 9.3l7.6-.1L12 2z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-wide text-slate-900">
                  ADAPTABILITY
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-500">
                  Quick to pick up new frameworks, tools, and adapt to changing
                  project requirements.
                </p>
              </motion.div>

              {/* Problem Solving */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="group rounded-2xl bg-white p-8 shadow-sm border border-slate-100 text-left 
                          transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-xl hover:border-emerald-200"
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 
                          transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-100"
                >
                  <svg
                    className="h-7 w-7 text-emerald-400 group-hover:text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-wide text-slate-900">
                  PROBLEM SOLVING
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-500">
                  Proactive problem solving, analyzing challenges, and designing
                  efficient solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proffessional;
