"use client";
import { AnimatedItem, AnimatedSection } from "@/components/animated-section";
import { Icons } from "@/components/icons";
import { Marquee } from "@/components/marquee";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortfolioWrapper } from "@/components/portfolio-wrapper";
import ResumeButton from "@/components/resume-button";
export default function Page() {
  return (
    <PortfolioWrapper>
      <main className="min-h-dvh bg-[#0A0A0A] text-[#EDEDED] selection:bg-white/10 relative">
        <ResumeButton />
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 w-full max-w-2xl">
          <div className="backdrop-blur-2xl bg-white/2 border-white/2 border rounded-full px-6 py-3 shadow-2xl">
            <div className="flex justify-between items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />

              <div className="hidden md:flex items-center gap-1 ">
                {["Work", "Projects", "Skills"].map((item, i) => (
                  <Link
                    href={`#${item.toLocaleLowerCase()}`}
                    key={i}
                    className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-all  "
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href={`/story`}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-all  "
                >
                  Story
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={DATA.contact.social.github.url}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-all"
                >
                  <Icons.github className="w-4 h-4" />
                </Link>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-all"
                >
                  <Icons.email className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <AnimatedSection
          id="about"
          className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              {/* Left - Text Content */}
              <div className="space-y-8 col-span-1 lg:col-span-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 border border-white/5">
                  <Icons.circle className="size-2 fill-emerald-400 text-emerald-400 animate-pulse" />
                  <span className="text-xs text-gray-400">
                    Available for new projects
                  </span>
                </div>

                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-balance"
                  >
                    {DATA.name}
                  </motion.h1>
                  <p className="text-xl text-gray-500 font-light max-w-lg">
                    {DATA.title}
                  </p>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl whitespace-pre-line">
                  {DATA.summary}
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href="#contact"
                    className="group px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-all flex items-center gap-2"
                  >
                    Start a conversation
                    <Icons.arrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate--y-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="#work"
                    className="group px-6 py-3 border  border-white/10 hover:bg-white/3 rounded-full transition-all"
                  >
                    See my work
                  </Link>
                </div>

                <div className="flex items-center gap-4 pt-6">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
                  <div className="flex gap-4">
                    <Link
                      href={DATA.contact.social.github.url}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all"
                    >
                      <Icons.github className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`mailto:${DATA.contact.email}`}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all"
                    >
                      <Icons.email className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
              </div>
              {/* Right - Avatar with 3D Effect */}
              <div className="relative flex justify-center md:justify-end col-span-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-linear-to-r from-white via-gray-400 to-white opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-82 h-82 md:w-96 md:h-96">
                    <div className="absolute inset-0 border-2 border-white/20"></div>
                    <div className="absolute inset-4 overflow-hidden">
                      <Image
                        src={DATA.avatarUrl}
                        alt={DATA.name}
                        width={328}
                        height={328}
                        className="w-full h-full object-cover  transition-all duration-700"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-white/30"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-white/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="work" className="py-32">
          <div className="max-w-6xl w-full mx-auto px-6">
            <div className="mb-16">
              <span className="text-sm text-gray-400 uppercase tracking-widest">
                Experience
              </span>
              <h2 className="text-5xl font-bold mt-4">
                Where I&apos;ve Workded
              </h2>
            </div>

            <div className="space-y-16">
              {DATA.work.map((job, i) => (
                <AnimatedItem key={i} delay={i * 0.1}>
                  <div
                    key={i}
                    className="border-l-2 border-white/20 pl-8 relative group"
                  >
                    <div className="absolute -left-2.25 top-0 w-4 h-4 bg-white rounded-full group-hover:scale-150 transition-transform"></div>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          {job.title}
                          <p className="text-xl text-gray-400">{job.company}</p>
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 md:m-0">
                        <Icons.calendar className="w-4 h-4" />
                        <span>
                          {job.start} - {job.end}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 max-w-3xl whitespace-pre-line">
                      {job.description}
                    </p>

                    <div className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          <Icons.chevronRight className="w-5 h-5 mt-0.5 text-gray-300 shrink-0" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="py-32">
          <div className="max-w-6xl px-6 mx-auto">
            <div className="mb-16">
              <span className="text-sm uppercase tracking-widest text-gray-400">
                Skills & Technologies
              </span>
              <h2 className="text-5xl font-bold mt-4">What I Work With</h2>
            </div>
            <div className="relative flex h-96  w-full flex-row items-center justify-center gap-4 overflow-hidden perspective-near">
              <div
                className="flex flex-row items-center w-full gap-4"
                style={{
                  transform:
                    "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
                }}
              >
                <Marquee
                  pauseOnHover
                  vertical
                  className="[--duration:20s] flex-1"
                >
                  {DATA.skills
                    .slice(0, DATA.skills.length / 2)
                    .map((skill, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center p-4 gap-2 "
                      >
                        <skill.icon />
                        <span className="text-2xl">{skill.name}</span>
                      </div>
                    ))}
                </Marquee>
                <Marquee
                  pauseOnHover
                  vertical
                  className="[--duration:20s] flex-1"
                >
                  {DATA.skills.slice(DATA.skills.length / 2).map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center p-4 gap-2 "
                    >
                      <skill.icon />
                      <span className="text-2xl">{skill.name}</span>
                    </div>
                  ))}
                </Marquee>
                <Marquee
                  pauseOnHover
                  vertical
                  className="[--duration:20s] flex-1"
                >
                  {DATA.skills
                    .slice(0, DATA.skills.length / 2)
                    .map((skill, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-2 p-4 "
                      >
                        <skill.icon />
                        <span className="text-2xl">{skill.name}</span>
                      </div>
                    ))}
                </Marquee>
                <Marquee
                  pauseOnHover
                  vertical
                  className="[--duration:20s] flex-1"
                >
                  {DATA.skills.slice(DATA.skills.length / 2).map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center p-4 gap-2 "
                    >
                      <skill.icon />
                      <span className="text-2xl">{skill.name}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id={"projects"} className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <span className="text-sm uppercase tracking-widest text-gray-400">
                Featured Projects
              </span>
              <h2 className="text-5xl font-bold mt-4">
                Some of my recent work
              </h2>
            </div>
            <div className="space-y-24">
              {DATA.projects.map((project, i) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group grid lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden aspect-video"
                    >
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        fill
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                    </motion.div>
                  </div>

                  <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                    <div>
                      <span className="text-sm font-mono text-muted-foreground">
                        {project.dates}
                      </span>
                      <h3 className="text-3xl font-bold mt-2">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.technicalHighlights.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span className="w-1 h-1 bg-foreground rounded-full mt-2 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-mono border border-white/10 bg-white/20"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group/link"
                      >
                        <Icons.externalLink className="size-4" />
                        <span>Live Demo</span>

                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 4 }}
                        >
                          →
                        </motion.span>
                      </Link>
                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group/link"
                        >
                          <Icons.github className="size-4" />
                          <span>Source Code</span>
                          <motion.span
                            className="inline-block"
                            whileHover={{ x: 4 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-white/2 border border-white/5 p-4 lg:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent"></div>

              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 border border-white/5 mb-4">
                  <Icons.sparkle className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">
                    Let&apos;s collaborate
                  </span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                  Ready to start
                  <br />
                  your next project?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="text-sm group px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Icons.email className="w-5 h-5" />
                    {DATA.contact.email}
                    <Icons.arrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <Link
                    href={`tel:${DATA.contact.tel}`}
                    className="text-sm px-8 py-4 rounded-full border border-white/10 hover:bg-white/3 transition-all flex items-center justify-center gap-2"
                  >
                    <Icons.phone className="w-5 h-5" />
                    {DATA.contact.tel}
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 pt-8">
                  <Icons.mappin className="w-4 h-4" />
                  <span>{DATA.location}</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-gray-600">
                © 2025 {DATA.name}. Designed & Built with passion.
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="#work"
                  className="text-sm text-gray-600 hover:text-white transition-colors"
                >
                  Work
                </Link>
                <Link
                  href="#project"
                  className="text-sm text-gray-600 hover:text-white transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href={"#skills"}
                  className="text-sm text-gray-600 hover:text-white transition-colors"
                >
                  Skills
                </Link>
                <Link
                  href={DATA.contact.social.github.url}
                  className="text-sm text-gray-600 hover:text-white transition-colors"
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </PortfolioWrapper>
  );
}
