"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiSidebar } from "react-icons/fi";

const gettingStarted = [
  { title: "Introduction", href: "/docs/introduction" },
  { title: "Installation", href: "/docs/installation" },
];

const components = [
  { title: "Gooey AI Input", href: "/docs/gooey-input" },
  { title: "Prompt Input", href: "/docs/prompt-input" },
  { title: "Model Selector", href: "/docs/modelselector" },
  { title: "Message Bubble", href: "/docs/message" },
  { title: "Prompt Suggestion", href: "/docs/prompt-suggestion" },
  { title: "Shimmering Text", href: "/docs/shimmering-text" },
  { title: "With Attachments", href: "/docs/attachments" },
  { title: "Streaming Output", href: "/docs/streaming-output" },
  { title: "Error Message", href: "/docs/error-message" },
  { title: "Expandable Input", href: "/docs/expandable-input" },
];

interface SidebarProps {
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Introduction");
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    function hanldeOutSideClick(e: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    window.addEventListener("pointerdown", hanldeOutSideClick);

    return () => {
      window.removeEventListener("pointerdown", hanldeOutSideClick);
    };
  }, []);
  return (
    <div ref={sidebarRef}>
      <button
        onClick={() => setIsOpen((c) => !c)}
        className="fixed top-5 left-2 md:left-10 z-9999 rounded-xl bg-muted hover:bg-neutral-200 cursor-pointer p-2.5 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
      >
        <FiSidebar className="size-5" />
      </button>

      {isOpen && (
        <aside
          className="fixed top-20 left-2 md:left-10 w-64 bg-muted px-4 py-14 rounded-2xl"
        >
          <section className="mb-10">
            <h2 className="mb-2 px-2 text-[12px] font-medium uppercase tracking-wide text-neutral-700 dark:text-neutral-400">
              Getting Started
            </h2>

            <div className="flex flex-col">
              {gettingStarted.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setActiveItem(item.title)}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-[14px] font-medium tracking-wide",
                    activeItem === item.title
                      ? "bg-neutral-200/80 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200/60 dark:text-neutral-400 dark:hover:text-neutral-200",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-2 flex items-center gap-5 px-2">
              <h2 className="text-[12px] font-medium uppercase tracking-wide text-neutral-700 dark:text-neutral-400">
                All Components
              </h2>

              <span className="rounded-lg bg-sky-100 px-2 py-1 text-xs text-sky-600">
                {components.length}
              </span>
            </div>

            <div className="flex flex-col">
              {components.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setActiveItem(item.title)}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-[14px] font-medium tracking-wide",
                    activeItem === item.title
                      ? "bg-neutral-200/80 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200/60 dark:text-neutral-400 dark:hover:text-neutral-200",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      )}
    </div>
  );
}
