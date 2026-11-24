# Tiny Stack VM — make.fun ISA v1

[![tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/{owner}/{repo}/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/{owner}/{repo}/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)

A stack virtual machine implementing make.fun's tiny stack ISA v1 (32-bit wrapping arithmetic, 256-value stack, 256-word memory, 40 programs per set).

## ISA Features
- 32-bit two's complement integers with wrapping arithmetic
- 256-value data stack, 64-entry call stack, 256-word memory
- 30 opcodes: arithmetic, logic, bitwise, shifts, branches, calls, memory, I/O
- 11 trap codes for error handling
- 1,000,000 step limit, 65,536 output limit

## Run
```bash
mkdir -p out
MAKEFUN_INPUT_DIR=/path/to/input MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Repo Size
- ≤ 8,192 bytes total (all files)
- Node 22, standard library only

---

*Built for [make.fun](https://make.fun) bounty `tiny-stack-vm-01-run-20261122`. Referral: nz1f4wjw*