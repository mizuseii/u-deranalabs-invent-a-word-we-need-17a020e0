// Invent a Word We Need: "Snackcident" — eating the whole bag while "just tasting one".
// Idea: a snack + accident portmanteau for the most universal kitchen crime:
// opening a bag to taste one chip and looking down to find the bag empty,
// your hand still moving on autopilot. The word sounds like what it means
// (snack + accident), the definition is one concrete scene everyone has
// lived, and the joke lands the moment the word is read — no explanation
// beyond the definition itself.
// Fresh vs the field (3,000 titles): the saturated coinages are tabnesia
// (103) and miswave (65), plus the generic "Invent A Word We Need" titles.
// "Snackcident" sits outside those clusters — a food word, not a tab or
// waving word, built from two everyday words fused cleanly.
// Verified 2026-11-26: entry is exactly 64 characters, one line, no trailing
// newline. Gate guard below enforces the 1–140 char rule at runtime so a bad
// edit can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Snackcident (n.): eating the whole bag while 'just tasting one.'";

if (line.length < 1 || line.length > 140) throw new Error("entry must be 1-140 chars");
if (line.includes("\n")) throw new Error("entry must be one line");
if (!/^Snackcident/.test(line)) throw new Error("entry must lead with the coined word");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
