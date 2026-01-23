"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { LoadingScreen } from "./loading-screen";

interface PortfolioWrapperProps {
  children: React.ReactNode;
}

export function PortfolioWrapper({ children }: PortfolioWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
