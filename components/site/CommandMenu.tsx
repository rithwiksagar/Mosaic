"use client";
import { createPortal } from "react-dom";
import { Search } from "lucide-react";
import { use, useEffect, useRef, useState } from "react";
import { TbCircleDotted } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { AnimatePresence, easeOut, motion } from "motion/react";

const menuItems = [
  {
    label: "General",
    items: [
      { title: "Home", href: "/" },
      { title: "Docs", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    label: "Components",
    items: [
      { title: "Mosaic Prompt Bar", href: "/docs/mosaic-promptbar" },
      { title: "Text Actions", href: "/docs/text-actions" },
      { title: "Prompt Button 001", href: "/docs/prompt-button-001" },
      { title: "Prompt Button 002", href: "/docs/prompt-button-002" },
      { title: "Citations", href: "/docs/citations" },
      { title: "Shimmering Text", href: "/docs/shimmering-text" },
      { title: "With Attachments", href: "/docs/attachments" },
      { title: "Streaming Output", href: "/docs/streaming-output" },
      { title: "Error Message", href: "/docs/error-message" },
      { title: "Expandable Input", href: "/docs/expandable-input" },
    ],
  },
  {
    label: "Pages",
    items: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Terms", href: "/terms" },
      { title: "privacy", href: "/privacy" },
    ],
  },
];

const searchableItems = menuItems.flatMap((group) =>
  group.items.map((item) => ({ ...item, group: group.label })),
);

export default function CommandMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const commandRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();
  const filteredItems = searchableItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (isMenuOpen) {
      inputRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    itemRefs.current[activeIndex]?.scrollIntoView({
      block: "nearest",
    });
  }, [activeIndex]);

  useEffect(() => {
    const handleCmdK = (e: KeyboardEvent) => {
      if (e.metaKey || (e.ctrlKey && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        e.stopPropagation();
        setIsMenuOpen((m) => !m);
      }
    };

    window.addEventListener("keydown", handleCmdK);

    return () => window.removeEventListener("keydown", handleCmdK);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return setIsMenuOpen(false);
      }
      if (e.key === "ArrowDown") {
        setActiveIndex((i) => (i === filteredItems.length - 1 ? i : i + 1));
      }
      if (e.key === "ArrowUp") {
        setActiveIndex((i) => (i === 0 ? i : i - 1));
      }
      if (e.key === "Enter"){
        router.push(filteredItems[activeIndex].href);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, filteredItems.length, activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div
        onClick={() => setIsMenuOpen(true)}
        className="group flex cursor-pointer items-center justify-between gap-2 p-2 text-[14px] rounded-xl text-neutral-500 dark:text-neutral-300 dark:bg-neutral-800/70 bg-neutral-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      >
        <div className="flex items-center gap-1.5 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
          <Search className="size-3.5 lg:hidden" />
          Search
        </div>

        <div className="hidden rounded-md border border-neutral-300 bg-neutral-200/60 px-1.5 py-0.5 text-[11px] group-hover:text-neutral-900 lg:block dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-300 dark:group-hover:text-neutral-100">
          ⌘ K
        </div>
      </div>
      { mounted && createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <div
              className="fixed inset-0 z-999 bg-black/10 backdrop-blur-sm dark:bg-black/30 px-2"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                  setIsMenuOpen(false);
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.13, ease: easeOut }}
                ref={commandRef}
                className="mx-auto mt-44 w-full max-w-xl rounded-xl border border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <div className="sticky top-0 left-0 flex w-full items-center justify-between rounded-t-2xl border-b border-neutral-200 bg-neutral-100 p-4 text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="flex flex-1 items-center">
                    <Search className="size-4" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      ref={inputRef}
                      className="w-full flex-1 px-2 text-[14px] font-normal text-neutral-900 outline-0 placeholder:text-neutral-500 dark:text-white"
                      placeholder="Type a command or search..."
                    />
                  </div>
                  <div className="rounded-md border border-neutral-200 bg-neutral-200/50 px-1.5 py-0.5 text-[10px] dark:border-neutral-800 dark:bg-neutral-900">
                    ESC
                  </div>
                </div>
                <div className="h-86 overflow-y-scroll px-4 py-3 [scrollbar-width:none]">
                  {filteredItems.map((item, index) => {
                    const showGroup =
                      index === 0 ||
                      item.group !== filteredItems[index - 1].group;
                    return (
                      <div key={index}>
                        {showGroup && (
                          <div className="px-1 py-1.5 text-[13px] font-normal text-neutral-800 dark:text-neutral-400">
                            {item.group}
                          </div>
                        )}

                        <div
                          ref={(el) => {
                            itemRefs.current[index] = el;
                          }}
                          onClick={() => {
                            router.push(item.href);
                            setIsMenuOpen(false);
                          }}
                          className={cn(
                            "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-[15px] font-normal text-neutral-600 hover:bg-neutral-200/60 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-50",
                            activeIndex === index
                              ? "bg-neutral-200/60 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                              : "dark:text-neutral-400",
                          )}
                        >
                          <TbCircleDotted className="size-4" />
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
