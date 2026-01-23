"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);

  const name = "NguyenThanhThuan";
  const letters = name.split("");

  useEffect(() => {
    // Total animation time: letter animations + pause + exit
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onLoadingComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          {/* Animated line above name */}
          <motion.div
            className="absolute top-1/2 -translate-y-16"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="h-px w-32 bg-foreground origin-left" />
          </motion.div>
          <motion.p
            className="absolute top-1/2 translate-y-24 text-xs tracking-[0.3em] text-foreground/60 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
          >
            Building clean and intuitive web interfaces
          </motion.p>

          {/* Name with staggered letter animation */}
          <div className="flex overflow-hidden">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-foreground"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.65, 0, 0.35, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Animated line below name */}
          <motion.div
            className="absolute top-1/2 translate-y-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="h-px w-32 bg-foreground origin-right" />
          </motion.div>

          {/* Loading indicator */}
          <motion.div
            className="absolute bottom-16 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <motion.div
              className="h-1 w-1 rounded-full bg-foreground"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0.2,
              }}
            />
            <motion.div
              className="h-1 w-1 rounded-full bg-foreground"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0.2,
                delay: 0.2,
              }}
            />
            <motion.div
              className="h-1 w-1 rounded-full bg-foreground"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0.2,
                delay: 0.4,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
