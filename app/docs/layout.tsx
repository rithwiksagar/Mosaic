"use client";

import NavBar from "@/components/site/NavBar";
import Sidebar from "@/components/docs/DocsSidebar";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const topbarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        sidebarRef.current &&
        topbarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        !topbarRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);
  return (
    <div>
      <aside>
        <Sidebar />
      </aside>
      <div className="">
        <div
          className="prose 
    prose-neutral 
    dark:prose-invert 
    prose-h1:text-2xl md:prose-h1:text-3xl dark:prose-h1:text-neutral-100 prose-h1:text-neutral-950 prose-h1:font-medium prose-headings:tracking-tight
    prose-p:text-neutral-700 dark:prose-p:text-neutral-500 prose-p:leading-8 prose-p:font-normal
    prose-h2:font-medium prose-h2:text-[22px] prose-h2:tracking-tight prose-h2:text-neutral-800 dark:prose-h2:text-neutral-300
    prose-p:text-[16px]
    prose-pre:bg-neutral-200 prose-pre:text-neutral-800 dark:prose-pre:bg-neutral-900 dark:prose-pre:text-neutral-300 prose-pre:rounded-2xl
    md:max-w-xl lg:max-w-3xl mt-40 text-justify mx-auto"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
