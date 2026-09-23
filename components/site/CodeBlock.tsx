import { codeToHtml } from "shiki";

export default async function CodeBlock({ code }: { code: string }) {
  const html = await codeToHtml(code, {
    lang: "tsx",
    themes: { light: "github-light-default", dark: "github-dark-default" },
  });
  return <div 
  dangerouslySetInnerHTML={{ __html: html }} />;
}
