import CodeBlock from "./CodeBlock";
import { CopyButton } from "./CopyButton";

const code = `import { twMerge } from 'tailwind-merge';
import clsx, { type ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};`;

export default function LibsFile() {
  return (
    <div className="flex flex-col h-67 w-full bg-neutral-200/70 dark:bg-neutral-900 rounded-2xl mt-4 p-2">
      <div className="flex items-center gap-3 py-1 px-4">hello</div>
      <div className="relative bg-white dark:bg-neutral-950 flex-1 px-4 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="text-neutral-600 font-mono w-full">
          <CodeBlock code={code} />
        </div>
        <CopyButton copy={code} className="absolute top-4 right-4" />
      </div>
    </div>
  );
}
