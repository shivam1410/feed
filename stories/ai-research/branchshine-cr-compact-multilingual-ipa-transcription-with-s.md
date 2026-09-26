---
title: "BranchShine-CR: Compact Multilingual IPA Transcription with Self-Conditioned CTC and Consistency Regularization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.29069"
authors: ["Nikhil Navas, Sergio Chevtchenko, Talisson Damiao, Saeed Afshar"]
date: "Sat, 26 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.29069v1"
image: ""
generated: "2026-09-26T20:37:01+05:30"
---

We introduce BranchShine-CR, a 25M-parameter model for multilingual transcription into the International Phonetic Alphabet (IPA). It combines log-mel features, a rotary-position E-Branchformer encoder, intermediate self-conditioned connectionist temporal classification (CTC), and consistency regularization across augmented views. On 16,646 shared IPApack++ test utterances, it achieves 4.47% IPA character error rate, a 22.3% relative reduction from ZIPA-CTC-NS, with approximately one-twelfth as many parameters while being trained from scratch. BranchShine-CR also outperforms a similarly sized NeMo Conformer baseline across all 41 dataset language labels. Ablation studies indicate the individual components synergetically acting in model performance contribution. These findings support compact IPA recognition capabilities under limited compute budget, for applications in low-resource on-device pronunciation assessment.
