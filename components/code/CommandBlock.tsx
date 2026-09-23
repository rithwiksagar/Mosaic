"use client";

import type { IconType } from "react-icons";
import { CgNpm } from "react-icons/cg";
import { LiaYarn } from "react-icons/lia";
import { SiBun, SiPnpm } from "react-icons/si";
import { useState } from "react";
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
  const [selectedCommand, setSelectedCommand] = useState(
    packageManagers[0].command(command),
  );

  return (
    <div className="flex flex-col h-36 w-full bg-neutral-200/70 dark:bg-neutral-900 rounded-2xl mt-4">
      <div className="flex items-center gap-3 pt-4 pb-2 px-4">
        {packageManagers.map(
          ({ name, icon: Icon, color, command: getCommand }) => (
            <button
              key={name}
              type="button"
              className="flex items-center gap-1"
              onClick={() => setSelectedCommand(getCommand(command))}
            >
              <Icon color={color} />
              <span className="dark:text-neutral-400">{name}</span>
            </button>
          ),
        )}
      </div>
      <div className="bg-white dark:bg-neutral-950 flex items-center justify-between flex-1 m-1.5 px-4 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="text-neutral-600 font-mono dark:text-neutral-400">
          {selectedCommand}
        </div>
        <CopyButton copy={selectedCommand} />
      </div>
    </div>
  );
}
