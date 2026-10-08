---
title: "Are Parameter-Efficient Fine-tuning Methods Really Different?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09122"
authors: ["Yikuan Li, Pinyan Lu, Fanghui Liu"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.09122v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Parameter-efficient fine-tuning (PEFT) offers many parameterizations, yet their methodological and functional differences remain unclear. We compare six methods in language and diffusion models to examine how their parameterizations relate to task performance, forgetting, and changes in pretrained weight geometry. Motivated by the spectrum-preserving design of orthogonal fine-tuning (OFT), we first ask whether spectral preservation is itself important for adaptation and retention. We find that the selected LoRA-family methods also approximately preserve pretrained geometry, and that restoring their slightly drifted singular-value spectra largely preserves task performance, questioning the necessity of explicit geometric preservation. Beyond this, we observe that some methods exhibit distinct adaptation--retention trade-offs that vary across settings: LoRA most consistently limits forgetting at competitive performance, DoRA achieves higher mean task scores than LoRA in most comparisons, while PiSSA often incurs greater retention costs. Further intervention experiments suggest that while performance gains from different PEFT methods can be attributed to modifications in different groups of spectral components, we consistently find that restoring dominant rather than intermediate or trailing components produces the largest mean reduction in general-text NLL or base-image drift. Together, these results motivate evaluating geometric constraints through their functional consequences rather than preservation alone. Code is available at https://github.com/Kuaaannn/PEFT_methods.
