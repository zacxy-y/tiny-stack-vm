// A valid entry that runs nothing: for every program it writes an empty stdout.bin and exit code 0, in the stated
// format and worth almost no points. The ISA is generator/subject/ISA.md in the kit; the reference VM the expected
// answers come from is generator/subject/vm.mjs. Local run on the practice set:
//   mkdir -p out && MAKEFUN_INPUT_DIR=practice/input MAKEFUN_OUTPUT_DIR=out node starter/main.ts
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const I = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
for (const id of readdirSync(I).sort()) {
  mkdirSync(join(O, id), { recursive: true });
  writeFileSync(join(O, id, 'stdout.bin'), '');
  writeFileSync(join(O, id, 'exit.txt'), '0\n');
}
