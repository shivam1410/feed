---
title: "ReMedI: Inference-Time Refinement and Self-Distillation for Controllable Molecular Optimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.32103"
authors: ["Jia Yi Zhang, Shivanshu Shekhar, Allison McLevige, Tong Zhang"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.32103v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

In drug development, lead optimization must improve competing properties, such as increasing permeability and reducing toxicity, while limiting scaffold changes that could compromise the lead's potency. RL-based post-training, such as C-MORAL, addresses this problem by fine-tuning molecular language models to directly optimize molecular leads for objectives of interest, which relies on expensive task-specific datasets and faces challenges in achieving multi-objective optimization (MOO). We argue a pre-trained model may already contain useful molecular edits that zero-shot generation cannot efficiently reach. Motivated by the limited search capabilities of zero-shot generation, we develop an efficient Metropolis-Hastings search strategy to better explore the proposal distribution. We propose ReMedI, which uses the molecular language model as a base proposer for inference-time alignment. Given a lead and a set of multi-objective tasks, the model proposes edits conditioned on the current molecule, while Metropolis--Hastings refinement guides sequential edits under an objective for property improvement, preservation, and lead similarity. On both C-MuMOInstruct and SMDD benchmarks, refinement improves frozen base models across three backbones, reaching significantly higher multi-objective optimization success rates compared to baselines. These search traces can then distilled into the base model which improves zero-shot generation and subsequent search using approximately 7.8 times less training molecular leads than that of C-MORAL. ReMedI achieves approximately 2.8 times the strict-success coverage of RL baseline C-MORAL, including on out-of-distribution tasks, with matched lead-relative similarity.
