"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const storyParagraphs = [
  {
    title: "The Beginning",
    content:
      "I started my journey in frontend development through self-learning and building personal projects. By consistently practicing and applying what I learned, I gradually built a solid foundation in modern frontend development.",
    icon: "01",
  },
  {
    title: "Professional Experience",
    content:
      "I have experience working as a Frontend Developer at two companies, where I contributed to real-world web applications and collaborated with team members to deliver features.",
    icon: "02",
  },
  {
    title: "Tech Stack",
    content:
      "My main stack includes React, Next.js, and TypeScript, with a focus on building reusable components, maintaining clean UI structure, and improving performance.",
    icon: "03",
  },
  {
    title: "Looking Forward",
    content:
      "I am currently applying for a Junior Frontend Developer position, aiming to further strengthen my skills, learn from experienced engineers, and grow into a strong frontend engineer over time.",
    icon: "04",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
          >
            <span className="flex items-center justify-center size-8 border border-white/20 group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300">
              <ArrowLeft className="size-4" />
            </span>
            <span className="tracking-wide">Back</span>
          </Link>
          <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">
            Story
          </span>
        </div>
      </motion.header>

      {/* Content */}
      <main className="pt-36 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-linear-to-r from-white to-transparent w-32 mb-10 origin-left"
            />
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
              >
                My Journey
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/50 text-lg mt-6 max-w-2xl"
            >
              From self-learner to frontend developer — a story of persistence
              and growth.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Animated vertical line */}
            <motion.div
              variants={lineVariants}
              className="absolute left-1.75 top-4 bottom-4 w-px bg-linear-to-b from-white/40 via-white/20 to-transparent origin-top"
            />

            {storyParagraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12 pb-16 last:pb-0 group"
              >
                {/* Dot with pulse effect */}
                <div className="absolute left-0 top-2">
                  <div className="size-3.5 border-2 border-white/60 bg-black rounded-full group-hover:border-white group-hover:bg-white transition-all duration-500" />
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 size-3.5 border border-white/30 rounded-full"
                  />
                </div>

                {/* Card */}
                <div className="p-6 border border-white/10 bg-white/2 hover:bg-white/5 hover:border-white/20 transition-all duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-xs text-white/30 tracking-wider">
                      {paragraph.icon}
                    </span>
                    <div className="h-px flex-1 bg-white/10 mx-4 mt-2" />
                  </div>

                  <h2 className="text-xl font-medium mb-4 tracking-wide">
                    {paragraph.title}
                  </h2>

                  <p className="text-white/60 leading-relaxed text-[15px]">
                    {paragraph.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-32 relative"
          >
            <div className="absolute inset-0 border border-white/10" />
            <div className="absolute -top-3 left-8 bg-black px-4">
              <span className="font-mono text-xs text-white/30 tracking-[0.3em] uppercase">
                Quote
              </span>
            </div>
            <blockquote className="p-10 md:p-12">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90">
                &quot;The journey of a thousand miles begins with a single
                step.&quot;
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <div className="h-px w-8 bg-white/30" />
                <cite className="text-white/40 not-italic text-sm tracking-wide">
                  Lao Tzu
                </cite>
              </footer>
            </blockquote>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-24 text-center"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
            >
              <span>Let&apos;s Connect</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="border-t border-white/10 py-10"
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <p className="text-sm text-white/40 font-mono tracking-wide">
            NguyenThanhThuan
          </p>
          <p className="text-sm text-white/30">Frontend Developer</p>
        </div>
      </motion.footer>
    </div>
  );
}
