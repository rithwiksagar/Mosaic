import CodeFile from "@/components/code/CodeFile";
import CommandBlock from "@/components/code/CommandBlock";
import LibsFile from "@/components/code/LibsFile";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";
import GetFileContent from "@/lib/getFileContent";
import { MosaicPromptBarDemo } from "@/registry/new-york/examples/prompt-bar/MosaicPromptBarDemo";

export default async function Page() {
  const Usagecode = await GetFileContent(
    "examples/prompt-bar/MosaicPromptBarDemo.tsx",
  );
  const componentCode = await GetFileContent(
    "components/prompt-bar/MosaicPromptBar.tsx",
  );
  return (
    <div className="w-full min-w-0 px-3 sm:px-5 md:px-8 prose-p:tracking-tight prose-p:font-normal">
      <div>
        <h1 className="mb-2 text-2xl sm:mb-3 sm:text-3xl">Prompt Bar</h1>
        <p className="mt-0 max-w-2xl text-sm sm:text-base">
          Highly customizable prompt bar with / command access
        </p>
      </div>

      <ComponentPreview component={MosaicPromptBarDemo} code={Usagecode} />

      <section className="mt-8 sm:mt-10">
        <h6 className="text-base font-medium text-neutral-700 dark:text-neutral-300 sm:text-lg">
          Install using CLI
        </h6>
        <CommandBlock command="https://mosaic-ui.dev/r/prompt-bar.json" />
      </section>

      <section className="mt-8 sm:mt-10">
        <h6 className="text-base font-medium text-neutral-700 dark:text-neutral-300 sm:text-lg">
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
