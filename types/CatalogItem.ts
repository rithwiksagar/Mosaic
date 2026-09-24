export type CatalogItem = {
  name: string
  slug: string
  description: string
  category: "component" | "block"
  registryUrl: string
  filePath: string
  examplePath: string
  videoPath: string
}
