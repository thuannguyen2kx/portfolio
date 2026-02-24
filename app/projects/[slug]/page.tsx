"use client";

import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = DATA.projects.find((p) => p.slug === slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] selection:bg-white/10 px-10">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-6"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="flex items-center gap-3 hover:opacity-70 transition-opacity group"
            >
              <Icons.arrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium tracking-wide">Back</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href={project.links.github}
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
              >
                <Icons.github className="h-4 w-4" />
              </Link>
              <Link
                href={project.links.live}
                target="_blank"
                className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 transition-all flex items-center gap-2"
              >
                Live
                <Icons.externalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/10">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest">
                {project.status}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none">
              {project.title}
            </h1>
            <div className="h-px w-32 bg-white mx-auto mb-8" />
            <p className="text-2xl md:text-3xl font-light mb-6 tracking-wide">
              {project.tagline}
            </p>
            <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-5xl mx-auto"
          >
            {[
              { label: "Role", value: project.role },
              { label: "Duration", value: project.duration },
              { label: "Year", value: project.dates },
              { label: "Stack", value: `${project.technologies.length} Tools` },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-black p-6 md:p-8 text-center hover:bg-white/5 transition-colors"
              >
                <div className="text-xs text-white/40 mb-2 uppercase tracking-wider font-mono">
                  {item.label}
                </div>
                <div className="text-lg md:text-xl font-bold">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-8 border border-white/5 pointer-events-none" />

            <div className="relative border border-white/20 overflow-hidden">
              <div className="relative aspect-video bg-white/5 overflow-hidden">
                <Image
                  src={project.images[currentImage]}
                  alt={project.title}
                  fill
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  loading={currentImage === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prevImage}
                  className="w-14 h-14 border border-white/20 bg-black/50 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <Icons.chevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-14 h-14 border border-white/20 bg-black/50 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <Icons.chevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-xl border border-white/20 font-mono text-sm">
                {String(currentImage + 1).padStart(2, "0")} /{" "}
                {String(project.images.length).padStart(2, "0")}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {project.images.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`relative flex-1 aspect-video border transition-all overflow-hidden ${
                    i === currentImage
                      ? "border-white"
                      : "border-white/20 opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image
                    fill
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} thumbnail ${i + 1}`}
                    className="object-cover"
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 150px"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-3 gap-16"
          >
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-4">
                Overview
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-2xl md:text-2xl font-light leading-tight mb-8 text-white/90 whitespace-pre-line">
                {project.longDescription}
              </p>
              <div className="h-px bg-white/10 my-12" />
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6"
              >
                {project.technicalHighlights.map((tech, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-4">
                    <div className="w-8 h-8 border border-white/20 flex items-center justify-center shrink-0 font-mono text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-white/50 leading-relaxed">{tech}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              Key Features
            </h2>
            <p className="text-xl text-white/40">
              What makes this project special
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10"
          >
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-black p-10 md:p-12 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icons.code className="w-10 h-10 opacity-30 group-hover:opacity-60 transition-opacity" />
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-black mb-1">
                      {feature.stats}
                    </div>
                    <div className="text-xs text-white/40 font-mono uppercase tracking-wider">
                      {feature.label}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-4xl font-black mb-4">Technology</h2>
            <p className="text-xl text-white/40">Tools & frameworks used</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10"
          >
            {project.technologies.map((tech, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="aspect-square bg-black hover:bg-white/5 transition-colors group"
              >
                <div className="h-full flex flex-col items-center justify-center gap-4 p-6">
                  <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                    <tech.icon />
                  </div>
                  <div className="text-sm font-semibold text-center">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 p-10 md:p-16"
          >
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-black mb-6">
                Get In Touch
              </h2>
              <p className="text-xl md:text-2xl text-white/40">
                Interested in working together?
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 pb-12 border-b border-white/10">
              <div className="relative w-28 h-28 border border-white/20 overflow-hidden">
                <Image
                  src={project.author.avatar || "/placeholder.svg"}
                  alt={project.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {project.author.name}
                </h3>
                <p className="text-white/50 text-lg mb-4">
                  {project.author.role}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/40">
                  <span>{project.author.email}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{project.author.phone}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{project.author.location}</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href={`mailto:${project.author.email}`}
                className="px-8 py-5 bg-white text-black font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-3 group"
              >
                <Icons.email className="w-5 h-5" />
                Email me
                <Icons.externalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href={project.author.github}
                target="_blank"
                className="px-8 py-5 border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-3 font-semibold"
              >
                <Icons.github className="w-5 h-5" />
                GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
            <p>
              &copy; {new Date().getFullYear()} {project.author.name}
            </p>
            <div className="flex gap-8 font-mono">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-white transition-colors"
              >
                Back to Top
              </button>
              <Link
                href={project.author.github}
                target="_blank"
                className="hover:text-white transition-colors"
              >
                Source Code
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
