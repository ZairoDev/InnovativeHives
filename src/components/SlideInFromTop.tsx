"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInFromTopProps {
  children: ReactNode;
}

const SlideInFromTop: React.FC<SlideInFromTopProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromTop;
