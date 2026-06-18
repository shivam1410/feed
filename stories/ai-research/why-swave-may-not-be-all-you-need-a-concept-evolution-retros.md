---
title: "Why SWAVE May Not Be All You Need:A Concept-Evolution Retrospective on Complex-Valued Recurrent Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18324"
authors: ["Ramprasath Ganesaraja, Swathika N, Sahil Dilip Panse"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2606.18324v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18324v1 Announce Type: new Abstract: SWave is a complex-valued recurrent language model (169.26M parameters, D=384, L=16, T=2048) trained on FineWeb-Edu using 2xH100 NVL. It was designed around three founding premises: that representing language as complex waves rather than real-valued numbers enables richer information encoding; that a Cayley-parameterised unitary transition provides a mathematical guarantee against state decay or explosion; and that a hidden state which rotates rather than shrinks preserves signal integrity over arbitrarily long contexts. The core of SWave evolved substantially across three development phases. The Resonance Head was found to structurally admit imaginary-channel collapse as a global loss minimum (a failure mode we term cos-domination collapse) and was superseded by an untied head with independent real and imaginary embedding tables from the Phase-Associative Memory (PAM) architecture. This resolved the degenerate minimum and enabled stable 200,000-step training (best-step PPL 22.0 at step 89,861). ComplexNorm and the Wave Propagation Scan proved load-bearing throughout all three phases and were retained to the final architecture. ProtectGatedScan was reframed as a structural prior rather than a learned behaviour. The four multi-scale retention concepts showed no measurable improvement under controlled evaluation and were found non-load-bearing. The ComplexGatedUnit was superseded by a real-valued squared-ReLU channel mixer with fewer parameters. The auxiliary training objectives showed no benefit once structural constraints were resolved. The investigation yields a formal characterisation of cos-domination collapse, a parallel scan with a log-space backward pass for numerical stability, six transferable engineering principles for complex-valued recurrent training, and a plan-to-code traceability methodology for catching structural divergences that conventional test suites miss.
