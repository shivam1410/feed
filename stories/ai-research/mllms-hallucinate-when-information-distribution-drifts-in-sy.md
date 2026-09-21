---
title: "MLLMs Hallucinate when Information Distribution Drifts in Synergy Heads"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.09206"
authors: ["Meng&#39;en Qin", "Junye Chen", "Jucheng Liu", "Youlu Xing", "Song Wang", "Ruize Han"]
date: "2026-09-04T20:00:00.000Z"
score: 65
guid: "2609.09206"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.09206.png"
generated: "2026-09-21T19:05:57+05:30"
---

Multimodal Large Language Models (MLLMs) often struggle with hallucinations, thus hindering their reliable practical applications. Existing attention-based mitigation methods mainly rely on indirect signals (e.g., attention weights) that fail to accurately reflect the actual information shift underlying hallucination generation. In this paper, we propose HEAL, Head-lEvel information disentAnglement and caLibration for identifying and mitigating hallucinations. HEAL first employs causal noise intervention on multi-head outputs to filter out causally redundant heads. Subsequently, it disentangles information distribution within the remaining heads via the counterfactual Difference-in-Differences, categorizing heads into four types. Through analysis, we observe: hallucinations happen when information distribution drifts away from a healthy equilibrium in synergy heads, not strongly correlated with the quantity or strength of modality-specific heads. Motivated by this insight, HEAL injects dynamic information calibration factors into the value vectors of synergy heads, and actively regulates visual-language dependencies, steering the output distribution towards factual evidence. Extensive experiments demonstrate that HEAL effectively reduces hallucinations across multiple MLLMs, offering a simple and interpretable pathway to enhance model trustworthiness.
