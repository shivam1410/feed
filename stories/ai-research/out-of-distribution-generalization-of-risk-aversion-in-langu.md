---
title: "Out-of-Distribution Generalization of Risk Aversion in Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02755"
authors: ["Kristina Zhang, Junior Chinomso Okoroafor, Benjamin Maltbie, Andrew Lin, Abhitej Bokka, Elliott Thornley"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.02755v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02755v1 Announce Type: new Abstract: Training AIs to be risk-averse in resources could offer a failsafe in the event that AIs turn out misaligned. Misaligned but risk-averse AIs would tend to prefer low-risk, low-reward strategies like cooperation over high-risk, high-reward strategies like rebellion, limiting the downsides of any misalignment. But we can only feasibly train AIs to be risk-averse on low-stakes gambles, and we will only be safe if their risk aversion generalizes to astronomically-high-stakes gambles. Will it? To shed light on this question, we introduce RiskAverseOOD: a benchmark for measuring how well risk aversion generalizes out of distribution. We then offer some initial results. Using a variety of methods to make Qwen3-8B choose risk-aversely when the stakes are low, we find that we can induce substantial risk aversion when the stakes are astronomically high. Our models' learned risk aversion generalizes at least partially across 98 orders of magnitude. From a baseline 2% rate of choosing a safe `Cooperate' option, we see rates around 70% (SFT and tie training), 52% (DPO), and 39% (activation steering). In another experiment, our fine-tuned reward model reliably scores risk-averse reasoning above risk-neutral or excessively risk-averse alternatives (99.6% pairwise accuracy). We replicate these effects at different scales (Qwen3-1.7B and Qwen3-14B) and across model families (Gemma-3-12B-IT and Llama-3.1-8B-Instruct). Overall, we find that risk aversion learned at low stakes can generalize OOD to astronomically high stakes, though not yet consistently enough to serve as a reliable failsafe. Achieving that level of consistency is an open problem.
