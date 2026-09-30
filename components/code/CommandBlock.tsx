"use client";

import type { IconType } from "react-icons";
import { CgNpm } from "react-icons/cg";
import { LiaYarn } from "react-icons/lia";
import { SiBun, SiPnpm } from "react-icons/si";
import { useState } from "react";
import { motion } from "motion/react";
import { CopyButton } from "./CopyButton";

const packageManagers: {
  name: string;
  icon: IconType;
  color: string;
  command: (component: string) => string;
}[] = [
  {
    name: "npm",
    icon: CgNpm,
    color: "#CB3837",
    command: (component) => `npx shadcn@latest add ${component}`,
  },
  {
    name: "pnpm",
    icon: SiPnpm,
    color: "#F69220",
    command: (component) => `pnpm dlx shadcn@latest add ${component}`,
  },
  {
    name: "Bun",
    icon: SiBun,
    color: "#FBF0DF",
    command: (component) => `bunx --bun shadcn@latest add ${component}`,
  },
  {
    name: "Yarn",
    icon: LiaYarn,
    color: "#2C8EBB",
    command: (component) => `yarn dlx shadcn@latest add ${component}`,
  },
];

export default function CommandBlock({ command }: { command: string }) {
  const [currentPM, setCurrentPM] = useState("npm");
  const [selectedCommand, setSelectedCommand] = useState(
    packageManagers[0].command(command),
  );

  return (
    <div className="mt-4 flex h-28 w-full flex-col rounded-2xl bg-neutral-200/30 dark:bg-neutral-900 sm:h-36">
      <div className="flex items-center justify-between px-3 pb-2 pt-3 text-xs sm:px-5 sm:pt-4 sm:text-sm">
        <div className="flex items-center gap-2 sm:gap-3.5">
          {packageManagers.map(
            ({ name, icon: Icon, color, command: getCommand }) => (
              <button
                key={name}
                type="button"
                className="relative flex shrink-0 items-center gap-1 pb-1 cursor-pointer"
                onClick={() => {
                  setCurrentPM(name);
                  setSelectedCommand(getCommand(command));
                }}
              >
                <Icon color={color} />
                <span className="dark:text-neutral-400">{name}</span>
                {currentPM === name && (
                  <motion.div
                    layoutId="command-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-neutral-900 dark:bg-neutral-100"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ),
          )}
        </div>
        <CopyButton copy={selectedCommand} className="shrink-0" />
      </div>
      <div className="m-1.5 flex min-w-0 flex-1 items-center justify-between rounded-xl bg-white px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-neutral-950 sm:px-4">
        <div className="min-w-0 overflow-x-auto [scrollbar-width:none] whitespace-nowrap font-mono text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
          {selectedCommand}
        </div>
      </div>
    </div>
  );
}
