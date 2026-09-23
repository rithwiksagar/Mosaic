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
    <div className="flex flex-col h-100 w-full bg-neutral-200/70 dark:bg-neutral-900 rounded-2xl mt-4 p-2">
      <div className="flex items-center gap-3 pt-4 pb-2 px-4">
        {fileName && (
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            {fileName}
          </span>
        )}
      </div>
      <div className="relative bg-white dark:bg-neutral-950 flex items-start justify-between flex-1 rounded-xl overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="min-w-0 flex-1 h-full w-fit overflow-auto">
          <CodeBlock code={code} />
        </div>
        <CopyButton copy={code} className="absolute top-4 right-6" />
      </div>
    </div>
  );
}
