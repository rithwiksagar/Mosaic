import { MosaicPromptBarDemo } from "./prompt-bar/MosaicPromptBarDemo";
import { TextActionsDemo } from "./text-actions/TextActionsDemo";
import { PromptLauncherDemo } from "./prompt-launcher/PromptLauncherDemo";
import { PromptTriggerDemo } from "./prompt-trigger/PromptTriggerDemo";
import { CitationsDemo } from "./citations/CitationsDemo";
import { ResponseStreamingDemo } from "./response-streaming/ResponseStreamingDemo";

export const exampleRegistry = {
    "prompt-bar" : MosaicPromptBarDemo,
    "text-actions" : TextActionsDemo,
    "prompt-launcher": PromptLauncherDemo,
    "prompt-trigger": PromptTriggerDemo,
    "citations": CitationsDemo,
    "response-streaming": ResponseStreamingDemo
}