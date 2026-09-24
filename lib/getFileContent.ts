import fs from "fs/promises";
import path from "path";

export default async function GetFileContent(filePath: string) {
  const code = await fs.readFile(filePath, "utf-8");
  return code;
}
