"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Research",
    description:
      "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
  },
  {
    id: 2,
    title: "Design",
    description:
      "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
  },
  {
    id: 3,
    title: "Develop",
    description:
      "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
  },
  {
    id: 4,
    title: "Deploy",
    description:
      "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.35"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.7,
  });

  const pathDrawn = useTransform(smoothProgress, [0, 0.85], [0, 1]);
  // ===== CARD 01 =====
  const firstCardScale = useTransform(
    smoothProgress,
    [0, 0.22, 0.38],
    [1.05, 0.97, 0.82],
  );
  const firstCardRotate = useTransform(
    smoothProgress,
    [0, 0.22, 0.38],
    [0, -3, -9],
  );
  const firstCardOpacity = useTransform(
    smoothProgress,
    [0, 0.22, 0.38],
    [1, 0.7, 0.22],
  );
  const firstCardGlow = useTransform(
    smoothProgress,
    [0, 0.22, 0.38],
    [1, 0.55, 0.08],
  );
  const firstCardX = useTransform(
    smoothProgress,
    [0, 0.22, 0.38],
    [0, -8, -28],
  );
  const firstCardY = useTransform(
    smoothProgress,
    [0, 0.22, 0.38],
    [0, -8, -36],
  );

  // ===== CARD 02 =====
  const secondCardScale = useTransform(
    smoothProgress,
    [0.15, 0.38, 0.62],
    [0.82, 1.03, 0.84],
  );
  const secondCardRotate = useTransform(
    smoothProgress,
    [0.15, 0.38, 0.62],
    [7, 0, -5],
  );
  const secondCardOpacity = useTransform(
    smoothProgress,
    [0.15, 0.38, 0.62],
    [0.2, 1, 0.28],
  );
  const secondCardGlow = useTransform(
    smoothProgress,
    [0.15, 0.38, 0.62],
    [0.1, 1, 0.1],
  );
  const secondCardX = useTransform(
    smoothProgress,
    [0.15, 0.38, 0.62],
    [16, 0, -14],
  );
  const secondCardY = useTransform(
    smoothProgress,
    [0.15, 0.38, 0.62],
    [36, 0, -22],
  );

  // ===== CARD 03 =====
  const thirdCardScale = useTransform(
    smoothProgress,
    [0.38, 0.62, 0.82, 1],
    [0.84, 0.96, 1.03, 1.05],
  );
  const thirdCardRotate = useTransform(
    smoothProgress,
    [0.38, 0.62, 0.82, 1],
    [7, 2, 0, -2],
  );
  const thirdCardOpacity = useTransform(
    smoothProgress,
    [0.38, 0.62, 0.82, 1],
    [0.08, 0.5, 0.95, 1],
  );
  const thirdCardGlow = useTransform(
    smoothProgress,
    [0.38, 0.62, 0.82, 1],
    [0.06, 0.4, 0.92, 1],
  );
  const thirdCardX = useTransform(
    smoothProgress,
    [0.38, 0.62, 0.82, 1],
    [30, 8, 0, -6],
  );
  const thirdCardY = useTransform(
    smoothProgress,
    [0.38, 0.62, 0.82, 1],
    [64, 16, -2, -10],
  );

  // ===== CARD 04 =====
  const fourthCardScale = useTransform(
    smoothProgress,
    [0.62, 0.82, 1],
    [0.84, 0.98, 1.05],
  );
  const fourthCardRotate = useTransform(
    smoothProgress,
    [0.62, 0.82, 1],
    [5, 0, -2],
  );
  const fourthCardOpacity = useTransform(
    smoothProgress,
    [0.62, 0.82, 1],
    [0.08, 0.75, 1],
  );
  const fourthCardGlow = useTransform(
    smoothProgress,
    [0.62, 0.82, 1],
    [0.06, 0.65, 1],
  );
  const fourthCardX = useTransform(
    smoothProgress,
    [0.62, 0.82, 1],
    [22, 4, -6],
  );
  const fourthCardY = useTransform(
    smoothProgress,
    [0.62, 0.82, 1],
    [72, 18, -10],
  );

  const readyOpacity = useTransform(smoothProgress, [0.82, 1], [0.1, 0.8]);
  // Same path as original
  const pathDefinition =
    "M 365 85 C 300 140, 210 195, 175 270 S 295 380, 365 450 S 240 560, 180 640";

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fafafa] py-24 sm:py-28 lg:py-32"
    >
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* LEFT CONTENT */}
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
            className="max-w-xl"
          >
            {/* Badge - clean green style */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mb-30 inline-flex items-center rounded-full bg-[#005A31] px-9 py-2.5 shadow-sm shadow-[#005A31]/25"
            >
              <span className="text font-bold text-white">My Process</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className=" text-4xl font-black leading-[1.1] tracking-tight text-[#111827] sm:text-5xl lg:text-[3.25rem]"
            >
              Here&apos;s how I
              <br />
              turn ideas into
              <br />
              real-world
              <br />
              applications
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mt-6 max-w-md text-base leading-7 text-gray-500 sm:text-lg"
            >
              I follow a structured, creative, and highly technical approach to
              turn ideas into robust full-stack applications.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE – fixed height container for the cards */}
          <div className="relative mx-auto h-[900px] w-full max-w-[640px] lg:ml-auto">
            {/* Connector */}
            <svg
              className="absolute inset-0 pointer-events-none h-full w-full"
              viewBox="0 0 500 720"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <mask id="dotted-mask">
                  <motion.path
                    d={pathDefinition}
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ pathLength: pathDrawn }}
                  />
                </mask>
              </defs>

              <path
                d={pathDefinition}
                stroke="#111827"
                strokeWidth="3"
                strokeDasharray="1 8"
                strokeLinecap="round"
                opacity={0.5}
                mask="url(#dotted-mask)"
              />
            </svg>

            {/* CARD 01 – same width as the others */}
            <Card
              step={steps[0]}
              className="absolute right-[-60px] top-0 z-40 w-[280px]"
              x={firstCardX}
              y={firstCardY}
              scale={firstCardScale}
              rotate={firstCardRotate}
              opacity={firstCardOpacity}
              glow={firstCardGlow}
            />

            {/* CARD 02 */}
            <Card
              step={steps[1]}
              className="absolute left-[-40px] top-[200px] z-30 w-[280px]"
              x={secondCardX}
              y={secondCardY}
              scale={secondCardScale}
              rotate={secondCardRotate}
              opacity={secondCardOpacity}
              glow={secondCardGlow}
            />

            {/* CARD 03 */}
            <Card
              step={steps[2]}
              className="absolute right-[-100px] top-[380px] z-20 w-[280px]"
              x={thirdCardX}
              y={thirdCardY}
              scale={thirdCardScale}
              rotate={thirdCardRotate}
              opacity={thirdCardOpacity}
              glow={thirdCardGlow}
            />

            {/* CARD 04 */}
            <Card
              step={steps[3]}
              className="absolute left-[5px] top-[600px] z-10 w-[280px]"
              x={fourthCardX}
              y={fourthCardY}
              scale={fourthCardScale}
              rotate={fourthCardRotate}
              opacity={fourthCardOpacity}
              glow={fourthCardGlow}
            />

            {/* Ready to ship */}
            <motion.p
              style={{ opacity: readyOpacity }}
              className="absolute bottom-10 right-4 text-sm font-medium text-gray-500"
            >
              Ready to ship!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================== CARD ==================== */
interface CardProps {
  step: { id: number; title: string; description: string };
  className?: string;
  x: any;
  y: any;
  scale: any;
  rotate: any;
  opacity: any;
  glow: any;
}
const Card = ({
  step,
  className,
  x,
  y,
  scale,
  rotate,
  opacity,
  glow,
}: CardProps) => {
  const numberColor = useTransform(
    glow,
    [0.3, 0.7],
    ["#9ca3af", "rgba(255,255,255,0.75)"],
  );
  const titleColor = useTransform(glow, [0.3, 0.7], ["#111827", "#ffffff"]);
  const descColor = useTransform(
    glow,
    [0.3, 0.7],
    ["#4b5563", "rgba(255,255,255,0.9)"],
  );
  const outerBg = useTransform(glow, [0.3, 0.7], ["#27aa30", "#00703D"]);
  const innerBg = useTransform(glow, [0.3, 0.7], ["#fafafa", "#00703D"]);
  const shadow = useTransform(
    glow,
    [0, 1],
    [
      "0 10px 30px -5px rgba(0,0,0,0.08)",
      "0 20px 50px -12px rgba(49, 184, 51, 0.45), 0 0 0 1px rgba(239, 35, 35, 0.15)",
    ],
  );

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        rotate,
        opacity,
      }}
      className={className}
      whileHover="hovered"
      initial="rest"
      variants={{
        rest: {},
        hovered: {},
      }}
    >
      {/* continuous soft float */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4.1 + step.id * 0.18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: step.id * 0.25,
        }}
      >
        <motion.div
          style={{
            backgroundColor: outerBg,
            boxShadow: shadow,
          }}
          variants={{
            rest: {},
            hovered: {
              backgroundColor: "#00703D",
              boxShadow:
                "0 22px 50px -12px rgba(239, 35, 35, 0.45), 0 0 0 1px rgba(239, 35, 35, 0.12)",
            },
          }}
          transition={{ duration: 0.3 }}
          className="relative rounded-[24px] p-[10px] border border-gray-100"
        >
          {/* pin */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-100 border border-gray-300 shadow-inner flex items-center justify-center z-50">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          </div>

          <motion.div
            style={{ backgroundColor: innerBg }}
            variants={{
              rest: {},
              hovered: { backgroundColor: "#00703D" },
            }}
            transition={{ duration: 0.3 }}
            className="rounded-[18px] p-6 pt-8 flex flex-col text-left"
          >
            <motion.span
              style={{ color: numberColor }}
              variants={{
                rest: {},
                hovered: { color: "rgba(255,255,255,0.75)" },
              }}
              transition={{ duration: 0.3 }}
              className="font-serif italic font-bold text-xl tracking-wide mb-1"
            >
              0{step.id}
            </motion.span>
            <motion.h3
              style={{ color: titleColor }}
              variants={{
                rest: {},
                hovered: { color: "#ffffff" },
              }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-extrabold tracking-tight mb-3"
            >
              {step.title}
            </motion.h3>
            <motion.p
              style={{ color: descColor }}
              variants={{
                rest: {},
                hovered: { color: "rgba(255,255,255,0.9)" },
              }}
              transition={{ duration: 0.3 }}
              className="text-[13.5px] font-medium leading-relaxed"
            >
              {step.description}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Process;
