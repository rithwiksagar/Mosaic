import fs from "fs/promises";
import path from "path";

export default async function GetFileContent(filePath: string) {
  const Path = path.join(process.cwd(), "registry", "new-york", filePath);
  const code = await fs.readFile(Path, "utf-8");
  return code;
}
