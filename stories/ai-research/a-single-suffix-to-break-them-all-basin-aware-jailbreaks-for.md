---
title: "A Single Suffix to Break Them All: Basin-Aware Jailbreaks for Merged Model Families"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26506"
authors: ["Yu Zhe, Yixin Tan, Junhao Wei, Wang Chen"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.26506v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26506v1 Announce Type: new Abstract: Model merging enables combining multiple fine-tuned models without additional training, but its safety implications remain poorly understood. Prior work primarily attributes merging risks to unsafe constituent models, implicitly assuming that merging individually aligned models preserves safety. In contrast, we show that model merging reveals a previously overlooked jailbreak risk rooted in the pretrained foundation model, even when all constituent models are individually safety-aligned. Motivated by this observation, we study a new threat setting where an attacker constructs jailbreak prompts that generalize across merged models sharing the same pretrained backbone, without access to the exact merging coefficients or constituent checkpoints. To exploit this phenomenon, we propose \textbf{Basin-Aware Jailbreak (BAJ)}, which formulates jailbreak generation as a min--max optimization over the merging space to produce transferable adversarial suffixes across merged model families. Experiments across diverse backbones and merging settings show that BAJ achieves consistently high transfer success rates and remains effective under existing defenses.
