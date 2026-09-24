import CodeBlock from "./CodeBlock";
import { CopyButton } from "./CopyButton";

export default function CodeFile({
  code,
  filePath,
}: {
  code: string;
  filePath: string;
}) {
  const fileName = filePath.split("/").pop();

  return (
    <div className="mt-4 flex h-72 w-full flex-col rounded-2xl bg-neutral-200/70 p-2 dark:bg-neutral-900 sm:h-100">
      <div className="flex items-center gap-3 px-2 pb-2 pt-3 sm:px-4 sm:pt-4">
        {fileName && (
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            {fileName}
          </span>
        )}
      </div>
      <div className="relative bg-white dark:bg-neutral-950 flex items-start justify-between flex-1 rounded-xl overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="h-full min-w-0 w-fit flex-1 overflow-auto text-[14px]">
          <CodeBlock code={code} />
        </div>
        <CopyButton copy={code} className="absolute top-4 right-6" />
      </div>
    </div>
  );
}
