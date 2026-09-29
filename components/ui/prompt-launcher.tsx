"use client";

import { cn } from "@/lib/utils";
import { ArrowUp, AudioWaveform, Square } from "lucide-react";
import { AnimatePresence, motion, Transition } from "motion/react";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type PromptLauncherProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
  onSubmit: () => void;
};

type PromptLauncherContextValue = Omit<PromptLauncherProps, "children"> & {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  multiLine: boolean;
  setMultiLine: React.Dispatch<React.SetStateAction<boolean>>;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
};

const transition: Transition<any> = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1],
};

const PromptLauncherContext = createContext<PromptLauncherContextValue | null>(
  null,
);

function useMosaicContext() {
  const context = useContext(PromptLauncherContext);
  if (!context) {
    throw new Error(
      "PromptLauncher compound components must be used inside PromptLauncher",
    );
  }
  return context;
}

function PromptLauncher({
  value,
  setValue,
  isLoading,
  setIsLoading,
  children,
  className,
  onSubmit,
}: PromptLauncherProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);
  const [multiLine, setMultiLine] = useState(false);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsExpanded(false);
        setMultiLine(false);
        setValue("");
      }
    }

    window.addEventListener("pointerdown", handleClickOutside);

    return () => {
      window.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isExpanded) {
      textareaRef.current?.focus();
    }
  }, [isExpanded]);

  return (
    <PromptLauncherContext.Provider
      value={{
        value,
        setValue,
        isLoading,
        setIsLoading,
        isExpanded,
        setIsExpanded,
        multiLine,
        setMultiLine,
        textareaRef,
        onSubmit,
      }}
    >
      <div ref={containerRef} className={cn(className)}>
        <motion.div
          layout
          onClick={() => {
            if (!isExpanded) setIsExpanded(true);
          }}
          transition={{
            layout: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
          }}
          style={{
            width: isExpanded ? "min(500px, calc(100vw - 2rem))" : "auto",
          }}
          className={cn(
            "bg-neutral-100 dark:bg-neutral-800 dark:text-white font-medium pl-4 pr-3 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.2),0_8px_20px_rgba(0,0,0,0.25)]",
            multiLine ? "rounded-2xl" : "rounded-full",
            !isExpanded && "cursor-pointer",
          )}
        >
          {isExpanded
            ? Children.toArray(children)[1]
            : Children.toArray(children)[0]}
        </motion.div>
      </div>
    </PromptLauncherContext.Provider>
  );
}

function PromptLauncherButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-between text-lg gap-2 cursor-pointer",
        className,
      )}
    >
      <motion.span layoutId="ask-ai" transition={transition}>
        Ask AI
      </motion.span>
      <motion.span layoutId="ask-ai-button" transition={transition}>
        <AudioWaveform className="size-7 bg-blue-500 p-1 rounded-full text-neutral-100" />
      </motion.span>
    </button>
  );
}

function PromptLauncherPromptBar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isExpanded } = useMosaicContext();
  return (
    <AnimatePresence mode="popLayout">
      {isExpanded && (
        <div
          className={cn(
            "grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-end gap-2",
            className,
          )}
        >
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}

function PromptLauncherTextarea({ className }: { className?: string }) {
  const { value, setValue, textareaRef, setMultiLine, onSubmit, isExpanded } =
    useMosaicContext();

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "0px";
    const height = textarea.scrollHeight;
    textarea.style.height = `${Math.min(height, 256)}px`;
    setMultiLine(height > 32);
  }, [value, isExpanded, setMultiLine, textareaRef]);

  return (
    <div className="relative flex min-w-0 min-h-8 items-center">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) onSubmit();
          }
        }}
        className={cn(
          "w-full min-w-0 h-8 max-h-64 py-1 px-3 leading-6 resize-none outline-none dark:text-neutral-100 overflow-y-auto [scrollbar-width:none] mask-[linear-gradient(to_bottom,transparent,black_4%,black_98%,transparent)]",
          className,
        )}
      />
      {value === "" && (
        <motion.span
          layoutId="ask-ai"
          transition={transition}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 font-normal dark:text-neutral-600"
        >
          Ask AI
        </motion.span>
      )}
    </div>
  );
}

function PromptLauncherSubmit({ className }: { className?: string }) {
  const { isLoading, onSubmit, value } = useMosaicContext();

  const handleSubmit = () => {
    if (!value.trim() || isLoading) return;
    onSubmit();
  };

  return (
    <motion.button
      type="button"
      layoutId="ask-ai-button"
      transition={transition}
      onClick={handleSubmit}
      disabled={!value.trim()}
      className={cn(
        "shrink-0 bg-blue-500 rounded-full disabled:cursor-not-allowed",
        className,
      )}
    >
      {isLoading ? (
        <Square className="size-4 md:size-8 fill-white cursor-pointer text-white p-2" />
      ) : (
        <ArrowUp className="size-7 md:size-8 cursor-pointer p-1.5 text-white" />
      )}
    </motion.button>
  );
}

export {
  PromptLauncher,
  PromptLauncherButton,
  PromptLauncherPromptBar,
  PromptLauncherTextarea,
  PromptLauncherSubmit,
};
