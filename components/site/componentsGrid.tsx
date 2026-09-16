import { component } from "@/types/component";
import ComponentCard from "./ComponentCard";


const Components: component[] = [
  {
    title: "Mosaic Prompt Bar",
    description: "Access AI tools with the / command.",
    videoPath: "/previewVideos/PromptBar.webm",
  },
  {
    title: "Mosaic Text Actions",
    description: "Select text to access actions like add to chat or ask AI.",
    videoPath: "/previewVideos/TextActions.webm",
  },
  {
    title: "Mosaic Ask AI",
    description: "Expand a button into a full AI prompt bar.",
    videoPath: "/previewVideos/AskAI001.webm",
  },
  {
    title: "Mosaic Ask AI 002",
    description: "Ask AI with support for file attachments.",
    videoPath: "/previewVideos/AskAI002.webm",
  },
  {
    title: "Mosaic Citations",
    description: "Interactive citations for exploring AI-generated sources.",
    videoPath: "/previewVideos/Citations.webm",
  },
];

export default function ComponentsGrid() {
  return (
    <div className="w-full mt-60">
      <h2 className="text-2xl md:text-4xl text-center font-medium tracking-tighter">
        Components
      </h2>
      <h6 className="mt-2 md:mt-4 text-sm md:text-md text-center tracking-tighter text-neutral-500">
        10 carefully crafted components for building modern AI interfaces
        <span className="block">Distributed Via Shadcn</span>
      </h6>
      <div className="mt-8 mb-2 mx-1 grid grid-cols-1 md:grid-cols-3 gap-2">
          {Components.map((component, index)=>(
            <div key={index}>
            <ComponentCard {...component}/>
            </div>
          ))}
      </div>
    </div>
  );
}
