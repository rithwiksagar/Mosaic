import { componentCatalog } from "@/catalog/components";

export const docsNavigation = [
  {
    name: "Introduction",
    slug: "introduction",
    href: "/docs",
  },
  {
    name: "Installation",
    slug: "installation",
    href: "/docs/installation",
  },
  ...componentCatalog.map((component) => ({
    name: component.name,
    slug: component.slug,
    href: `/docs/${component.slug}`,
  })),
];