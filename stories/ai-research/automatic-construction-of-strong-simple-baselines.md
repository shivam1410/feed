---
title: "Automatic Construction of Strong Simple Baselines"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40700"
authors: ["Caleb N. Ellington, Jiaqi Wang, Sohan Addagudi, Elijah Cole"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 42
guid: "oai:arXiv.org:2610.40700v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

To rigorously establish the value of a novel deep learning method, it must be compared against appropriate baselines. As deep learning has become increasingly common in the physical and life sciences, there have been numerous cases in which apparent progress has turned out to be an artifact of omitted or missing baselines. In this work, we investigate whether this problem can be mitigated by using large language models to automate the construction of baselines. We assemble 36 supervised classification and regression tasks from peer-reviewed studies in Nature, Science, and Cell-family journals that investigate novel deep learning methods for scientific applications. We then use a language model to construct simple baselines for each task. These automatically constructed baselines are strong, recovering a median of 95.5% (mean 85.7%) of the gap between a trivial predictor and the score of the deep learning model. The median simple baseline matches or exceeds the performance of the deep learning model in 12 studies. We further examine the variation across scientific domains and publication venues and we characterize the effects of test-time compute and access to different levels of study context. As human peer review has struggled to keep up with the rapidly increasing volume of research articles in recent years, our results suggest that automated baseline construction is a practical and scalable check on deep learning contributions in the physical and life sciences.
