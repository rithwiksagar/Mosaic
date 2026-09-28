"use client";

import { cn } from "@/lib/utils";
import { CircleCheck, Copy } from "lucide";
import { MorphIcon } from "morphicons/react";
import { easeOut, motion } from "motion/react";
import { useState } from "react";

export function CopyButton({
  copy,
  className,
}: {
  copy: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
        opacity: 0,
        filter: "blur(4px)",
      }}
      transition={{
        duration: 0.2,
        ease: easeOut,
      }}
      onClick={async () => {
        await navigator.clipboard.writeText(copy);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      }}
      className={cn(className, "cursor-pointer text-neutral-500 dark:text-neutral-400")}
    >
      <MorphIcon icon={copied ? CircleCheck : Copy} className="size-4.5"/>
    </motion.button>
  );
}
