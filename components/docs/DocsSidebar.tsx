"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, easeOut, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { componentCatalog } from "@/catalog/components";
import UseToggleTheme from "@/hooks/UseToggleTheme";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GridViewIcon,
  Home03Icon,
  Rocket02Icon,
} from "@hugeicons/core-free-icons";

const SIDEBAR_OUTER =
  "M11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.2288 21 5.3431 21 4.1716 19.8284C3 18.6569 3 16.7712 3 13V11C3 7.22876 3 5.34315 4.1716 4.17157C5.3431 3 7.2288 3 11 3Z";

const SIDEBAR_PANEL_CLOSED =
  "M10 5.5 C10 4.793 10 4.439 9.780 4.220 C9.560 4 9.207 4 8.5 4 H8.5 C6.379 4 5.318 4 4.659 4.659 C4 5.318 4 6.379 4 8.5 V15.5 C4 17.621 4 18.682 4.659 19.341 C5.318 20 6.379 20 8.5 20 H8.5 C9.207 20 9.561 20 9.780 19.780 C10 19.561 10 19.207 10 18.5 V5.5 Z";

const SIDEBAR_PANEL_OPEN =
  "M14 6 C14 5.057 14 4.586 13.707 4.293 C13.414 4 12.943 4 12 4 H10 C7.172 4 5.757 4 4.879 4.879 C4 5.757 4 7.172 4 10 V14 C4 16.828 4 18.243 4.879 19.121 C5.757 20 7.172 20 10 20 H12 C12.943 20 13.414 20 13.707 19.707 C14 19.414 14 18.943 14 18 V6 Z";

function SidebarToggleIcon({
  showSidebar,
  strokeWidth = 1.5,
  className,
}: {
  showSidebar: boolean;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg className={cn(className)} fill="none" viewBox="0 0 24 24">
      <path
        d={SIDEBAR_OUTER}
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />

      <motion.path
        animate={{ d: showSidebar ? SIDEBAR_PANEL_OPEN : SIDEBAR_PANEL_CLOSED }}
        d={showSidebar ? SIDEBAR_PANEL_OPEN : SIDEBAR_PANEL_CLOSED}
        style={{ fill: "var(--background)" }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      />
    </svg>
  );
}

const general = [{ title: "Home", href: "/" }];
const gettingStarted = [
  { title: "Introduction", href: "/docs/introduction" },
  { title: "Installation", href: "/docs/installation" },
];

export default function DocsSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<null | HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    function hanldeOutSideClick(e: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsSidebarOpen(false);
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
        onClick={() => setIsSidebarOpen((current) => !current)}
        aria-label={
          isSidebarOpen
            ? "Close documentation sidebar"
            : "Open documentation sidebar"
        }
        aria-expanded={isSidebarOpen}
        className="fixed top-3 left-2 sm:left-3 z-10000 cursor-pointer rounded-xl p-2.5 text-neutral-600 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-800"
      >
        <SidebarToggleIcon showSidebar={isSidebarOpen} className="size-5" />
      </button>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(2px)" }}
            transition={{ duration: 0.15, ease: easeOut }}
            className="fixed left-1 top-0 bottom-0 z-9999 flex w-[min(18rem,calc(100vw-0.5rem))] flex-col overflow-hidden rounded-xl border border-neutral-200/50 bg-neutral-100 p-1 dark:border-neutral-800/70 dark:bg-neutral-900"
          >
            <div className="min-h-0 flex-1 overflow-y-auto pt-20">
              <section className="mb-6">
                <Link
                  href={"/"}
                  onClick={() => {
                    setIsSidebarOpen(false);
                  }}
                  className="py-2 px-3 rounded-lg text-[12px] font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500 flex gap-1 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-100 hover:text-neutral-900"
                >
                <HugeiconsIcon icon={Home03Icon} className="size-4 text-blue-500"/>  
                Home</Link>
              </section>
              <section className="mb-10">
                <h2 className="mb-2 px-3 text-[12px] font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500 flex items-center gap-1">
                  <HugeiconsIcon icon={Rocket02Icon} className="size-4 text-emerald-500" />
                  Getting Started
                </h2>

                <div className="flex flex-col gap-2 pl-4.5">
                  {gettingStarted.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => {
                        setIsSidebarOpen(false);
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
                  <h2 className="text-[12px] font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500 flex items-center gap-1">
                  <HugeiconsIcon icon={GridViewIcon} className="size-3.5 text-sky-500"/>All Components
                  </h2>
                </div>

                <div className="flex flex-col gap-2 pl-4.5">
                  {componentCatalog.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/docs/${item.slug}`}
                      onClick={() => {
                        setIsSidebarOpen(false);
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
