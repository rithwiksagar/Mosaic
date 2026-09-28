import { docsNavigation } from "@/catalog/docs";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  currentPage: string;
}

export function DocsFooter({ currentPage }: FooterProps) {
  const currentIndex = docsNavigation.findIndex(
    (page) => page.slug === currentPage
  );

  const previousPage =
    currentIndex > 0 ? docsNavigation[currentIndex - 1] : null;

  const nextPage =
    currentIndex !== -1 && currentIndex < docsNavigation.length - 1
      ? docsNavigation[currentIndex + 1]
      : null;

  return (
    <div className="mt-20 mb-6 flex w-full justify-between">
      {previousPage ? (
        <Link
          href={previousPage.href}
          className="group inline-flex items-center justify-center gap-1 rounded-md px-3 py-2 text-[15px] text-neutral-600 no-underline hover:underline dark:text-neutral-500 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="size-4.5 transition-all duration-150 ease-out group-hover:-translate-x-2" />
          {previousPage.name}
        </Link>
      ) : (
        <div />
      )}

      {nextPage ? (
        <Link
          href={nextPage.href}
          className="group inline-flex items-center justify-center gap-1 rounded-md px-3 py-2 text-[15px] text-neutral-600 no-underline hover:underline dark:text-neutral-500 dark:hover:text-neutral-100"
        >
          {nextPage.name}
          <ArrowRight className="size-4.5 transition-all duration-150 ease-out group-hover:translate-x-2" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}