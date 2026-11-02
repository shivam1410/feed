---
title: "Do Language Models Know What Compelling Scientific Evidence Looks Like?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41015"
authors: ["Conor Igoe, Gabriel Grand, Zane Koch, Albert Bou, Eli Moss, Michaela M. Hinks, Samuel G. Rodriques, Andrew White, Siddharth Narayanan"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 42
guid: "oai:arXiv.org:2610.41015v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Expert scientists excel at weighing empirical findings from multiple sources that vary in both statistical reliability and epistemic relevance. To what extent are language models, which are increasingly driving autonomous discovery systems, capable of such evidence deliberation? We introduce EDB-Bio, a scientific reasoning benchmark curated from real-world data in three biological domains: drug-perturbation transcriptomics, CRISPR screens, and human genome-wide association studies (GWAS). Each of EDB-Bio's 96k episodes presents a sequence of experimental results from published studies and asks the model to predict the probability that a target hypothesis is true. Out-of-the-box, open-weight and frontier models alike demonstrate systematic underconfidence and attain Brier scores comparable to a trivial base-rate forecaster. Post-training against strictly proper scoring rules significantly improves both calibration and discrimination. This calibration pays off downstream: in a sequential experiment selection task, our Ibis0 model is 2.5 times more efficient than the best frontier model. Throughout, quantifying evidence weights as Bayes factors reveals how models update their beliefs over time, whether they agree with expert biologists on relevance, and where they exhibit inconsistencies and biases. Our work extends calibration training and uncertainty analysis to a realistic scientific forecasting setting with applications to human cancer biology. We release all code, data, and trained models.
