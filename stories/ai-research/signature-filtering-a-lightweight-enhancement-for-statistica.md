---
title: "Signature filtering: a lightweight enhancement for statistical watermark detection in large language models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18430"
authors: ["Chih-Duo Hong, Yen-Pang Chen, Fang Yu"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.18430v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18430v1 Announce Type: new Abstract: Statistical watermarks help organizations attribute large language model (LLM) outputs, yet existing detectors often struggle when watermark signals are weak, texts are repetitive, or watermarks are edited. We propose signature filtering, a detection-time module that enhances watermark detection without modifying watermark embedding and text generation. It learns a small set of ``signature'' tokens whose presence makes watermark tests unreliable, and removes these tokens before detection. The signatures are obtained by solving a mixed-integer linear program on a small training set, with constraints that maximize the true positive rate. We additionally derive finite-sample and asymptotic bounds under several attacker models (color-blind, color-adaptive, and distributionally correlated). On four well-known watermark families (Kgw, Sweet, Unigram, Exp), four benchmark corpora (C4, MBPP, HumanEval, Code-Search-Net), and six LLMs (Opt-1.3b, Opt-6.7b, Llama2-13b, Llama3.1-8b, Qwen2.5-14b, Phi-3-medium-14b), 2- and 3-gram signatures raise detection rates in weak-signal and low-entropy settings from 8~31% without filtering to 78~99% with filtering, while keeping false positives controllable and often negligible. In stress tests where we scramble sentences and perturb 25~50% of tokens by dilution, deletions, and substitutions, 2-gram filters for Kgw-style watermarks preserve most of the clean-text detection gains, often matching or outperforming the advanced WinMax watermark detector. Signature filtering thus provides a simple, scalable, and model-agnostic add-on to strengthen watermark-based provenance checks for LLM text in information processing workflows.
