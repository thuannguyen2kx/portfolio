"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function CVMarkdown({ content }: { content: string }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] selection:bg-white/10">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/6"
      >
        <div className="max-w-4xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-[13px] tracking-wide text-white/40 hover:text-white transition-all duration-500"
          >
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="size-4" strokeWidth={1.5} />
              <span className="font-light uppercase tracking-[0.2em]">
                Back
              </span>
            </motion.div>
          </Link>

          <Link
            href="/cv/cv.pdf"
            className="group flex items-center gap-2.5 px-5 py-2.5 border border-white/10 hover:border-white/30 hover:bg-white/2 transition-all duration-500"
          >
            <Download className="size-4" strokeWidth={1.5} />
            <span className="text-[13px] font-light tracking-wide text-white/90">
              Download PDF
            </span>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="h-px bg-linear-to-r from-white/20 via-white/10 to-transparent mb-16 origin-left"
          />

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="cv-content"
          >
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="text-[3.5rem] font-light tracking-[-0.02em] leading-[1.1] mb-12 text-white"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/50 mt-20 mb-8 pb-3 border-b border-white/8"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-xl font-medium tracking-[-0.01em] text-white/90 mb-2 mt-10"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="text-[15px] leading-[1.8] text-white/60 mb-5 font-light"
                    {...props}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-white/80 underline decoration-white/20 hover:decoration-white/60 underline-offset-4 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-medium text-white/90" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-[3px] border-white/15 pl-6 my-8 italic text-[15px] leading-[1.8] text-white/40"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="space-y-3 my-6 ml-0" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li
                    className="text-[15px] leading-[1.8] text-white/60 font-light pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-white/20"
                    {...props}
                  />
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                code: ({ node, inline, ...props }: any) =>
                  inline ? (
                    <code
                      className="px-2 py-0.5 bg-white/6 text-white/80 rounded text-[13px] font-mono"
                      {...props}
                    />
                  ) : (
                    <code
                      className="block px-6 py-4 bg-white/3 border border-white/6 text-white/70 rounded text-[13px] font-mono leading-relaxed my-6"
                      {...props}
                    />
                  ),
              }}
            >
              {content}
            </ReactMarkdown>
          </motion.article>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.19, 1, 0.22, 1] }}
            className="h-px bg-linear-to-r from-transparent via-white/10 to-white/20 mt-16 origin-right"
          />
        </div>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="border-t border-white/6 py-12"
      >
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center justify-between text-[11px] tracking-[0.15em] uppercase">
            <p className="text-white/50 font-light">Nguyen Thanh Thuan</p>
            <p className="text-white/50 font-light">
              Frontend Developer — 2025
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
