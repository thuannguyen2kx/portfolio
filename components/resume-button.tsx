"use client";
import { Icons } from "@/components/icons";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";

export default function ResumeButton() {
  // Mouse tracking for the magnetic effect & spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="fixed z-50 bottom-8 right-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Link
        href="/cv"
        onMouseMove={handleMouseMove}
        className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/2 px-6 py-3 backdrop-blur-md transition-all duration-500 hover:border-white/40"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                350px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.1),
                transparent 80%
              )
            `,
          }}
        />

        <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />

        <div className="relative flex items-center gap-3">
          <div className="relative">
            <Icons.fileUser
              className="size-4 text-white/40 transition-transform duration-500 group-hover:scale-110 group-hover:text-white"
              strokeWidth={1.5}
            />
            <span className="absolute -right-0.5 -top-0.5 flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/20"></span>
            </span>
          </div>

          <span className="text-[12px] font-light uppercase tracking-[0.3em] text-white/50 transition-colors duration-500 group-hover:text-white">
            Resume
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
