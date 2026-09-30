import { CatalogItem } from "@/types/CatalogItem";

export const componentCatalog: CatalogItem[] = [
  {
    id: 0,
    name: "Prompt Bar",
    slug: "prompt-bar",
    description: "Compound prompt input with tool selection and submission.",
    propTitles: [
      "PromptBar",
      "ToolMenu",
      "ToolItem",
      "PromptInput",
      "PromptInputTextArea",
      "PromptInputActions",
      "PromptInputAttachments",
      "PromptInputSubmit",
    ],
    props: [
      [
        {
          prop: "payload",
          type: "PromptPayload",
          default: "Required",
          description: "Current prompt and selected tool.",
        },
        {
          prop: "setPayload",
          type: "Dispatch<SetStateAction<PromptPayload>>",
          default: "Required",
          description: "Updates the prompt and selected tool.",
        },
        {
          prop: "isLoading",
          type: "boolean",
          default: "Required",
          description: "Disables submission while loading.",
        },
        {
          prop: "onSubmit",
          type: "(payload: PromptPayload) => void",
          default: "Required",
          description: "Handles prompt submission.",
        },
        {
          prop: "tools",
          type: "Tool[]",
          default: "Required",
          description: "Tools available through slash commands.",
        },
        {
          prop: "children",
          type: "ReactNode",
          default: "Required",
          description: "Composes the prompt bar interface.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional container styles.",
        },
      ],
      [
        {
          prop: "children",
          type: "ReactElement<ToolItemProps>",
          default: "Required",
          description: "Tool item template cloned for each result.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional menu styles.",
        },
      ],
      [
        {
          prop: "id",
          type: "string",
          default: "undefined",
          description: "Tool identifier assigned on selection.",
        },
        {
          prop: "title",
          type: "string",
          default: "undefined",
          description: "Tool name shown in the menu.",
        },
        {
          prop: "description",
          type: "string",
          default: "undefined",
          description: "Supporting text shown beside the name.",
        },
        {
          prop: "icon",
          type: "LucideIcon",
          default: "undefined",
          description: "Icon shown beside the tool name.",
        },
        {
          prop: "color",
          type: "string",
          default: "undefined",
          description: "Icon and selected-tool color classes.",
        },
        {
          prop: "index",
          type: "number",
          default: "0",
          description: "Menu position used for selection and animation.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional item styles.",
        },
      ],
      [
        {
          prop: "children",
          type: "ReactNode",
          default: "Required",
          description: "Textarea and action controls.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional input container styles.",
        },
      ],
      [
        {
          prop: "placeholder",
          type: "string",
          default: "Required",
          description: "Textarea placeholder text.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional textarea styles.",
        },
      ],
      [
        {
          prop: "children",
          type: "ReactNode",
          default: "Required",
          description: "Attachment and submit controls.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional action row styles.",
        },
      ],
      [
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional attachment button styles.",
        },
      ],
      [
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional submit control styles.",
        },
      ],
    ],
    category: "component",
    registryUrl: "https://brainframeui.tech/r/prompt-bar.json",
    filePath: "components/ui/mosaic-prompt-bar.tsx",
    examplePath: "components/docs/prompt-bar-demo.tsx",
    videoPath: "/previewVideos/PromptBar.webm",
  },

  {
    id: 1,
    name: "Text Actions",
    slug: "text-actions",
    description: "Floating actions for selected text.",
    propTitles: ["TextActions"],
    props: [
      [
        {
          prop: "children",
          type: "string",
          default: "Required",
          description: "Text where selection actions appear.",
        },
        {
          prop: "actions",
          type: "{ label: string; onClick: (text: string) => void }[]",
          default: "Required",
          description: "Actions shown for selected text.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional action bar styles.",
        },
      ],
    ],
    category: "component",
    registryUrl: "https://brainframeui.tech/r/text-actions.json",
    filePath: "components/ui/textactions.tsx",
    examplePath: "components/docs/text-actions-demo.tsx",
    videoPath: "/previewVideos/TextActions.webm",
  },

  {
    id: 2,
    name: "Prompt Launcher",
    slug: "prompt-launcher",
    description: "Expandable prompt input launched from a compact button.",
    propTitles: [
      "PromptLauncher",
      "PromptLauncherButton",
      "PromptLauncherPromptBar",
      "PromptLauncherTextarea",
      "PromptLauncherSubmit",
    ],
    props: [
      [
        {
          prop: "value",
          type: "string",
          default: "Required",
          description: "Current prompt text.",
        },
        {
          prop: "setValue",
          type: "Dispatch<SetStateAction<string>>",
          default: "Required",
          description: "Updates the prompt text.",
        },
        {
          prop: "isLoading",
          type: "boolean",
          default: "Required",
          description: "Indicates an active submission.",
        },
        {
          prop: "setIsLoading",
          type: "Dispatch<SetStateAction<boolean>>",
          default: "Required",
          description: "Updates the loading state.",
        },
        {
          prop: "onSubmit",
          type: "() => void",
          default: "Required",
          description: "Handles prompt submission.",
        },
        {
          prop: "children",
          type: "ReactNode",
          default: "Required",
          description: "Collapsed button and expanded prompt content.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional container styles.",
        },
      ],
      [
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional button styles.",
        },
      ],
      [
        {
          prop: "children",
          type: "ReactNode",
          default: "Required",
          description: "Textarea and submit control.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional prompt bar styles.",
        },
      ],
      [
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional textarea styles.",
        },
      ],
      [
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional submit button styles.",
        },
      ],
    ],
    category: "component",
    registryUrl: "https://brainframeui.tech/r/prompt-launcher.json",
    filePath: "components/ui/prompt-launcher.tsx",
    examplePath: "components/docs/prompt-launcher-demo.tsx",
    videoPath: "/previewVideos/AskAI001.webm",
  },

  {
    id: 3,
    name: "Prompt Trigger",
    slug: "prompt-trigger",
    description: "Expandable prompt input with attachment and submit controls.",
    propTitles: [
      "PromptTrigger",
      "PromptTriggerButton",
      "PromptTriggerPromptBar",
      "PromptTriggerTextarea",
      "PromptTriggerActions",
      "PromptTriggerAttachments",
      "PromptTriggerSubmit",
    ],
    props: [
      [
        {
          prop: "value",
          type: "string",
          default: "Required",
          description: "Current prompt text.",
        },
        {
          prop: "setValue",
          type: "Dispatch<SetStateAction<string>>",
          default: "Required",
          description: "Updates the prompt text.",
        },
        {
          prop: "isLoading",
          type: "boolean",
          default: "Required",
          description: "Indicates an active submission.",
        },
        {
          prop: "setIsLoading",
          type: "Dispatch<SetStateAction<boolean>>",
          default: "Required",
          description: "Updates the loading state.",
        },
        {
          prop: "onSubmit",
          type: "() => void",
          default: "Required",
          description: "Handles prompt submission.",
        },
        {
          prop: "children",
          type: "ReactNode",
          default: "Required",
          description: "Collapsed button and expanded prompt content.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional container styles.",
        },
      ],
      [
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional trigger button styles.",
        },
      ],
      [
        {
          prop: "children",
          type: "ReactNode",
          default: "Required",
          description: "Textarea and action controls.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional prompt bar styles.",
        },
      ],
      [
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional textarea styles.",
        },
      ],
      [
        {
          prop: "children",
          type: "ReactNode",
          default: "Required",
          description: "Attachment and submit controls.",
        },
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional action row styles.",
        },
      ],
      [
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional attachment button styles.",
        },
      ],
      [
        {
          prop: "className",
          type: "string",
          default: "undefined",
          description: "Additional submit button styles.",
        },
      ],
    ],
    category: "component",
    registryUrl: "https://brainframeui.tech/r/prompt-trigger.json",
    filePath: "components/ui/prompt-trigger.tsx",
    examplePath: "components/docs/prompt-trigger-demo.tsx",
    videoPath: "/previewVideos/AskAI002.webm",
  },

  {
    id: 4,
    name: "Citations",
    slug: "citations",
    description: "Browse linked sources through animated citation previews.",
    propTitles: ["Citations", "SourceData"],
    props: [
      [
        {
          prop: "sources",
          type: "SourceData[]",
          default: "Required",
          description: "Sources available for browsing.",
        },
        {
          prop: "children",
          type: "ReactNode",
          default: "Required",
          description: "Citation trigger content, usually Source.",
        },
      ],
      [
        {
          prop: "title",
          type: "string",
          default: "Required",
          description: "Source title shown in its preview.",
        },
        {
          prop: "description",
          type: "string",
          default: "Required",
          description: "Summary shown in its preview.",
        },
        {
          prop: "url",
          type: "string",
          default: "Required",
          description: "Source destination URL.",
        },
        {
          prop: "favicon",
          type: "string",
          default: "Required",
          description: "Source favicon URL.",
        },
      ],
    ],
    category: "component",
    registryUrl: "https://brainframeui.tech/r/citations.json",
    filePath: "components/ui/citations.tsx",
    examplePath: "components/docs/citations-demo.tsx",
    videoPath: "/previewVideos/Citations.webm",
  },

  {
    id: 5,
    name: "Response Streaming",
    slug: "response-streaming",
    description: "Displays response text with animated token streaming.",
    propTitles: [],
    props: [],
    category: "component",
    registryUrl: "https://brainframeui.tech/r/response-streaming.json",
    filePath: "components/ui/response-streaming.tsx",
    examplePath: "components/docs/streaming-demo.tsx",
    videoPath: "",
  },
];
