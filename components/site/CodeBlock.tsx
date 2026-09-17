"use client";

import { CodeHighlighter } from "@/lib/codeHighLighter";
import { useState } from "react";
import { CopyButton } from "./CopyButton";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
};

export default function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <div className="overflow-hidden rounded-xl bg-neutral-800">
      {/* Header */}
      <div className="flex h-11 items-center justify-between border-b border-neutral-800 px-1">
        <div className="flex items-center gap-3">
          {filename && (
            <span className="text-sm text-neutral-300">{filename}</span>
          )}

          <span className="text-xs uppercase tracking-wide text-neutral-600">
            {language}
          </span>
        </div>

        <CopyButton content={code} />
      </div>

      {/* Code */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm leading-6">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="flex min-w-max">
                {showLineNumbers && (
                  <span className="mr-6 w-6 select-none text-right text-neutral-700">
                    {index + 1}
                  </span>
                )}

                <span>
                  <CodeHighlighter code={line} />
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
