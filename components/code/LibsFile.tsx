import CodeBlock from "../code/CodeBlock";
import { CopyButton } from "./CopyButton";

const code = `import { twMerge } from 'tailwind-merge';
import clsx, { type ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};`;

export default function LibsFile() {
  return (
    <div className="mt-4 flex h-44 md:h-56 w-full flex-col rounded-2xl bg-neutral-200/70 p-2 dark:bg-neutral-900 sm:h-67">
      <div className="flex items-center gap-3 px-2 py-1 text-xs sm:px-4 sm:text-sm">
        hello
      </div>
      <div className="relative flex-1 overflow-hidden rounded-xl bg-white px-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-neutral-950 sm:px-4">
        <div className="w-full overflow-auto font-mono text-[14px] text-neutral-600">
          <CodeBlock code={code} />
        </div>
        <CopyButton copy={code} className="absolute top-4 right-4" />
      </div>
    </div>
  );
}
