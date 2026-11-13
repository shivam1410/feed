---
title: "Poison-then-Hide: Finetuning-Activated Backdoor Attack on Pretrained Vision Encoders"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14970"
authors: ["Qixuan Jin, Abinitha Gourabathina, Vinith Menon Suriyakumar, Walter Gerych, Marzyeh Ghassemi"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14970v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Backdoor attacks threaten the integrity of machine learning models by allowing attackers to control model behavior through triggers. Models can be compromised during finetuning by backdoor attacks through either poisoned data or adversarial training objectives. Because existing finetuning-activated attacks assume limited domain shift or frozen encoder layers, they often fail under full-model finetuning. We target a stealthy finetuning-activated attack where a dormant backdoor is implanted in a pretrained encoder, and later activated by finetuning on clean downstream data. We propose Poison-then-Hide, a novel attack that remains effective when the entire model is finetuned in a domain transfer. Our approach consists of three components: trigger optimization, base encoder poisoning, and targeted unlearning to conceal the backdoor. We evaluate our method on six datasets and three model architectures, and achieve state-of-the-art (up to 97%) attack success rates. We find that jointly learning the benign target task alongside the poisoning is critical to the attack's success. We demonstrate standard detection and mitigation defenses cannot fully remove the backdoor, which can reappear after benign finetuning.
