"use client";
import { AnimatePresence, easeOut, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import CommandMenu from "./CommandMenu";
import UseToggleTheme from "@/hooks/UseToggleTheme";

type label = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const labels: label[] = [
  { label: "Github", href: "https://github.com/rithwiksagar/Mosaic" },
  { label: "Docs", href: "/docs/introduction" },
  { label: "Components", href: "/docs/prompt-bar" },
];

export default function NavBar() {
  return (
    <div className="fixed right-1/2 translate-x-1/2 z-999 top-2">
      <div className="mx-auto flex items-center justify-between  rounded-2xl w-60 sm:w-70 md:w-120 lg:w-200 bg-muted max-w-4xl py-1 lg:py-2 px-2 z-999 dark:bg-neutral-900">
        <Link href="/" className="flex items-center px-1 py-1 cursor-pointer">
          <img
            src="/logo/mosaicLogo.jpeg"
            alt="Mosaic logo"
            className="size-8 rounded-lg object-cover shadow-sm"
          />
          <h6 className="text-[17px] font-medium text-neutral-800 px-2 dark:text-neutral-100">
            Mosaic
          </h6>
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {labels.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md py-2 px-2 text-sm font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-400"
            >
              {item.label}
            </a>
          ))}

          <CommandMenu />
        </div>

        <Menu labels={labels} />
      </div>
    </div>
  );
}

function Menu({ labels }: { labels: label[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function closeMenu(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative lg:hidden">
      <button
        className="py-2 px-1"
        onClick={() => {
          setIsMenuOpen((p) => !p);
        }}
      >
        <IoMenu className="size-5 cursor-pointer" />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)", scale: 0.99 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)", scale: 0.99 }}
            transition={{ duration: 0.18, ease: easeOut }}
            className="
          absolute -right-14 md:-right-3 top-12
          w-80 rounded-2xl
          border border-neutral-200/90
          bg-muted
          p-2
          dark:border-neutral-800
          dark:bg-neutral-900
          dark:shadow-black/20
          origin-top md:origin-top-right
        "
          >
            {labels.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="
              block rounded-xl
              px-3 py-2.5
              text-sm text-neutral-700
              transition-colors
              hover:bg-neutral-200/60
              dark:text-neutral-300
              dark:hover:bg-neutral-800/60
            "
              >
                {item.label}
              </Link>
            ))}
            <div className="py-2.5 px-3 flex-1">
              <UseToggleTheme showLabel={true} />
            </div>
            <div className="border-t py-1.5 dark:text-neutral-800 text-neutral-200" />
            <CommandMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
