---
title: "EngramEdit: Decoupled Knowledge Updates in LLMs through Conditional Memory"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.10533"
authors: ["Hongru Cai", "Ran Wei", "Wenjie Wang", "Chengfa Wu", "Ning Song", "Yongqi Li", "Wenjie Li"]
date: "2026-10-06T20:00:00.000Z"
score: 71
guid: "2610.10533"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.10533.png"
generated: "2026-10-08T19:08:02+05:30"
---

Conditional memory architectures such as DeepSeek Engram use input n-grams to look up learned embeddings, expanding the capacity of large language models (LLMs) with limited additional computation. Beyond model scaling, this architecture has demonstrated the potential to decouple factual knowledge storage from general-purpose computation, offering a promising route to updating factual knowledge while keeping the Transformer backbone fixed. Realizing this potential is challenging because different expressions of a fact may activate different n-gram embeddings, while updating shared embeddings can unintentionally change the model's predictions about other facts. We propose EngramEdit for decoupled knowledge updates through conditional memory. EngramEdit first computes target memory representations that make the model predict the updated fact across multiple expressions. It then jointly updates the shared n-gram embeddings to match these targets across expressions and edits, penalizing updates to frequently reused embeddings more strongly to preserve unrelated knowledge. Experiments show that EngramEdit enables independent factual knowledge updates through conditional memory, achieving near-perfect editing success. Revised knowledge is usable across unseen expressions and in multi-hop reasoning, with nearly three times the strongest baseline's accuracy under chain-of-thought (CoT) prompting. Unrelated knowledge and general capabilities are largely preserved even as factual updates accumulate. These findings show that EngramEdit turns conditional memory into an editable knowledge interface, extending its role beyond model scaling to support decoupled knowledge updates.
