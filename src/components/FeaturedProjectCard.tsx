import { FaGithub, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      image: "../Images/profile-pic.png",
      description:
        "Modern developer portfolio built with Next.js and Tailwind CSS.",
      demo: "https://your-demo-link.com",
      github: "https://github.com/brinci",
      tech: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
      title: "Dr Joe Dispenza",
      image: "/Images/joe_dispenz.png",
      description:
        "Meditation and personal growth platform with guided courses.",
      demo: "https://drjoedispenza.com/",
      github: "https://github.com/brinci",
      tech: ["MongoDB", "Firebase", "Node.js"],
    },
    {
      title: "NAARA PROJECT",
      image: "../Images/naara-pic.png",
      description: "AI-powered platform focused on intelligent automation.",
      demo: "https://catalog.archives.gov/",
      github: "https://github.com/brinci",
      tech: ["React", "Tailwind", "TypeScript"],
    },
    {
      title: "Jack Henry Project",
      image: "/Images/jackHentry.png",
      description:
        "Financial technology platform for modern banking solutions.",
      demo: "https://www.jackhenry.com/",
      github: "https://github.com/brinci",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "BMT PROJECT",
      image: "/Images/BMT_img.jpg",
      description:
        "BMT is a Business Management Tool developed to manage organizational operations such as finance, procurement, project management, inventory, and HR activities. ",
      demo: "https://your-demo-link.com",
      github: "https://github.com/brinci",
      tech: ["React", "Tailwind,css"],
    },
  ];

  return (
    <div>
      <section
        id="projects"
        className="relative min-h-screen bg-[#070707] px-6 py-24 text-white sm:px-10 lg:px-16"
      >
        {/* subtle grid background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ========== HEADER ========== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16 max-w-3xl space-y-6"
          >
            {/* Featured Projects pill */}
            <span className="inline-flex items-center rounded-full border border-green-500/60 bg-white/5 px-5 py-2.5 text-sm text-bold transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-500">
              Featured Projects
            </span>

            {/* Main heading */}
            <h2 className="text-5xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Work that speaks
              <br />
              for itself
            </h2>

            {/* Subtitle */}
            <p className="max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
              A selection of projects that showcase my expertise in full-stack
              development and modern architecture.
            </p>
          </motion.div>

          {/* ========== FLAGSHIP PROJECT CARD ========== */}
          <article className="group relative overflow-hidden rounded-[28px] border border-green-500/30 bg-[#111111] transition-all duration-500 hover:border-green-500/60 hover:shadow-[0_0_50px_-10px_rgba(34,197,94,0.4)]">
            <div className="pointer-events-none absolute inset-0 rounded-[28px]">
              <div className="absolute inset-0 rounded-[28px] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_60deg,#22c55e_120deg,transparent_180deg,transparent_360deg)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-[1.5px] rounded-[26.5px] bg-[#111111]" />
            </div>

            {/* soft red glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.08),transparent_50%)]" />
            {/* top edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />

            <div className="relative z-10 p-8 sm:p-10 lg:p-12">
              {/* Flagship badge */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-400">
                  <span className="text-sm">🚀</span>
                  Flagship Project
                </span>
              </div>

              {/* Title row */}
              <div className="mb-6 flex items-baseline gap-4">
                <span className="text-5xl font-bold tracking-tighter text-white/15 sm:text-6xl">
                  01
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Dr Joe Dispenza
                </h3>
              </div>

              {/* Description */}
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                Meditation and personal growth platform with guided courses.
              </p>

              {/* Tech stack pills */}
              <div className="mb-10 flex flex-wrap gap-2.5">
                {["React.js", "JavaScript", "HTML5", "CSS3", "Next.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  <FaGithub className="h-5 w-5" />
                  Frontend GitHub
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  <FaGithub className="h-5 w-5" />
                  Backend GitHub
                </a>
                <a
                  href="https://drjoedispenza.com/"
                  className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-400"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </article>

          <div className="mt-16 flex justify-center">
            <a
              href="https://github.com/brinci"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-transparent px-10 py-4.5 text-lg font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              {/* GitHub icon */}
              <FaGithub className="h-6 w-6" />
              Explore All My Repositories
              {/* Arrow */}
              <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </section>
      {/* Next section */}
      <section className="relative min-h-screen bg-[#070707] px-6 py-24 text-white sm:px-10 lg:px-16">
        {/* subtle grid background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16 max-w-3xl space-y-6"
          >
            <span className="inline-flex items-center rounded-full border border-gray/10 bg-white/5 px-5 py-2.5 text-base font-bold text-gray transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400">
              Professional Projects
            </span>
            <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              A selection of enterprise applications and client projects
              {/* I contributed to as a Frontend/Full Stack Developer. */}
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
              Beyond coding, I craft visual stories with premium editing, color
              grading, and creative pacing.
            </p>
          </motion.div>
          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-all duration-300 hover:border-green-500/40 hover:bg-[#0f1a14]"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-15">
                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-400">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-white/50">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {/* Live Demo */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-400"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Demo
                    </a>

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative min-h-screen overflow-hidden bg-[#e31c13] bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/Images/back-pic.png')" }} 
      >
        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 pt-36 sm:pt-44 pb-20">
          <div className="mx-auto w-full max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-5 text-5xl font-black tracking-tight text-black sm:text-6xl lg:text-7xl"
            >
              EXPERIENCE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mx-auto mb-14 max-w-2xl text-base text-white/90 sm:text-lg"
            >
              A summary of my personal projects and professional roles
              <br />
              where I design and build responsive applications.
            </motion.p>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mx-auto max-w-2xl rounded-3xl bg-black/20 p-8 sm:p-10 text-left hover:shadow-2xl backdrop-blur-sm hover:shadow-green-500/30 transition-shadow duration-300"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-medium tracking-wider text-black-200">
                  AUGUST 2024 – PRESENT
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  FULL-TIME
                </span>
              </div>

              <h2 className="mb-1 text-2xl font-bold text-white sm:text-3xl">
                React Developer
              </h2>
              <p className="mb-6 text-sm font-medium text-black-200">
                ALTHI SOLUTIONS.
              </p>

              <p className="mb-8 text-base leading-relaxed text-black-100">
                Built and styled responsive web pages using HTML, CSS, and
                JavaScript. Worked with the Django framework to develop and
                integrate backend functionality for web applications. Applied
                frontend and backend fundamentals to strengthen full-stack
                development workflow skills.
              </p>

              <div className="mb-6 h-px bg-red-400/40" />

              <p className="mb-3 text-xs font-semibold tracking-widest text-red-200">
                TECHNOLOGIES:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React Js",
                  "TypeScript",
                  "Next Js",
                  "Node Js",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-red-400/20 px-4 py-1.5 text-sm font-medium text-red-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProjects;
