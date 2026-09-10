---
title: "Building the Harness Automatically: Self-Play in Code Distills a Text Harness for Black-Box Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09468"
authors: ["Yi Wu, Zheng Ren, Zhiyu Hu, Haochen Wang, Daryl Chang, Li Wei, Ting Wang, Zhen Li, Pooja Gupta, Nitin Jindal, Lukasz Heldt"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.09468v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09468v1 Announce Type: new Abstract: Can an agent learn a numerical search strategy through executable practice and then transfer that strategy as text? We study low-budget black-box optimization, where unaided language models remain well below strong classical optimizers. During development, an agent repeatedly writes and evaluates optimizer programs. It then distills the resulting program and practice record once into a 197-word primary Harness A, which is frozen before evaluation. Harness A reduces Gemini Flash regret by 48\% in an independent $N=30$ study ($p<.001$), enters the GP-BO performance range on the practice family, and lowers mean regret on all three held-out BBOB landscapes. The same text improves every tested Gemini executor and transfers to Claude Sonnet, reducing regret by 43\% and 49\% ($p\leq.005$). An independent end-to-end replication produces Harness B, a different program and text at the same performance tier. The same framework also attains the lowest regret on a sealed YouTube reward-tuning production benchmark. Executable practice is thus a viable way to discover a search policy, and language a portable medium for deploying it.
