import { HugeiconsIcon } from "@hugeicons/react";
import CodeBlock from "../code/CodeBlock";
import { CopyButton } from "./CopyButton";
import { DocumentCodeIcon } from "@hugeicons/core-free-icons";

const code = `import { twMerge } from 'tailwind-merge';
import clsx, { type ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};`;

export default function LibsFile() {
  return (
    <div className="mt-4 flex h-44 md:h-56 w-full flex-col rounded-2xl bg-neutral-200/30 p-2 dark:bg-neutral-900 sm:h-67">
      <div className="relative flex items-center gap-3 px-2 py-2 text-sm font-mono text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-1"><HugeiconsIcon icon={DocumentCodeIcon} className="size-3.5"/> lib/utils.tsx</div>
        <CopyButton copy={code} className="absolute top-2 right-3" />
      </div>
      <div className="flex-1 overflow-hidden rounded-xl bg-white px-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-neutral-950 sm:px-4">
        <div className="w-full overflow-auto font-mono text-[14px] text-neutral-600">
          <CodeBlock code={code} />
        </div>
      </div>
    </div>
  );
}
