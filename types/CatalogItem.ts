export type CatalogProp = {
  prop: string;
  type: string;
  default?: string;
  description: string;
};

export type CatalogItem = {
  id: number;
  name: string;
  slug: string;
  description: string;
  props: CatalogProp[][];
  propTitles: string[];
  category: "component" | "block";
  registryUrl: string;
  filePath: string;
  examplePath: string;
  videoPath: string;
};
