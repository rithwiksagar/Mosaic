import fs from "fs/promises";
import path from "path";

export default async function GetFileContent(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);

  const code = await fs.readFile(fullPath, "utf-8");

  return code;
}