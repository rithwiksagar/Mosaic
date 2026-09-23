import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import CodeBlock from "./CodeBlock";
import { CopyButton } from "./CopyButton";

interface ComponentPreviewCardProps {
  component: () => ReactNode;
  code: string;
  classname?: string;
}

export default function ComponentPreviewCard({
  component,
  code,
  classname,
}: ComponentPreviewCardProps) {
  const Component = component;

  return (
    <div className="relative left-1/2 w-60 -translate-x-1/2 sm:w-70 md:w-120 lg:w-196 max-w-4xl h-220 md:h-260 bg-neutral-200 rounded-xl p-2.5 grid grid-rows-2 gap-2 min-h-0 dark:bg-neutral-800/80">
      <div
        className={cn(
          "bg-background rounded-2xl flex items-center justify-center dark:bg-neutral-950 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
          classname,
        )}
      >
        {<Component />}
      </div>

      <div className="relative bg-background rounded-xl overflow-hidden min-h-0 dark:bg-neutral-950 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="overflow-y-auto h-full min-h-0">
          <CodeBlock code={code} />
        </div>

        <CopyButton copy={code} className="absolute top-4 right-4" />
      </div>
    </div>
  );
}
