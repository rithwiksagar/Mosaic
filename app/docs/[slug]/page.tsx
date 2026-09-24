import { componentCatalog } from "@/catalog/components";
import CodeFile from "@/components/code/CodeFile";
import CommandBlock from "@/components/code/CommandBlock";
import LibsFile from "@/components/code/LibsFile";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";
import GetFileContent from "@/lib/getFileContent";
import { MosaicPromptBarDemo } from "@/registry/new-york/examples/prompt-bar/MosaicPromptBarDemo";
import { notFound } from "next/navigation";

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const component = componentCatalog.find((comp)=> comp.slug === slug);

  if(!component){
    notFound();
  }
  const Usagecode = await GetFileContent(component.examplePath);
  const componentCode = await GetFileContent(component.filePath);
  return (
    <div className="w-full min-w-0 px-3 sm:px-5 md:px-8 prose-p:tracking-tight prose-p:font-normal">
      <div>
        <h1 className="mb-2 text-2xl sm:mb-3 sm:text-3xl">{component.name}</h1>
        <p className="mt-0 max-w-2xl text-sm sm:text-base">
          {component.description}
        </p>
      </div>

      <ComponentPreview component={MosaicPromptBarDemo} code={Usagecode} />

      <section className="mt-8 sm:mt-10">
        <h6 className="text-base font-medium text-neutral-700 dark:text-neutral-300 sm:text-lg">
          Install using CLI
        </h6>
        <CommandBlock command={component.registryUrl} />
      </section>

      <section className="mt-8 sm:mt-10">
        <h6 className="text-base font-medium text-neutral-700 dark:text-neutral-300 sm:text-lg">
          Install manually
        </h6>
        <LibsFile />
        <CodeFile filePath={component.filePath} code={componentCode} />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            prop: "payload",
            type: "PromptPayload",
            default: "{}",
            description: "Current prompt value.",
          },
          {
            prop: "isLoading",
            type: "boolean",
            default: "false",
            description: "Shows the loading state.",
          },
          {
            prop: "tools",
            type: "Tool[]",
            default: "[]",
            description: "Commands available from the slash menu.",
          },
        ]}
      />
    </div>
  );
}
