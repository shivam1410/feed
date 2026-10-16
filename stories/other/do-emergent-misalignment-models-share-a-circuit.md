---
title: "Do Emergent Misalignment Models Share a Circuit?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20887"
authors: ["Muhammad Haseeb, Muhammad Tahir"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20887v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Fine-tuning language models on narrowly defined harmful tasks can induce emergent misalignment (EM) across unrelated domains. While prior work has identified shared misalignment-associated representations across independently fine-tuned models, it remains unclear whether these models rely on common computational components. We investigate this question using three LoRA fine-tunes of Qwen2.5-3B-Instruct trained on harmful medical advice, risky financial advice, and extreme-sports recommendations. Using direction-based activation tracing, we identify three attention-head locations shared among the five highest-ranked heads of all three organisms. Replacing each organism's five selected head contributions with Base contributions reduces free-generation EM from 38.9% to 22.9% for medical, 50.7% to 12.5% for finance, and 41.7% to 11.1% for sports, outperforming layer-matched random interventions without reducing judged coherence. Cross-organism activation transfer further shows that the shared heads exhibit partially interchangeable effects on fixed-response preference. These findings provide evidence that representational convergence in EM extends to shared, causally relevant attention-head components within a common model architecture.
