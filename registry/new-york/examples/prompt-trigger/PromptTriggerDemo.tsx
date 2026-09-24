"use client";


import { useState } from "react";
import { PromptTrigger, PromptTriggerActions, PromptTriggerAttachments, PromptTriggerButton, PromptTriggerPromptBar, PromptTriggerSubmit, PromptTriggerTextarea } from "../../components/prompt-trigger/PromptTrigger";

export function PromptTriggerDemo() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = () => {
    setIsLoading(true);
    setValue("");
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <PromptTrigger
        value={value}
        setValue={setValue}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onSubmit={onSubmit}
      >
        <PromptTriggerButton />
        <PromptTriggerPromptBar>
          <PromptTriggerTextarea />
          <PromptTriggerActions>
            <PromptTriggerAttachments />
            <PromptTriggerSubmit />
          </PromptTriggerActions>
        </PromptTriggerPromptBar>
      </PromptTrigger>
    </div>
  );
}
