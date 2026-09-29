import { CitationsDemo } from "./citations-demo";
import { MosaicPromptBarDemo } from "./prompt-bar-demo";
import { PromptLauncherDemo } from "./prompt-launcher-demo";
import { PromptTriggerDemo } from "./prompt-trigger-demo";
import { ResponseStreamingDemo } from "./streaming-demo";
import { TextActionsDemo } from "./text-actions-demo";

export const exampleRegistry = {
  "prompt-bar": MosaicPromptBarDemo,
  "text-actions": TextActionsDemo,
  "prompt-launcher": PromptLauncherDemo,
  "prompt-trigger": PromptTriggerDemo,
  "citations": CitationsDemo,
  "response-streaming": ResponseStreamingDemo,
};