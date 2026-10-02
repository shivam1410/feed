---
title: "MOVE: Multimodal Open-world Verification and Expansion for Graph Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00268"
authors: ["Zekai Chen, Jiayang Xing, Xun Wu, Miao Zhang, Xunkai Li, Kairui Yang, Zhengyu Wu, Xu Wang, Rong-Hua Li, Guoren Wang"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2610.00268v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Multimodal graph learning faces a fundamental challenge: new classes may emerge after deployment, while models are trained with a fixed label space. Existing approaches typically detect unknown nodes and use LLMs to generate candidate class descriptions, but they do not determine whether existing classes are insufficient to cover these nodes or whether a generated class is reliable enough to expand the class space. Our empirical study reveals three challenges: multimodal information beyond individual modalities is required for unknown-node identification, LLM-generated class descriptions may not fully capture multimodal class characteristics, and directly adding candidate classes can introduce redundant categories. Based on these observations, we propose MOVE, a multimodal open-world class verification and expansion framework. MOVE identifies nodes that cannot be assigned to existing classes by jointly considering visual tokens, textual attributes, and graph context, leverages a multimodal LLM to generate candidate classes, and selectively expands the class space only when candidates are consistently supported by multimodal evidence without introducing unnecessary categories. Experiments demonstrate that MOVE achieves an average improvement of 11.87\% across unknown recognition, open-domain annotation, and downstream graph learning tasks.
