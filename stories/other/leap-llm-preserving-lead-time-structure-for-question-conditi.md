---
title: "LEAP-LLM: Preserving lead-time structure for question-conditioned ECG interpretation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18809"
authors: ["Aakash Agarwal, Yidan Shen, Xin Fu, Renjie Hu"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18809v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

The electrocardiogram (ECG) records cardiac electrical activity across multiple leads and is used for detecting cardiac abnormalities. Recent ECG-language models enable large language models (LLMs) to interpret cardiac signals and answer clinically relevant questions. However, existing ECG-language models typically encode the ECG independently of the clinical question, forcing the ECG representation to retain broad and potentially irrelevant signal information. Moreover, these models often aggregate information across leads which can obscure lead-specific details needed for a particular question. To tackle these limitations, we introduce LEAP-LLM, an ECG-LLM architecture for Lead-aware ECG Alignment with Prompt conditioning. LEAP-LLM uses the clinical question to guide ECG feature extraction while preserving explicit lead and temporal structure. Task-trained instruction representations distill information from the question and guide two complementary branches. The Lead branch captures question-relevant temporal patterns within each ECG lead, while the Temporal branch summarizes relevant information across leads at each temporal position. Together, they provide the LLM with compact, question-relevant ECG information while preserving lead and temporal structure. LEAP-LLM reduces modality-token count by 89.0% and prefill FLOPs by 7.2x on average relative to other ECG-LLMs baselines. Across four ECG benchmarks, LEAP-LLM achieves better performance, including a 3.4-percentage-point improvement in G12EC over the strongest prior ECG-specific method. We further show that the model adaptively emphasizes the clinically relevant anatomical lead groups for different cardiac abnormalities, with lead importance patterns consistent with established diagnostic knowledge, providing interpretable evidence that the predictions are supported by clinically meaningful ECG structure.
