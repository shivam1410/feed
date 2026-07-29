---
title: "Rethinking CD: A Reproducibility Study and Extension on the Ineffectiveness of Contrastive Decoding at Mitigating Object Hallucinations in MLLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25196"
authors: ["Arnav Bendre, Guneesh Gupta, Kavish Grover, Chayan Aggarwal, Shreyansh Modi"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.25196v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25196v1 Announce Type: new Abstract: Contrastive decoding (CD) has been proposed as a training-free strategy for mitigating object hallucinations in multimodal large language models (MLLMs), with reported gains on benchmarks such as POPE. However, recent work has questioned whether these gains reflect genuine improvements in visual grounding. In this study, we reproduce and extend the findings of "The Mirage of Performance Gains: Why Contrastive Decoding Fails to Mitigate Object Hallucinations in MLLMs." Specifically, we test the claim that CD induces a unidirectional output distribution shift in discriminative datasets and examine its generalizability across datasets. We also verify that the adaptive plausibility constraint (APC) reduces sampling to greedy search on both discriminative and generative benchmarks. Beyond reproduction, we rigorously study the effects of CD across generative and discriminative datasets. We conduct several experiments that provide additional insights: we analyze the logit distributions induced by different CD strategies on generative datasets, propose a proxy method and compare its performance against CD techniques, and investigate how hallucination signals propagate through each layer of the expert and amateur models. Experimental results across MME, POPE, and CHAIR using LLaVA and Qwen validate the original claims and show that the apparent improvements from CD are often spurious and do not consistently translate into stronger visual grounding for reducing hallucinations. These findings challenge the effectiveness of current contrastive decoding strategies and motivate the development of more reliable approaches for mitigating hallucinations in MLLMs.
