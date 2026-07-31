---
title: "CADENCE: Closing the Reasoning Gap via Coverage-Adaptive On-Policy Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.16955"
authors: ["Satyam Kumar", "Saurabh Jha"]
date: "2026-07-17T20:00:00.000Z"
score: 80
guid: "2607.16955"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.16955.png"
generated: "2026-07-31T19:06:14+05:30"
---

CADENCE fixes three failure modes in on-policy knowledge distillation: cold-start collapse (students assigning near-zero probability to preferred tokens), state-agnostic divergence scheduling (ignoring coverage state), and binary reward sparsity (discarding partial-credit information). It uses a coverage-adaptive framework with per-token KL mixtures and six components (COVA, FTB, CCD, LAP, EMR, BSD). Distilling a 0.5B student from a 1.5B teacher achieves 69.8% pass@1 on GSM8K (up from 48.7% baseline, closing 63.2% of teacher gap). This enables efficient reasoning transfer to compact language models.
