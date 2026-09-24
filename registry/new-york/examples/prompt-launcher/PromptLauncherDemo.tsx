"use client";

import {
  PromptLauncherButton,
  PromptLauncherTextarea,
  PromptLauncherPromptBar,
  PromptLauncherSubmit,
  PromptLauncher,
} from "@/registry/new-york/components/prompt-launcher/PromptLauncher";
import { useState } from "react";

export function PromptLauncherDemo() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = () => {
    setIsLoading(true);
    setValue("");
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <PromptLauncher
        value={value}
        setValue={setValue}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onSubmit={onSubmit}
      >
        <PromptLauncherButton />
        <PromptLauncherPromptBar>
          <PromptLauncherTextarea />
          <PromptLauncherSubmit />
        </PromptLauncherPromptBar>
      </PromptLauncher>
    </div>
  );
}
