"use client";
import { TextActions } from "@/registry/new-york/components/text-actions/TextActions";
import { ArrowUp, Square } from "lucide-react";
import { useState } from "react";

const Message = `Somewhere, right now, a person is looking at the same moon you are, even though you may never meet. They might be celebrating something, worrying about tomorrow, listening to music, or simply staring out a window.It’s strange how enormous the world is, yet tiny moments can connect people without either of them knowing. A song, a smell after rain, an old photograph, or even the moon can become a quiet reminder that everyone is carrying a story you’ll probably never hear.And maybe that’s what makes ordinary life so interesting: there are billions of stories happening simultaneously, most of them completely invisible to us.And maybe that’s what makes ordinary life so interesting: there are billions of stories happening simultaneously, most of them completely invisible to us.
`;

export function TextActionsDemo() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(value: string) {
    if (!value.trim() || isLoading) return;

    setValue("");
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden">
      <div className="relative max-h-full max-w-3xl overflow-hidden px-2 text-justify text-[14px] lg:text-[16px] text-xl whitespace-pre-wrap mask-[linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)] lg:px-8">
        <TextActions
          actions={[
            {
              label: "Add to chat",
              onClick: (text) => {
                setValue(value + text);
              },
            },
            {
              label: "Ask AI",
              onClick: (text) => {
                handleSubmit(text);
              },
            },
          ]}
        >
          {Message}
        </TextActions>
      </div>
      <div className="absolute bottom-6 left-1/2 flex h-12 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 items-center rounded-full border border-neutral-200 bg-neutral-100 px-2 py-2.5">
        <textarea
          value={value}
          placeholder="Ask me anything..."
          onChange={(e) => setValue(e.target.value)}
          onSubmit={() => handleSubmit(value)}
          className="h-7 min-w-0 flex-1 self-center resize-none overflow-hidden px-2.5 text-left outline-none placeholder:text-neutral-300"
        ></textarea>
        <button
          type="button"
          onClick={() => handleSubmit(value)}
          disabled={isLoading}
          className="flex size-8 items-center justify-center rounded-full bg-sky-500 text-white disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Square className="size-4 fill-white" />
          ) : (
            <ArrowUp className="size-4" />
          )}
        </button>
      </div>
    </div>
  );
}
