"use client";

import { cn } from "@/lib/utils";
import { CircleCheck, Copy } from "lucide-react";
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
      className={cn(className)}
    >
      {!copied && (
        <Copy className="p-2 size-8 text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 cursor-pointer" />
      )}
      {copied && (
        <CircleCheck className="p-2 size-8 text-neutral-600 dark:text-neutral-300 cursor-pointer" />
      )}
    </motion.button>
  );
}
