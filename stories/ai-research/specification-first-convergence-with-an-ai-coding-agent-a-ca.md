---
title: "Specification-first convergence with an AI coding agent: a case study of dismantling a core architectural invariant across 189 files in a 717k-line codebase with no test oracle and no human code review"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.12440"
authors: ["Joel Abenhaim"]
date: "2026-08-11T20:00:00.000Z"
score: 80
guid: "2608.12440"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.12440.png"
generated: "2026-08-14T19:05:44+05:30"
---

An AI coding agent successfully refactored a 717,725-line production TypeScript codebase across 3,648 files, dismantling a core architectural invariant without human code review or test oracle. The agent used specification-first methodology: 14 refinement cycles auditing the specification against source code, atomic implementation with compile/test feedback, then 17 verification cycles. It corrected 201 defects across 189 modified files before any execution. Convergence was achieved when two consecutive verification passes returned zero findings. This demonstrates AI agents can autonomously handle large-scale architectural changes previously considered infeasible through incremental refactoring.
