import { componentCatalog } from "@/catalog/components";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  currentPage: number;
}

export function DocsFooter({ currentPage }: FooterProps) {
  const previousPage = componentCatalog[currentPage - 1];
  const nextPage = componentCatalog[currentPage + 1];
  return (
    <div className="flex w-full justify-between mt-20 mb-6">
      {previousPage ? (
        <Link
          href={previousPage.slug}
          className="px-3 py-2 inline-flex justify-center items-center gap-1
        rounded-md dark:text-neutral-500 no-underline hover:underline dark:hover:text-neutral-100
       text-neutral-600 text-[15px] group"
        >
          <ArrowLeft className="size-4.5 group-hover:-translate-x-2 transition-all duration-150 ease-out" />
                    {previousPage.name}

        </Link>
      ) : <div />}
      {nextPage ? (
        <Link
          href={nextPage.slug}
          className="px-3 py-2 inline-flex justify-center items-center gap-1
        rounded-md dark:text-neutral-500 no-underline hover:underline dark:hover:text-neutral-100
       text-neutral-600 text-[15px] group"
        >
          {nextPage.name}
          <ArrowRight className="size-4.5 group-hover:translate-x-2 transition-all duration-150 ease-out" />
        </Link>
      ) : <div />}
    </div>
  );
}
