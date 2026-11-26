import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, human and specific: the "quick summary" that outgrew the thing it summarised.
const entry = "I'm sorry I said 'here's a quick summary' and then gave you a document longer than the thing you asked me to summarise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
