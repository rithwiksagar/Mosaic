import { HugeiconsIcon } from "@hugeicons/react";
import CodeBlock from "./CodeBlock";
import { CopyButton } from "./CopyButton";
import { DocumentCodeIcon } from "@hugeicons/core-free-icons";

export default function CodeFile({
  code,
  filePath,
}: {
  code: string;
  filePath: string;
}) {
  const fileName = filePath.split("/").pop();

  return (
    <div className="mt-4 flex h-72 w-full flex-col rounded-2xl bg-neutral-200/30 p-2 dark:bg-neutral-900 sm:h-100">
      <div className="flex items-center gap-3 px-2 pb-2">
        {fileName && (
          <div className="relative w-full flex items-center gap-3 px-2 py-2 text-sm font-mono text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-1">
              <HugeiconsIcon icon={DocumentCodeIcon} className="size-3.5" />{" "}
              {filePath}
            </div>
            <CopyButton copy={code} className="absolute top-2 right-1" />
          </div>
        )}
      </div>
      <div className="relative bg-white dark:bg-neutral-950 flex items-start justify-between flex-1 rounded-xl overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="h-full min-w-0 w-fit flex-1 overflow-auto text-[14px]">
          <CodeBlock code={code} />
        </div>
      </div>
    </div>
  );
}
