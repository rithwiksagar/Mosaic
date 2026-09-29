"use client";
import { useState } from "react";
import { TextActions } from "../ui/textactions";

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

    </div>
  );
}
