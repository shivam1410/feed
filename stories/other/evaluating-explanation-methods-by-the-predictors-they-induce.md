---
title: "Evaluating Explanation Methods by the Predictors They Induce"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.20058"
authors: ["Jacob Selb{\\ae}k, Hugo L. Hammer"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.20058v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.20058v1 Announce Type: new Abstract: Explanations of machine learning models are usually judged by criteria that are hard to compare. We propose a simpler test: if an explanation really describes how a model uses its features, it should be possible to rebuild the model's predictions from it. We turn each explanation into a predictor by reading each feature's effect and adding them up, and measure how well that predictor reproduces the model on unseen data. Nothing is fitted, so the score reflects the explanation itself. The test applies to any explanation that can be written as a function of the features; we demonstrate it on partial dependence plots (PDP), accumulated local effects (ALE), SHAP and LIME. We prove that summing partial dependence curves gives the best possible additive summary of a model when its features are independent, and that this fails when they are dependent. Across 13 real datasets and 9 synthetic designs and four model families, which method scores best depends entirely on feature dependence: where features are independent SHAP is slightly worse than PDP, exactly as the theory predicts; on dependent real data SHAP leads. Some widely used quality metrics even prefer a damaged explanation to an intact one.
