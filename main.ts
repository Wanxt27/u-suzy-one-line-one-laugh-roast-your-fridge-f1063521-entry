// One Line, One Laugh: Roast Your Fridge — make.fun entry
// Node 22, stdlib only. Writes a single original roast line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge hums all night like a landlord collecting rent, guarding leftovers so old they now qualify for senior discounts in the back.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(
    `roast line must be 1-200 characters, got ${chars}`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("roast line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`Wrote ${chars} characters to /output/entry.txt`);
