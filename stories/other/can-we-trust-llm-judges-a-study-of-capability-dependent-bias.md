---
title: "Can We Trust LLM Judges: A Study of Capability-Dependent Biases and Multi-Judge Ensemble for Bias Calibration"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12002"
authors: ["Gemma Zhang, Prachi Badarayani, Asmi Kumar, Sadid Hasan, Sulaiman Vesal"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12002v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12002v1 Announce Type: new Abstract: LLMs are increasingly used as automated judges for model training and evaluation, yet individual judges exhibit systematic biases that undermine reliability. Much of prior work has studied biases in pairwise LLM-as-a-judge settings; in this paper, we focus on absolute scoring tasks, which mirror more realistic use cases. Across four benchmarks and six models (36 judge-examinee pairs), we show that a model's task accuracy strongly predicts its judging accuracy (Pearson $r \geq 0.90$ on most models) and inversely predicts its directional bias ($r \leq -0.83$), but that accuracy alone does not ensure fair evaluation: more capable examinee models consistently receive more lenient judgments from all judges ($r \geq 0.83$). To address this, we propose calibrated weighted majority voting (WMV), an ensemble evaluation method that aggregates multiple LLM judges weighted by online estimates of their false-positive and false-negative rates. We introduce a disagreement-based estimator that derives these error rates purely from inter-judge agreement patterns, requiring no ground-truth labels or task metadata. In a simulated experiment with shifting task distributions, our label-free WMV tracks an oracle with perfect error-rate knowledge to within 0.5 percentage points on average, outperforming both individual judges and unweighted majority voting. These results demonstrate that principled multi-judge calibration can simultaneously improve accuracy and correct for systematic leniency without requiring labeled data, offering a scalable path to reliable automated evaluation as model capabilities increase.
