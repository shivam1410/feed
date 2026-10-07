---
title: "Will the Judge Flip? Predicting Position-Sensitive LLM Judgments from Residual Stream Activations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07115"
authors: ["Hashmath Shaik, Gnaneswar Villuri, Alex Doboli"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.07115v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

The order in which candidate responses are presented can change an LLM judge's verdict. Detecting such a position flip ordinarily requires judging each pair in both orders, which doubles the number of judgments. We investigate whether residual stream activations recorded immediately before the initial verdict can predict a flip. We use nested grouped cross-validation to evaluate regularized linear probes on 534 JudgeBench pairs for three Qwen3 judges and Llama-3.1-8B. The linear probes achieve AUROCs of .621-.850 and outperform a combined baseline that uses verbalized confidence, verdict-label logits, response lengths, and the judge's initial choice by .062-.113 AUROC. Linear probes trained on JudgeBench and then frozen achieve AUROCs of .685-.853 on 1,802 MT-Bench comparisons without MT-Bench fitting or recalibration. These results show that pre-verdict activations support prediction of susceptibility to candidate order and outperform the non-activation predictors evaluated here.
