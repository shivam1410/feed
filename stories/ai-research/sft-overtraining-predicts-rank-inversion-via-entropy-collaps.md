---
title: "SFT Overtraining Predicts Rank Inversion via Entropy Collapse Under RLVR"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18487"
authors: ["Siddharth Aphale, Kelly Liu"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.18487v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18487v1 Announce Type: new Abstract: The standard heuristic of selecting the SFT checkpoint with the highest pass@1 for GRPO can fail when SFT compresses the rollout distribution. For binary rewards, the expected within group advantage variance is $p(1{-}p)(g{-}1)/g$; when early GRPO drives $p$ below $p^*(g)$, most groups have identical rewards and provide no group relative signal. We study SFT depth ladders for Qwen2.5-Coder-3B and DeepSeek-Coder-6.7B. We test Qwen2.5-Coder-3B across five depths and three seeds, and DeepSeek-Coder-6.7B across four matched depths and three seeds. On Qwen, pre RL pass@1 rises with SFT depth, but peak GRPO pass@10 falls from $0.806$ to $0.481$ (3 seed mean, $n{=}20$); pre RL entropy is positively associated with the GRPO outcome ($\rho{=}{+}0.69$). On DeepSeek, pass@1 remains far above $p^*(8){=}0.083$, and GRPO outcomes compress rather than invert. A two stage diagnostic, combining pre RL entropy triage with an early GRPO entropy monitor, flags high risk checkpoints and can stop failing runs early. Simple KL to reference regularisation and label smoothing variants do not rescue the collapsed Qwen checkpoint in our setting, suggesting the failure is not a trivial GRPO hyperparameter artefact.
