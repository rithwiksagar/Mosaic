"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, easeOut, motion, spring } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiSidebar } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { componentCatalog } from "@/catalog/components";

const gettingStarted = [
  { title: "Introduction", href: "/docs/introduction" },
  { title: "Installation", href: "/docs/installation" },
];

export default function DocsSidebar() {
  const [activeItem, setActiveItem] = useState("/docs/introduction");
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<null | HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(()=>{
    if(activeItem !== pathName){
      setActiveItem(pathName)
    }
  },[pathName])


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
        className="fixed top-6 left-2 md:left-10 z-9999 rounded-xl bg-muted hover:bg-neutral-200 cursor-pointer p-2.5 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
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
            className="fixed top-20 left-2 md:left-10 w-64 bg-muted dark:bg-neutral-900 px-4 py-16 rounded-2xl"
          >
            <section className="mb-10">
              <h2 className="mb-2 px-2 text-[12px] font-medium uppercase tracking-wide text-neutral-700 dark:text-neutral-500">
                Getting Started
              </h2>

              <div className="flex flex-col">
                {gettingStarted.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-[14px] font-medium tracking-wide",
                      activeItem === item.href
                        ? "bg-neutral-200/80 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                        : "text-neutral-500 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200 hover:bg-neutral-200",
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-2 flex items-center gap-5 px-2">
                <h2 className="text-[12px] font-medium uppercase tracking-wide text-neutral-700 dark:text-neutral-500">
                  All Components
                </h2>

                <span className="rounded-lg bg-sky-100 dark:bg-sky-500 px-2 py-0.5 text-xs text-sky-600 dark:text-sky-100">
                  {componentCatalog.length}
                </span>
              </div>

              <div className="flex flex-col">
                {componentCatalog.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.slug}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-[14px] font-medium tracking-wide",
                      activeItem === item.slug
                        ? "bg-neutral-200/80 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                        : "text-neutral-500 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200 hover:bg-neutral-200",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </section>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
