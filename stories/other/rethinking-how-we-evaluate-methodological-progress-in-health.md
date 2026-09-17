---
title: "Rethinking How We Evaluate Methodological Progress in Health AI"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.18134"
authors: ["Florent Pollet, Matthew McDermott"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.18134v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.18134v1 Announce Type: new Abstract: Methodological progress in artificial intelligence (AI) for electronic health records (EHRs) depends on our ability to determine which algorithms work better, and under which conditions. However, such progress is thought to be hindered by difficulties in reproducibility and in defining clinically meaningful evaluation tasks. We empirically study these barriers by re-implementing 12 historical and recent algorithms within a shared evaluation framework and evaluating them on two clinical datasets, MIMIC-IV and NWICU. We compare two complementary task families: expert-authored clinically meaningful tasks and generated tasks defined from randomly sampled event codes and prediction horizons. We ask whether relative algorithms comparisons transfer across task families and datasets, whether residual task heterogeneity contains useful methodological structure, and what a controlled comparison reveals about progress over the last decade. We find that aggregate pairwise comparisons transfer strongly across evaluation settings, including from randomly generated tasks to clinically meaningful tasks and across datasets. At the same time, clinically meaningful tasks exhibit greater task-method interaction, providing preliminary evidence that task properties can help explain when particular modeling choices are advantageous. Finally, newer algorithms do not consistently outperform earlier approaches: gradient-boosted trees remain highly competitive when paired with a modern, wide and sparse representation of the EHR. Together, these results suggest that useful methodological knowledge may require less task engineering than commonly assumed, while highlighting the importance of understanding the structured heterogeneity that remains across tasks and methods.
