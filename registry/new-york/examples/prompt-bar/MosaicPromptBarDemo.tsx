"use client";
import {
  PromptPayload,
  ToolMenu,
  ToolItem,
  PromptInput,
  PromptInputAttachments,
  PromptInputActions,
  PromptInputSubmit,
  PromptInputTextArea,
  PromptBar,
} from "@/registry/new-york/components/prompt-bar/MosaicPromptBar";
import { FileText, Lightbulb, PenLine, ImageIcon } from "lucide-react";
import { useState } from "react";

const tools = [
  {
    id: "write",
    title: "Write",
    description: "Draft or refine your content",
    icon: PenLine,
    color: "text-blue-500",
  },
  {
    id: "analyze",
    title: "Analyze",
    description: "Explore ideas and find insights",
    icon: Lightbulb,
    color: "text-amber-500",
  },
  {
    id: "summarize",
    title: "Summarize",
    description: "Turn long text into key points",
    icon: FileText,
    color: "text-emerald-500",
  },
  {
    id: "create_image",
    title: "Create Image",
    description: "Generate an image from a prompt",
    icon: ImageIcon,
    color: "text-red-500",
  },
];

export function MosaicPromptBarDemo() {
  const [payload, setPayload] = useState<PromptPayload>({
    prompt: "",
    tool: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (submittedPayload: PromptPayload) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <PromptBar
      payload={payload}
      setPayload={setPayload}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      tools={tools}
    >
      <ToolMenu>
        <ToolItem />
      </ToolMenu>

      <PromptInput className="">
        <PromptInputTextArea placeholder="Type / to get started" />
        <PromptInputActions>
          <PromptInputAttachments />
          <PromptInputSubmit />
        </PromptInputActions>
      </PromptInput>
    </PromptBar>
  );
}
