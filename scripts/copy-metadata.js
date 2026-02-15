import fs from "fs";
import path from "path";

const src = path.resolve("contracts/interfaces/metadata.json");
const dest = path.resolve("src/metadata.json");

try {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("✅ metadata.json copied");
  } else {
    console.log("⚠️ metadata.json not found, skipping");
  }
} catch (err) {
  console.error("❌ Copy failed:", err.message);
}
