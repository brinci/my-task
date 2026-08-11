"use client";
import  { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Skills = () => {
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), 50);
        observer.disconnect();
      }
    },
    { threshold: 0.15 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, []);
  const programmingSkills = [
    { name: "JavaScript", percent: 90 },
    { name: "TypeScript", percent: 85 },
    { name: "HTML & CSS", percent: 95 },
  ];

  const frontendSkills = [
    { name: "React", percent: 90 },
    { name: "Next.js", percent: 85 },
    { name: "Tailwind CSS", percent: 90 },
  ];

  const backendSkills = [
    { name: "Node.js", percent: 80 },
    { name: "Express.js", percent: 80 },
    { name: "MongoDB", percent: 75 },
  ];

  const apiDatabaseSkills = [
  { name: "REST API Development", percent: 90 },
  { name: "MySQL", percent: 85 },
  { name: "MongoDB", percent: 88 },
  { name: "Firebase", percent: 80 },
];

const toolsSkills = [
  { name: "Git & GitHub", percent: 90 },
  { name: "VS Code", percent: 95 },
  { name: "Postman", percent: 88 },
//   { name: "n8n", percent: 82 },
];

  const SkillBar = ({
    name,
    percent,
  }: {
    name: string;
    percent: number;
  }) => (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-base font-semibold text-white">
          {name}
        </span>

        <span className="text-sm font-bold text-green-400">
          {percent}%
        </span>
      </div>

     <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
        <motion.div
          className="h-full rounded-full bg-green-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: false }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );

  const SkillCard = ({
    title,
    skills,
    index,
  }: {
    title: string;
    skills: { name: string; percent: number }[];
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.12,
      }}
      className="rounded-2xl border border-gray-800 bg-[#111111] p-6 shadow-lg"
    >
      <h3 className="mb-5 text-xl font-extrabold uppercase text-white">
        {title}
      </h3>

      <div className="mb-7 h-px bg-gray-800" />
      {skills.map((skill) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          percent={skill.percent}
          
        />
      ))}
    </motion.div>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen bg-black px-5 py-24 text-white md:px-10 lg:px-20"
    >
      {/* Header */}
     <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto mb-16 max-w-4xl text-center"
      >
        <span className="inline-block rounded-full border border-gray-700 px-7 py-2 text-sm font-semibold text-gray-300">
          Technical Stack
        </span>

        <h2 className="mt-8 text-4xl font-extrabold uppercase md:text-6xl">
          My <span className="text-green-400">Skillset</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-400 md:text-lg">
          A comprehensive overview of my programming languages,
          frameworks, databases, and engineering skills.
        </p>
        </motion.div>

      {/* Cards */}
<div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SkillCard title="Programming Languages" skills={programmingSkills} index={0} />
        <SkillCard title="Frontend Development" skills={frontendSkills} index={1} />
        <SkillCard title="Backend Development" skills={backendSkills} index={2} />
        <SkillCard title="APIs & Databases" skills={apiDatabaseSkills} index={3} />
        <SkillCard title="Tools & Git" skills={toolsSkills} index={4} />
      </div>
    </section>
  );
};

export default Skills;