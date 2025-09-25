// scripts/gen-images.ts
import { readdirSync, writeFileSync } from "fs";
import { join, parse } from "path";

const imgDir = join(process.cwd(), "src/assets/img");
const files = readdirSync(imgDir);

// lấy tên file bỏ đuôi để làm key
const keys = files.map((f) => parse(f).name);

// Tạo type ImageType
const typeDef = `export type ImageType = ${keys
  .map((k) => `'${k}'`)
  .join(" | ")};\n`;

// Tạo object IMAGES
const record = `export const IMAGES: Record<ImageType, string> = {\n${keys
  .map((k) => `  ${k}: "src/assets/img/${k}${parse(files.find(f => parse(f).name === k)!).ext}",`)
  .join("\n")}
};\n`;

writeFileSync(
  join(process.cwd(), "src/constants/images.ts"),
  `${typeDef}\n${record}`
);

console.log("✅ Generated src/constants/images.ts");
