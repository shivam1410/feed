---
title: "You Don't Need Feature Learning to Do In-Context Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13431"
authors: ["Joseph Turnbull, Jamie Simon"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13431v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

How should we understand memorization vs. generalization in in-context learning (ICL) tasks, and when does one happen vs. the other? To investigate, we study how rotation-invariant kernel machines learn the ICL linear regression task proposed by Raventos et al. (2023). By decomposing the task in the kernel eigenbasis, we obtain a spectral picture of learning in this ICL setting. This picture reveals that as sample size grows, kernel machines learn successively-higher-degree components of the memorizing solution, which depend upon successively-higher-degree statistics of the training task set. The generalizing solution is approximately a low-degree truncation of the memorizing solution, and so the model first generalizes, then degrades into memorization as training proceeds. The takeaways are threefold. First, if this case is indicative, learning a "generalizing" solution on an ICL task is really just underfitting the memorizing solution! Second, the fact that kernel machines can generalize on this task means that feature learning is inessential to ICL. Third, transformers empirically trained to do ICL are shown to memorize tasks through the higher-order statistics of the training tasks that the kernel-based theory predicts, suggesting it applies even to models capable of feature learning.
