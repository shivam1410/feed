---
title: "VERITAS: Verifier-Guided Proof Search for Zero-Shot Formal Theorem Proving"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19399"
authors: ["Manish Acharya, Zhenyu Liao, Yueke Zhang, Kevin Leach, Yu Huang, Yifan Zhang"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.19399v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19399v1 Announce Type: new Abstract: LLM-based formal provers often collapse rich verifier signals (syntax errors, type mismatches, partial goal progress) into a binary pass/fail bit. We present VERITAS, a zero-shot framework that routes every verifier signal back into proof search through a two-phase protocol: Best-of-N sampling first, then a critic-guided MCTS pass that ingests Phase 1 failures as explicit negative examples. The protocol preserves every theorem solved by its own Phase 1 sweep, so Phase 2's additional solves are attributable to feedback-driven exploration. VERITAS reaches 40.6% on miniF2F (vs. an independently run Best-of-5 at 36.9%, Portfolio 26.2%) and 7.3% on VERITAS-CombiBench, a 55-theorem combinatorics benchmark we release on which Best-of-5 (1.8%) falls below Portfolio (3.6%), exposing that unguided sampling hurts when correct lemma names must be recovered iteratively from verifier feedback. Artifacts are available on GitHub.
