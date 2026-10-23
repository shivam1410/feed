---
title: "Interpreting Model Reasoning through Behavioral Counterfactuals"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30630"
authors: ["Shawn Im, James Oldfield, Adel Bibi, Sharon Li"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.30630v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Faithfully understanding the internal process that occurs as models form their chain of thought is an important problem with the rise in model capabilities. However, this remains challenging due to the variance in sampled responses, making it difficult to isolate the effects of interventions and compare model reasoning systematically. We propose a method for localizing and analyzing how a given intervention affects the model's reasoning through behavioral counterfactuals: given a fixed response, how does introducing an intervention to the prompt change the next-token distributions? We train a module to edit the residual stream such that it minimizes the KL divergence between the output distributions for a fixed response under a source prompt and its counterfactual target prompt. We find that matching the output distributions recovers the counterfactual behavior more effectively than standard activation reconstruction objectives and validate that attribution of the trained module outputs is effective for identifying causally important locations for counterfactual recovery. The attribution maps and visualizations of the downstream effects of model edits provide an interface for generating hypotheses about the original model's computation, which can then be tested with activation patching. In a case study on Gemma-4-E4B-it and DeepSeek-R1-0528-Qwen3-8B, we investigate how a suggestion influences model reasoning even when it is not verbally acknowledged. Our analysis identifies representations at the question statement and filler tokens that mediate a substantial part of the suggestion's influence, with downstream effects such as changing the framing of the justification or even the final answer.
