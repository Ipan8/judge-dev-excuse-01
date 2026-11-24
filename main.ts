import * as fs from "fs";
import * as path from "path";

// Make the AI Judge Laugh: Developer Excuses — make.fun entry.
// Writes the one-line developer excuse to /output/entry.txt.
const ENTRY: string = "It worked on my machine. Production is just jealous of my localhost."; // 68 chars, limit 200

function main(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(path.join("/output", "entry.txt"), ENTRY + "\n", "utf-8");
  console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
}

main();
