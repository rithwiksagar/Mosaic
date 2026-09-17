"use client";

import { useState } from "react";
import { component } from "@/types/component";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function ComponentCard({
  title,
  description,
  videoPath,
  href,
}: component) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={()=> router.push(href)}
      className="relative w-full h-64 rounded-2xl bg-neutral-200/30 border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 overflow-hidden cursor-pointer"
    >
      <motion.div
        animate={{
          height: isHovered ? "calc(100% - 4rem)" : "calc(100% - 1rem)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute top-2 left-2 right-2 overflow-hidden bg-background rounded-xl border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700"
      >
        <video
          src={videoPath}
          autoPlay
          loop
          muted
          playsInline
          className="block h-full w-full rounded-xl object-cover"
        />
      </motion.div>

      <motion.div
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{
          duration: 0.1,
          delay: isHovered ? 0.05 : 0,
          ease: "easeOut",
        }}
        className="absolute left-4 right-2 bottom-2 h-12 flex flex-col justify-center px-1"
      >
        <h6 className="text-sm font-medium text-neutral-600 dark:text-neutral-300 truncate">
          {title}
        </h6>
        <p className="text-xs text-neutral-400 dark:text-neutral-600 truncate">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
