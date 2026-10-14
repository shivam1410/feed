---
title: "SHELDON: Reasoning through Dual Search over Hypothesis and Observation Spaces"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.18025"
authors: ["Harshit Joshi", "Priyank Shethia", "Monica S. Lam"]
date: "2026-10-12T20:00:00.000Z"
score: ""
guid: "2610.18025"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.18025.png"
generated: "2026-10-14T19:00:21+05:30"
---

Test-time scaling has enabled LLMs to solve increasingly complex reasoning, discovery, and optimization tasks. However, existing approaches often gather observations while seeking evidence for current hypotheses, then generate new hypotheses conditioned on those hypotheses and their associated evidence. This couples observation discovery to existing hypotheses, favoring local refinements over exploration of unknown hypotheses regions. Inspired by the hypothetico-deductive method (Hempel, 1945) and dual-space models of scientific discovery (Klahr & Dunbar, 1988), we introduce SHELDON, a scientific reasoning harness that separately represents and jointly explores hypothesis and observation spaces. By actively seeking new observations along with new hypotheses, SHELDON can discover observations that its current hypotheses do not explain. These unexplained observations expose gaps in its understanding, motivate new investigations, and guide the generation of hypotheses beyond refinements of existing ones. Across diagnosis, abstract reasoning, and optimization benchmarks, SHELDON outperforms evaluated baselines by up to 26.7 points. Additional analysis shows that SHELDON generates up to 4.5x more novel solutions.
