import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import CodeBlock from "../code/CodeBlock";
import { CopyButton } from "../code/CopyButton";

interface ComponentPreviewProps {
  component: () => ReactNode;
  code: string;
  classname?: string;
}

export default function ComponentPreview({
  component,
  code,
  classname,
}: ComponentPreviewProps) {
  const Component = component;

  return (
    <div className="not-prose relative mx-auto grid h-200 w-full max-w-5xl grid-rows-2 gap-2 overflow-hidden rounded-xl bg-neutral-200 p-2.5 dark:bg-neutral-800/80 sm:min-h-152 md:h-260">
      <div
        className={cn(
          "min-w-0 overflow-x-auto rounded-2xl bg-background p-2 dark:bg-neutral-950 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
          classname,
        )}
      >
        {<Component />}
      </div>

      <div className="relative min-h-0 min-w-0 overflow-hidden rounded-xl bg-background dark:bg-neutral-950 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="h-full min-h-0 overflow-auto text-[12px] p-2">
          <CodeBlock code={code} />
        </div>

        <CopyButton copy={code} className="absolute top-4 right-4" />
      </div>
    </div>
  );
}
