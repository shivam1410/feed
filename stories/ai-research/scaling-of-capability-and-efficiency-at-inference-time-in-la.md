---
title: "Scaling of Capability and Efficiency at Inference Time in Large Reasoning Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27166"
authors: ["Moritz Laber, Zohair Shafi, Germans Savcisens, Brennan Klein, Matteo Chinazzi, Samuel V. Scarpino, Albert-L\\'aszl\\'o Barab\\'asi, Tina Eliassi-Rad"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.27166v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27166v1 Announce Type: new Abstract: Capability and efficiency are two key dimensions of reasoning in large language models (LLMs). Capability refers to the ability to solve a given problem correctly, whereas efficiency refers to the ability to do so with limited resources. When LLMs use Chain-of-Thought (CoT) reasoning to solve problems of controlled hardness, both the number of problems solved correctly and the number of tokens required to reach a correct answer depend on problem hardness and model size. However, how these factors jointly shape capability and efficiency remains poorly understood. Here, we use hierarchical Bayesian models to evaluate the capability and efficiency of LLMs from the DeepSeek-R1-Distill model family across four classes of arithmetic and algorithmic reasoning problems. At a fixed model size, the probability of correctly solving an instance decays approximately exponentially with instance size, our proxy for problem hardness. The decay scale grows sublinearly with model size, indicating that larger models are more capable, but that capability gains diminish with scale. Output length grows as a power law with instance size, which serves as a proxy for difficulty. However, the parameters of this power law do not vary systematically with model size, suggesting that larger models do not become more efficient. Together, these findings reveal potential limitations of naive scaling as a strategy for developing more capable AI systems: capability improves with diminishing returns, while efficiency shows little to no improvement.
