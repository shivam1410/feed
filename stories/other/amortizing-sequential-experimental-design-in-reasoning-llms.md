---
title: "Amortizing Sequential Experimental Design in Reasoning LLMs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20832"
authors: ["Anita Kriz, Antonin Berthon, Nicol\\'as Astorga, Mihaela van der Schaar"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20832v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Despite their extensive pretraining knowledge and strong reasoning capabilities, large language models (LLMs) struggle to adaptively gather information in experimental design tasks. We study how to amortize sequential Bayesian experimental design (BED) into an LLM by explicitly training the reasoning that guides action selection using information-gain rewards. Our approach specifies the experimental generative model independently of the LLM's own beliefs, allowing us to optimize expected information gain under a model of our choosing. We investigate the design choices for amortization, including alternative generative-model constructions, reward estimation, hypothesis-space specification, multi-step objectives, and computational costs relative to training- and inference-time BED baselines. On Twenty Questions, the resulting policies improve information acquisition and task performance, outperform inference- and training-time BED baselines at substantially lower computational cost, and generalize to unseen categories. We further demonstrate positive transfer from Twenty Questions training to Medi-Q, a real-world clinical dialogue benchmark. These results suggest that information gathering can be learned as a generalizable reasoning skill in LLMs.
