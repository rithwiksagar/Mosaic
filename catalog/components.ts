import { CatalogItem } from "@/types/CatalogItem";

export const componentCatalog: CatalogItem[] = [
  {
    id: 0,
    name: "Prompt Bar",
    slug: "prompt-bar",
    description:
      "A polished AI prompt input with slash commands for quickly switching between actions and tools.",
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
    description:
      "A compact action bar for quickly copying and interacting with AI-generated text.",
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
    description:
      "A compact prompt launcher that expands horizontally from a button into an AI input.",
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
    description:
      "A button that smoothly transforms into a prompt input with support for file attachments.",
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
    description:
      "Animated citations with direction-aware transitions for smoothly navigating referenced content.",
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
    description:
      "A smooth streaming text component for rendering AI responses as they arrive in real time.",
    category: "component",
    registryUrl: "https://brainframeui.tech/r/response-streaming.json",
    filePath: "components/ui/response-streaming.tsx",
    examplePath: "components/docs/streaming-demo.tsx",
    videoPath: "",
  },
];
