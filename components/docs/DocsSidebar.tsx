"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, easeOut, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiSidebar } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { componentCatalog } from "@/catalog/components";
import UseToggleTheme from "@/hooks/UseToggleTheme";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";

const gettingStarted = [
  { title: "Introduction", href: "/docs/introduction" },
  { title: "Installation", href: "/docs/installation" },
];

export default function DocsSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<null | HTMLDivElement>(null);
  const pathName = usePathname();

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
        aria-label={
          isOpen ? "Close documentation sidebar" : "Open documentation sidebar"
        }
        aria-expanded={isOpen}
        className="fixed top-3 left-2 sm:left-3 z-10000 cursor-pointer rounded-xl bg-muted p-2.5 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
      >
        <FiSidebar className="size-4 md:size-5" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(2px)" }}
            transition={{ duration: 0.15, ease: easeOut }}
            className="fixed left-1 top-1 bottom-1 z-9999 flex w-[min(18rem,calc(100vw-0.5rem))] flex-col overflow-hidden rounded-xl border border-neutral-200/50 bg-neutral-100 p-1 dark:border-neutral-800/70 dark:bg-neutral-900"
          >
            <div className="min-h-0 flex-1 overflow-y-auto pt-20">
              <section className="mb-10">
                <h2 className="mb-2 px-3 text-[12px] font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                  Getting Started
                </h2>

                <div className="flex flex-col gap-2">
                  {gettingStarted.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-[14px] font-normal tracking-wide text-neutral-500 dark:text-neutral-500",
                        pathName === item.href
                          ? "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200"
                          : "hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-300 hover:text-neutral-900",
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-2 flex items-center gap-5 px-3">
                  <h2 className="text-[12px] font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                    All Components
                  </h2>

                  <span className="rounded-xl bg-sky-100 px-2 py-0.5 text-xs text-sky-600 dark:bg-sky-500 dark:text-sky-100">
                    {componentCatalog.length}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {componentCatalog.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/docs/${item.slug}`}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-[14px] font-normal tracking-wide text-neutral-500 dark:text-neutral-500",
                        pathName === `/docs/${item.slug}`
                          ? "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200"
                          : "hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-300 hover:text-neutral-900",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </section>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 text-neutral-500 dark:text-neutral-400">
              <Link
                href="https://x.com/rithwiksagarr"
                aria-label="X"
                className="transition-colors hover:text-neutral-900 dark:hover:text-white"
              >
                <RiTwitterXFill className="size-4" />
              </Link>
              <Link
                href="/contact"
                aria-label="Contact"
                className="transition-colors hover:text-neutral-900 dark:hover:text-white"
              >
                <IoMailOutline className="size-4" />
              </Link>
              <Link
                href="https://github.com/rithwiksagar/Mosaic"
                aria-label="GitHub"
                className="transition-colors hover:text-neutral-900 dark:hover:text-white"
              >
                <FaGithub className="size-4" />
              </Link>
              <UseToggleTheme showLabel={false} />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
