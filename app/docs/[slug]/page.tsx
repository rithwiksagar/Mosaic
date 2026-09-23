
import CodeFile from "@/components/code/CodeFile";
import CommandBlock from "@/components/code/CommandBlock";
import LibsFile from "@/components/code/LibsFile";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";
import GetFileContent from "@/lib/getFileContent";
import { MosaicPromptBarDemo } from "@/registry/new-york/Examples/MosaicPromptBarDemo";

export default async function Page() {
  const Usagecode = await GetFileContent("Examples/MosaicPromptBarDemo.tsx");
  const componentCode = await GetFileContent(
    "MosaicPromptBar/MosaicPromptBar.tsx",
  );
  return (
    <div className="prose-p:tracking-tight prose-p:font-normal">
      <div className="">
        <h1 className="mb-3">Prompt Bar</h1>
        <p className="mt-0">
          Highly customizable prompt bar with / command access
        </p>
      </div>

      <ComponentPreview component={MosaicPromptBarDemo} code={Usagecode} />

      <section className="mt-10">
        <h6 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
          Install using CLI
        </h6>
        <CommandBlock command="https://mosaic-ui.dev/r/prompt-bar.json" />
      </section>

      <section className="mt-10">
        <h6 className="text-lg font-mdeium text-neutral-700 dark:text-neutral-300">
          Install manually
        </h6>
        <LibsFile />
        <CodeFile filePath="" code={componentCode} />
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
